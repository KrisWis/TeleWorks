import styles from "./CartStats.module.scss";
import { memo } from "react";
import { CartStatsProps } from "../model/types";
import { Flex } from "@/shared/lib/Stack";
import { URL_PART } from "@/shared/const/app";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { FormatingNumber } from "@/shared/utils/FormatingNumber/FormatingNumber";
import {
  cartItems,
  useCartItems,
} from "@/app/layouts/BaseLayout/ui/pageWrappers/CatalogCartPageContainer";

export const CartStats: React.FC<CartStatsProps> = memo(
  (): React.JSX.Element => {
    // Получаем данные со стейта
    const cartStateItems = useCartItems();

    return (
      <Flex
        gap="10"
        direction="column"
        className={`${styles.CartStats} Page__SirineWrapper`}
        align="center"
        max
      >
        <img
          src={`${URL_PART}/CatalogCartPage/CartStats_img.png`}
          alt="Женщина складывает покупки в корзину"
        />

        <Flex
          max
          className={styles.CartStats__stats}
          direction="column"
          gap="5"
        >
          <Flex max justify="between" align="center">
            <span className={styles.CartStats__category}>Каналы</span>

            <span className={styles.CartStats__category__value}>
              {cartStateItems.length}
            </span>
          </Flex>

          <Flex max justify="between" align="center">
            <span className={styles.CartStats__category}>Размещения</span>

            <span className={styles.CartStats__category__value}>
              {cartStateItems.reduce((sum, item) => (sum += item.amount), 0)}
            </span>
          </Flex>

          <Flex max justify="between" align="center">
            <span className={styles.CartStats__category}>Подписчики</span>

            <span className={styles.CartStats__category__value}>
              {FormatingNumber(
                cartStateItems.reduce(
                  (sum, item) =>
                    (sum += cartItems.find(
                      (cartItem) => cartItem.id == item.id
                    )!.subscribersAmount),
                  0
                )
              )}
            </span>
          </Flex>

          <Flex max justify="between" align="center">
            <span className={styles.CartStats__category}>Просмотры</span>

            <span className={styles.CartStats__category__value}>
              ~{" "}
              {cartStateItems.reduce(
                (sum, item) =>
                  (sum += cartItems.find(
                    (cartItem) => cartItem.id == item.id
                  )!.ThousandsViews),
                0
              )}
              K
            </span>
          </Flex>
        </Flex>

        <Flex
          className={styles.CartStats__finalPrice__wrapper}
          align="center"
          justify="between"
          max
        >
          <span className={styles.CartStats__finalPrice__text}>Итого</span>

          <span className={styles.CartStats__finalPrice}>
            {" "}
            {FormatingNumber(
              cartStateItems.reduce(
                (sum, item) =>
                  (sum +=
                    cartItems.find((cartItem) => cartItem.id == item.id)!
                      .price *
                    cartStateItems.find((cartItem) => cartItem.id == item.id)!
                      .amount),
                0
              )
            )}
            ₽
          </span>
        </Flex>

        <Button
          className={styles.CartStats__continue}
          type={ButtonTypes.RED}
          text="Продолжить"
        />

        <Button
          className={styles.CartStats__support}
          type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
          text="Связаться с тех.поддержкой"
        />
      </Flex>
    );
  }
);
