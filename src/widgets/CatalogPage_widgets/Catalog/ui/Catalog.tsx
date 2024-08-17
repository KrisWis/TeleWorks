import styles from "./Catalog.module.scss";
import "@/shared/main.scss";
import {
  ButtonProps,
  ButtonTypes,
} from "@/shared/ui-kit/Button/model/Button__types";
import {
  catalog__categories,
  catalog__filters,
  catalog__items,
} from "../model/Catalog__data";
import { Button } from "@/shared/ui-kit/Button";
import { Filter } from "@/features/Global_features/Filter";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import { RootState, useAppDispatch } from "@/app/store/AppStore";
import { shallowEqual, useSelector } from "react-redux";
import {
  getAllChannelsInCart,
  MoveToOpenChannelCart,
  MoveToOpenChannelCartActions,
  UseMoveToOpenChannelCartLocalStorage,
} from "@/features/Global_features/MoveToOpenChannelCart";
import { memo, useEffect, useRef, useState } from "react";
import { CatalogItem } from "@/entities/CatalogPage_entities/CatalogItem";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";

export const Catalog: React.FC = memo((): React.JSX.Element => {
  // Функционал добавления предмета в корзину
  const [MoveToOpenChannelCartIsAppear, setMoveToOpenChannelCartIsAppear] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();
  const allChannelsIdsInCartFromLS = UseMoveToOpenChannelCartLocalStorage(
    UseLocalStorageTypes.GET
  );

  const allChannelsIdsInCartFromLSTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (allChannelsIdsInCartFromLS && allChannelsIdsInCartFromLS.length) {
      allChannelsIdsInCartFromLSTimeoutRef.current = setTimeout(() => {
        dispatch(
          MoveToOpenChannelCartActions.setChannelsForCart({
            channelsIDs: allChannelsIdsInCartFromLS,
          })
        );

        clearTimeout(allChannelsIdsInCartFromLSTimeoutRef.current);
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allChannelsIDsInCart = useSelector(
    (state: RootState) => getAllChannelsInCart(state),
    shallowEqual
  );

  return (
    <section className={styles.catalog} data-testid="catalog">
      <h1 className="Page__caption">Каталог Telegram-каналов</h1>

      <div className={styles.catalog__categories}>
        {catalog__categories.map((category: ButtonProps) => (
          <Button
            key={category.text}
            text={category.text}
            type={category.type}
            className={`${styles.catalog__category}`}
            canSelected
          />
        ))}
      </div>

      <div className={styles.catalog__body}>
        <Filter bonusFilters={catalog__filters} />

        <div className={styles.catalog__items}>
          {catalog__items.map((item) => (
            <CatalogItem
              setMoveToOpenChannelCartIsAppear={
                setMoveToOpenChannelCartIsAppear
              }
              key={item.id}
              catalogItem={item}
            />
          ))}
        </div>
      </div>

      <LoadMore type={ButtonTypes.CYAN} className={styles.catalog__loadMore} />

      {allChannelsIDsInCart.length > 0 && (
        <MoveToOpenChannelCart
          MoveToOpenChannelCartIsAppear={MoveToOpenChannelCartIsAppear}
          setMoveToOpenChannelCartIsAppear={setMoveToOpenChannelCartIsAppear}
        />
      )}
    </section>
  );
});
