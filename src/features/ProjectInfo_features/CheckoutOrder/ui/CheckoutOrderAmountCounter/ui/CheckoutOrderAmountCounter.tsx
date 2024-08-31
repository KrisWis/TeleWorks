import { CheckoutOrderAmountCounterProps } from "../model/CheckoutOrderAmountCounter_types";
import styles from "./CheckoutOrderAmountCounter.module.scss";
import { memo, useMemo } from "react";

export const CheckoutOrderAmountCounter: React.FC<CheckoutOrderAmountCounterProps> =
  memo(
    ({
      amount,
      dicreaseAmount,
      increaseAmount,
      isDisabled,
    }): React.JSX.Element => {
      const canNotDicreaseAmount: boolean = useMemo(
        () => amount == 1,
        [amount]
      );

      return (
        <div
          className={`${styles.checkoutOrderAmountCounter} 
        ${isDisabled ? styles.checkoutOrderAmountCounter__disabled : ""}`}
        >
          <button
            disabled={canNotDicreaseAmount}
            onClick={() => (!canNotDicreaseAmount ? dicreaseAmount() : {})}
            className={`${styles.checkoutOrderAmountCounter__button} ${styles.checkoutOrderAmountCounter__dicrease} 
              ${canNotDicreaseAmount ? styles.checkoutOrderAmountCounter__button__disabled : ""}`}
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

          <span className={styles.checkoutOrderAmountCounter__text}>
            {amount}
          </span>

          <button
            onClick={() => increaseAmount()}
            className={`${styles.checkoutOrderAmountCounter__button} ${styles.checkoutOrderAmountCounter__increase}`}
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
      );
    }
  );
