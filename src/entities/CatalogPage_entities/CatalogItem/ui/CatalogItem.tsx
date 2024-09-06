import {
  transitionDuration,
  URL_PART,
} from "@/app/layouts/model/BaseLayout__data";
import styles from "./CatalogItem.module.scss";
import { ProgressBar } from "primereact/progressbar";
import "./CatalogItemProgressBar.scss";
import {
  catalogItemAmount__selectedOptions,
  catalogItemFormat__selectedOptions,
} from "../model/CatalogItem__data";
import { Link } from "react-router-dom";
import { CatalogItemProps, CatalogItemTags } from "../model/CatalogItem__types";
import { memo, useCallback, useRef } from "react";
import {
  SelectTextStyles,
  SelectThemesEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import { Select, selectStyles } from "@/shared/ui-kit/Select";

import DropdownIndicatorSvg from "@/shared/assets/icons/CatalogPage/CatalogItem/DropdownIndicator.svg?react";
import UsersAmount from "@/shared/assets/icons/CatalogPage/CatalogItem/UsersAmount.svg?react";
import FooterBurgerMenu from "@/shared/assets/icons/CatalogPage/CatalogItem/FooterBurgerMenu.svg?react";
import FooterFavourite from "@/shared/assets/icons/CatalogPage/CatalogItem/FooterFavourite.svg?react";
import FooterCart from "@/shared/assets/icons/CatalogPage/CatalogItem/FooterCart.svg?react";
import SubscribersMen from "@/shared/assets/icons/Global/SubscribersMen.svg?react";
import SubscribersWomen from "@/shared/assets/icons/Global/SubscribersWomen.svg?react";
import Tag1 from "@/shared/assets/icons/CatalogPage/CatalogItem/Tag1.svg?react";
import Tag2 from "@/shared/assets/icons/CatalogPage/CatalogItem/Tag2.svg?react";
import Tag3 from "@/shared/assets/icons/CatalogPage/CatalogItem/Tag3.svg?react";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { MoveToOpenChannelCartActions } from "@/features/Global_features/MoveToOpenChannelCart";
import { RootState, useAppDispatch } from "@/app/store/AppStore";
import { shallowEqual, useSelector } from "react-redux";
import {
  checkChannelInCart,
  getAllChannelsInCart,
} from "@/features/Global_features/MoveToOpenChannelCart/";

const DropdownIndicator = (): JSX.Element => {
  return <DropdownIndicatorSvg className={selectStyles.Select__svg} />;
};

const TextStyles: SelectTextStyles = {
  fontFamily: "var(--second-family)",
  fontWeight: 400,
  fontSize: "14px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "#b2b2b2",
};

export const CatalogItem: React.FC<CatalogItemProps> = memo(
  ({ catalogItem, setMoveToOpenChannelCartIsAppear }): React.JSX.Element => {
    // Функционал добавления предмета в корзину
    const dispatch = useAppDispatch();

    const ChannelInCart = useSelector((state: RootState) =>
      checkChannelInCart(state, catalogItem.id)
    );

    const allChannelsIDsInCart = useSelector(
      (state: RootState) => getAllChannelsInCart(state),
      shallowEqual
    );

    const removeChannelFromCartTimeoutRef = useRef<NodeJS.Timeout>();

    const removeChannelFromCart = useCallback(
      (channel_id: number) => {
        if (allChannelsIDsInCart.length == 1) {
          setMoveToOpenChannelCartIsAppear(false);

          removeChannelFromCartTimeoutRef.current = setTimeout(() => {
            dispatch(
              MoveToOpenChannelCartActions.removeChannelFromCart({
                channelID: channel_id,
              })
            );

            clearTimeout(removeChannelFromCartTimeoutRef.current);
          }, transitionDuration);
        } else {
          dispatch(
            MoveToOpenChannelCartActions.removeChannelFromCart({
              channelID: channel_id,
            })
          );
        }
      },
      [allChannelsIDsInCart.length, dispatch, setMoveToOpenChannelCartIsAppear]
    );

    return (
      <div className={styles.catalog__item}>
        <div className={styles.catalog__item__wrapperPadding}>
          <div className={styles.catalog__item__avatar}>
            <Avatar imgURL={catalogItem.imgURL} imgSize={AvatarSizes.SMALL} />

            <div className={styles.catalog__item__usersAmount}>
              <UsersAmount />

              <span className={styles.catalog__item__usersAmount__text}>
                {catalogItem.ratingNumber}
              </span>
            </div>
          </div>

          <div className={styles.catalog__item__info}>
            <div className={styles.catalog__item__infoHeader}>
              <h6 className={styles.catalog__item__title}>
                {catalogItem.title}
              </h6>
              <p className={styles.catalog__item__desc}>{catalogItem.desc}</p>
            </div>

            <div className={styles.catalog__item__infoFooter}>
              <div className={styles.catalog__item__tags}>
                {catalogItem.tags.includes(CatalogItemTags.TAG1) && (
                  <div className={styles.catalog__item__tag}>
                    <Tag1 />
                  </div>
                )}
                {catalogItem.tags.includes(CatalogItemTags.TAG2) && (
                  <div className={styles.catalog__item__tag}>
                    <Tag2 />
                  </div>
                )}
                {catalogItem.tags.includes(CatalogItemTags.TAG3) && (
                  <div className={styles.catalog__item__tag}>
                    <Tag3 />
                  </div>
                )}
              </div>

              <div className={styles.catalog__item__stars}>
                <img
                  className={styles.catalog__item__star}
                  src={`${URL_PART}/CatalogPage/images/CatalogPage__item__star.png`}
                  alt="Звезда"
                />

                <span className={styles.catalog__item__stars__text}>
                  {catalogItem.stars}
                </span>
              </div>
            </div>
          </div>

          <div
            className={`${styles.catalog__item__subscribers} CatalogPage__wrapper`}
          >
            <span className={styles.catalog__item__category__caption}>
              Подписчики:
            </span>

            <span className={styles.catalog__item__category__amount}>
              {catalogItem.subscribersAmount}
            </span>

            <div className={styles.catalog__item__subscribers__genders}>
              <div
                className={styles.catalog__item__subscribers__gender}
                style={{ width: `${catalogItem.menPercent}%` }}
              >
                <SubscribersMen />

                <ProgressBar
                  aria-labelledby={`Соотношение мужчин в канале`}
                  className={`${styles.catalog__item__subscribers__gender__progressbar} ${styles.catalog__item__subscribers__gender__progressbar__men}`}
                  value={catalogItem.menPercent}
                  showValue={false}
                />
              </div>

              <div
                className={`${styles.catalog__item__subscribers__gender} ${styles.catalog__item__subscribers__gender__women}`}
                style={{ width: `${catalogItem.womenPercent}%` }}
              >
                <SubscribersWomen />

                <ProgressBar
                  aria-labelledby={`Соотношение женщин в канале`}
                  className={`${styles.catalog__item__subscribers__gender__progressbar} ${styles.catalog__item__subscribers__gender__progressbar__women}`}
                  value={catalogItem.womenPercent}
                  showValue={false}
                />
              </div>
            </div>
          </div>

          <div
            className={`${styles.catalog__item__views} CatalogPage__wrapper`}
          >
            <div className={styles.catalog__item__viewsWrapperViews}>
              <span className={styles.catalog__item__category__caption}>
                Просмотры:
              </span>

              <span
                className={`${styles.catalog__item__category__amount} ${styles.catalog__item__views__amount}`}
              >
                {catalogItem.ThousandsViews}K
              </span>
            </div>

            <div className={styles.catalog__item__viewsWrapperER}>
              <span className={styles.catalog__item__category__caption}>
                ER:
              </span>

              <span
                className={`${styles.catalog__item__category__amount} ${styles.catalog__item__views__amount}`}
              >
                {catalogItem.ER}%
              </span>
            </div>
          </div>

          <div className={`${styles.catalog__item__CPV} CatalogPage__wrapper`}>
            <span className={styles.catalog__item__category__caption}>
              CPV:
            </span>

            <span
              className={`${styles.catalog__item__category__amount} ${styles.catalog__item__views__amount}`}
            >
              {catalogItem.CPV}₽
            </span>
          </div>

          <div className={styles.catalog__item__subfooter}>
            <Select
              className={styles.catalog__item__select}
              TextStyles={TextStyles}
              CustomDropdownIndicator={DropdownIndicator}
              selectedOptions={catalogItemFormat__selectedOptions}
              theme={SelectThemesEnum.BLACK}
            />

            <Select
              className={styles.catalog__item__select}
              TextStyles={TextStyles}
              CustomDropdownIndicator={DropdownIndicator}
              selectedOptions={catalogItemAmount__selectedOptions}
              theme={SelectThemesEnum.BLACK}
            />

            <span className={styles.catalog__item__price}>
              {catalogItem.price}₽
            </span>
          </div>
        </div>

        <div
          className={`${styles.catalog__item__footer} ${ChannelInCart ? styles.catalog__item__footer__inCart : ""}`}
        >
          <Link className={styles.catalog__item__footer__item} to="/">
            <FooterBurgerMenu />
          </Link>

          <div className={styles.catalog__item__footerWrapper}>
            <div
              className={styles.catalog__item__footer__item}
              onClick={() =>
                ChannelInCart
                  ? removeChannelFromCart(catalogItem.id)
                  : dispatch(
                      MoveToOpenChannelCartActions.addChannelToCart({
                        channelID: catalogItem.id,
                      })
                    )
              }
            >
              <FooterCart />
            </div>

            <Link className={styles.catalog__item__footer__item} to="/">
              <FooterFavourite />
            </Link>
          </div>
        </div>
      </div>
    );
  }
);
