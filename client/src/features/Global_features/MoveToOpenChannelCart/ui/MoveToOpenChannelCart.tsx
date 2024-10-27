import styles from "./MoveToOpenChannelCart.module.scss";
import { memo, useEffect } from "react";
import { PortalElement } from "@/shared/utils/PortalElement";
import { HStack, VStack } from "@/shared/ui-kit/Stack";
import { VioletBorderContainer } from "@/shared/ui-kit/VioletBorderContainer";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { MoveToOpenChannelCartProps } from "../model/types/MoveToOpenChannelCart_types";
import { getAllChannelsInCart } from "../model/selectors/MoveToOpenChannelCartSlice_selectors";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/AppStore";
import { catalog__items } from "@/widgets/CatalogPage_widgets/Catalog";
import { AppRoutes } from "@/app";

export const MoveToOpenChannelCart: React.FC<MoveToOpenChannelCartProps> = memo(
  ({
    MoveToOpenChannelCartIsAppear,
    setMoveToOpenChannelCartIsAppear,
  }): React.JSX.Element => {
    useEffect(() => {
      setMoveToOpenChannelCartIsAppear(true);
    }, [setMoveToOpenChannelCartIsAppear]);

    const allChannelsIDsInCart = useSelector((state: RootState) =>
      getAllChannelsInCart(state.MoveToOpenChannelCartReducer!)
    );

    return PortalElement({
      children: (
        <VioletBorderContainer
          className={`${styles.MoveToOpenChannelCart} ${MoveToOpenChannelCartIsAppear ? styles.MoveToOpenChannelCart__visible : ""}`}
        >
          <VStack>
            <HStack
              className={styles.MoveToOpenChannelCart__items}
              justify="between"
            >
              <VStack
                justify="center"
                align="center"
                className={`Page__SirineWrapper ${styles.MoveToOpenChannelCart__item}`}
              >
                <span className={styles.MoveToOpenChannelCart__title}>
                  Выбрано:
                </span>
                <span className={styles.MoveToOpenChannelCart__value}>
                  {allChannelsIDsInCart.length} каналов
                </span>
              </VStack>

              <VStack
                align="center"
                justify="center"
                className={`Page__SirineWrapper ${styles.MoveToOpenChannelCart__item}`}
              >
                <span className={styles.MoveToOpenChannelCart__title}>
                  Подписчики
                </span>
                <span className={styles.MoveToOpenChannelCart__value}>
                  {allChannelsIDsInCart.reduce(
                    (sum, itemID) =>
                      sum +
                      (catalog__items.find((item) => item.id == itemID)
                        ?.subscribersAmount || 0),
                    0
                  )}
                </span>
              </VStack>

              <VStack
                justify="center"
                align="center"
                className={`Page__SirineWrapper ${styles.MoveToOpenChannelCart__item}`}
              >
                <span className={styles.MoveToOpenChannelCart__title}>
                  Просмотров
                </span>
                <span className={styles.MoveToOpenChannelCart__value}>
                  {allChannelsIDsInCart
                    .reduce(
                      (sum, itemID) =>
                        sum +
                        (catalog__items.find((item) => item.id == itemID)
                          ?.ThousandsViews || 0),
                      0
                    )
                    .toFixed(2)}
                  K
                </span>
              </VStack>
            </HStack>

            <span className={styles.MoveToOpenChannelCart__finalPrice}>
              Итого:{" "}
              {allChannelsIDsInCart
                .reduce(
                  (sum, itemID) =>
                    sum +
                    (catalog__items.find((item) => item.id == itemID)?.price ||
                      0),
                  0
                )
                .toFixed(2)}{" "}
              ₽
            </span>

            <Button
              className={styles.MoveToOpenChannelCart__toCart}
              type={ButtonTypes.RED}
              text="Перейти в корзину"
              to={AppRoutes.CATALOG_CART}
            />
          </VStack>
        </VioletBorderContainer>
      ),
    });
  }
);
