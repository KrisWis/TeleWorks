import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Similar_channels__item.module.scss";
import { memo } from "react";
import { Similar_channels__itemProps } from "../model/Similar_channels__item__types";
import SimilarChannelsItemRating from "@/shared/assets/icons/ProfilePage/SimilarChannelsItem/SimilarChannelsItemRating.svg?react";
import SimilarChannelsItemStars from "@/shared/assets/icons/ProfilePage/SimilarChannelsItem/SimilarChannelsItemStars.svg?react";
import SimilarChannelsItemToCart from "@/shared/assets/icons/ProfilePage/SimilarChannelsItem/SimilarChannelsItemToCart.svg?react";

export const Similar_channels__item: React.FC<Similar_channels__itemProps> =
  memo(
    ({
      rating,
      starsAmount,
      imgURL,
      title,
      desc,
      subscribersAmount,
      views,
      ER,
      CPV,
      price,
    }): React.JSX.Element => {
      return (
        <div className={styles.Similar_channels__item}>
          <div className={styles.Similar_channels__item__header}>
            <div className={styles.Similar_channels__item_rating}>
              <SimilarChannelsItemRating />

              <span className={styles.Similar_channels_rating__text}>
                {rating.toFixed(1)}
              </span>
            </div>

            <div className={styles.Similar_channels__item_stars}>
              <span className={styles.Similar_channels__item_stars_span}>
                {starsAmount.toFixed(1)}
              </span>
              <SimilarChannelsItemStars />
            </div>
          </div>

          <div className={styles.Similar_channels__item__body}>
            <div className={styles.Similar_channels__item__avatar}>
              <img
                className={styles.Similar_channels__item__img}
                src={imgURL}
                alt={title}
              />
            </div>
            <h2 className={styles.Similar_channels__item__caption}>{title}</h2>
            <span className={styles.Similar_channels__item__category}>
              {desc}
            </span>
            <div className={styles.Similar_channels__item__info}>
              <div className={styles.Similar_channels__item__info_item}>
                <img
                  className={styles.Similar_channels__item__info_item_icon}
                  src={`${URL_PART}/ProfilePage/icons/similar_channels__item/similar_channels__item_info_subscribers.png`}
                  alt="Иконка подписчиков"
                />
                <span className={styles.Similar_channels__item__info_item_span}>
                  {subscribersAmount}
                </span>
              </div>

              <img
                className={styles.Similar_channels__item__info_separator}
                src={`${URL_PART}/ProfilePage/icons/similar_channels__item/similar_channels__item_info_separator.png`}
                alt="Разделитель"
              />

              <div className={styles.Similar_channels__item__info_item}>
                <img
                  className={styles.Similar_channels__item__info_item_icon}
                  src={`${URL_PART}/ProfilePage/icons/similar_channels__item/similar_channels__item_info_views.png`}
                  alt="Иконка подписчиков"
                />
                <span className={styles.Similar_channels__item__info_item_span}>
                  {views}
                </span>
              </div>

              <img
                className={styles.Similar_channels__item__info_separator}
                src={`${URL_PART}/ProfilePage/icons/similar_channels__item/similar_channels__item_info_separator.png`}
                alt="Разделитель"
              />

              <div className={styles.Similar_channels__item__info_item}>
                <span
                  className={styles.Similar_channels__item__info_item_title}
                >
                  ER
                </span>
                <span className={styles.Similar_channels__item__info_item_span}>
                  {ER.toFixed(1)}%
                </span>
              </div>

              <img
                className={styles.Similar_channels__item__info_separator}
                src={`${URL_PART}/ProfilePage/icons/similar_channels__item/similar_channels__item_info_separator.png`}
                alt="Разделитель"
              />

              <div className={styles.Similar_channels__item__info_item}>
                <span
                  className={styles.Similar_channels__item__info_item_title}
                >
                  CPV
                </span>
                <span className={styles.Similar_channels__item__info_item_span}>
                  {CPV.toFixed(2)}₽
                </span>
              </div>
            </div>
            <div className={styles.Similar_channels__item__footer}>
              <span className={styles.Similar_channels__item__price}>
                {price.toFixed(2)}₽
              </span>

              <a className={styles.Similar_channels__item__toCart} href="#">
                <SimilarChannelsItemToCart />
              </a>
            </div>
          </div>
        </div>
      );
    }
  );
