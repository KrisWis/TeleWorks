import { StoreSchema, useAppDispatch } from "@/app/AppStore";
import { ActiveServices } from "../../ProjectInfo_pack/ui/ActiveServices/ui/ActiveServices";
import { Deadline } from "../../ProjectInfo_pack/ui/Deadline/ui/Deadline";
import { Editions } from "../../ProjectInfo_pack/ui/Editions/ui/Editions";
import { CheckoutOrderProps } from "../model/CheckoutOrder_types";
import styles from "./CheckoutOrder.module.scss";
import { memo } from "react";
import { useSelector } from "react-redux";
import { checkoutOrderSliceActions } from "../model/CheckoutOrderSlice/CheckoutOrderSlice";
import { getPackAmounts } from "../model/CheckoutOrderSlice/CheckoutOrderSlice_selectors";

export const CheckoutOrder: React.FC<CheckoutOrderProps> = memo(
  ({ pack }): React.JSX.Element => {
    const PackAmounts = useSelector((state: StoreSchema) =>
      getPackAmounts(state)
    );

    const dispatch = useAppDispatch();

    const canNotDicreasePackAmounts: boolean = PackAmounts == 1;

    return (
      <div className={styles.checkoutOrder}>
        <span className={styles.checkoutOrder__header}>Варианты заказа</span>

        <span className={styles.checkoutOrder__separator}></span>

        <div className={styles.checkoutOrder__title}>
          <span className={styles.checkoutOrder__packName}>
            {pack.packName}
          </span>
          <span className={styles.checkoutOrder__packPrice}>
            {pack.price} ₽
          </span>
        </div>

        <p className={styles.checkoutOrder__desc}>
          Базовый — для стартапов. Я разработаю ваш креативный типографский
          логотип.
        </p>

        <ActiveServices activeServices={pack.activeServices} />

        <div className={styles.checkoutOrder__wrapper}>
          <div className={styles.checkoutOrder__info}>
            <Deadline deadline={pack.deadline} />

            <Editions editionsAmount={pack.editionsAmount} />
          </div>

          <div className={styles.checkoutOrder__packsAmount}>
            <button
              disabled={canNotDicreasePackAmounts}
              onClick={() =>
                !canNotDicreasePackAmounts
                  ? dispatch(checkoutOrderSliceActions.dicreasePackAmounts(1))
                  : {}
              }
              className={`${styles.checkoutOrder__packsAmount__button} ${styles.checkoutOrder__packsAmount__dicrease} 
              ${canNotDicreasePackAmounts ? styles.checkoutOrder__packsAmount__button__disabled : ""}`}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="#FF5555" />
              </svg>
            </button>

            <span className={styles.checkoutOrder__packsAmount__text}>
              {PackAmounts}
            </span>

            <button
              onClick={() =>
                dispatch(checkoutOrderSliceActions.increasePackAmounts(1))
              }
              className={`${styles.checkoutOrder__packsAmount__button} ${styles.checkoutOrder__packsAmount__increase}`}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="#FF5555" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
);
