import styles from "./OrderSuccessfullyPaid.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import OrderSuccessfullyPaidSVG from "@/shared/assets/icons/Shared/OrderSuccessfullyPaid/OrderSuccessfullyPaidSVG.svg?react";
import CloseSVG from "@/shared/assets/icons/Shared/OrderSuccessfullyPaid/CloseSVG.svg?react";
import { transitionDuration } from "@/shared/const/global";

export const OrderSuccessfullyPaid: React.FC = memo((): React.JSX.Element => {
  const [IsClose, setIsClose] = useState<boolean>(false);

  const [IsVisible, setIsVisible] = useState<boolean>(true);

  const timeOutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (IsClose) {
      timeOutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, transitionDuration);
    }

    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, [IsClose]);

  return (
    <>
      {IsVisible && (
        <div
          className={`Page__SirineWrapper ${styles.orderSuccessfullyPaid} 
    ${IsClose ? styles.orderSuccessfullyPaid__closed : ""}`}
        >
          <div className={styles.orderSuccessfullyPaid__paddingWrapper}>
            <div className={styles.orderSuccessfullyPaid__body}>
              <div className={styles.orderSuccessfullyPaid__svg}>
                <OrderSuccessfullyPaidSVG />
              </div>

              <div className={styles.orderSuccessfullyPaid__textWrapper}>
                <h6 className={styles.orderSuccessfullyPaid__title}>
                  Заказ успешно оплачен
                </h6>

                <span className={styles.orderSuccessfullyPaid__text}>
                  Чек об оплате направим на вашу эл.почту
                </span>
              </div>
            </div>

            <CloseSVG
              onClick={() => setIsClose(true)}
              className={styles.orderSuccessfullyPaid__close}
            />
          </div>
        </div>
      )}
    </>
  );
});
OrderSuccessfullyPaid.displayName = "OrderSuccessfullyPaid";
