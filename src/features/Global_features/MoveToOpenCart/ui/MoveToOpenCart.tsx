import styles from "./MoveToOpenCart.module.scss";
import { memo, useEffect, useState } from "react";
import { MoveToOpenCartProps } from "../model/MoveToOpenCart_types";
import { PortalElement } from "@/shared/utils/PortalElement";
import { HStack, VStack } from "@/shared/ui-kit/Stack";
import { VioletBorderContainer } from "@/shared/ui-kit/VioletBorderContainer";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const MoveToOpenCart: React.FC<MoveToOpenCartProps> = memo(
  (): React.JSX.Element => {
    const [MoveToOpenCartIsAppear, setMoveToOpenCartIsAppear] =
      useState<boolean>(false);

    useEffect(() => {
      setMoveToOpenCartIsAppear(true);
    }, []);

    return PortalElement({
      children: (
        <VioletBorderContainer
          className={`${styles.MoveToOpenCart} ${MoveToOpenCartIsAppear ? styles.MoveToOpenCart__visible : ""}`}
        >
          <VStack>
            <HStack className={styles.MoveToOpenCart__items} justify="between">
              <VStack
                justify="center"
                align="center"
                className={`Page__SirineWrapper ${styles.MoveToOpenCart__item}`}
              >
                <span className={styles.MoveToOpenCart__title}>Выбрано:</span>
                <span className={styles.MoveToOpenCart__value}>5 каналов</span>
              </VStack>

              <VStack
                align="center"
                justify="center"
                className={`Page__SirineWrapper ${styles.MoveToOpenCart__item}`}
              >
                <span className={styles.MoveToOpenCart__title}>Подписчики</span>
                <span className={styles.MoveToOpenCart__value}>132 124</span>
              </VStack>

              <VStack
                justify="center"
                align="center"
                className={`Page__SirineWrapper ${styles.MoveToOpenCart__item}`}
              >
                <span className={styles.MoveToOpenCart__title}>Просмотров</span>
                <span className={styles.MoveToOpenCart__value}>300K</span>
              </VStack>
            </HStack>

            <span className={styles.MoveToOpenCart__finalPrice}>
              Итого: 151 334 ₽
            </span>

            <Button
              className={styles.MoveToOpenCart__toCart}
              type={ButtonTypes.RED}
              text="Перейти в корзину"
            />
          </VStack>
        </VioletBorderContainer>
      ),
    });
  }
);
