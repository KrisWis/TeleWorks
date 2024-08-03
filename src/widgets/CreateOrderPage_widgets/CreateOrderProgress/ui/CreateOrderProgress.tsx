import styles from "./CreateOrderProgress.module.scss";
import { memo } from "react";
import { CreateOrderProgressProps } from "../model/CreateOrderProgress_types";

export const CreateOrderProgress: React.FC<CreateOrderProgressProps> = memo(
  (): React.JSX.Element => {
    return (
      <div className={styles.createOrderProgress}>
        <div
          className={`${styles.createOrderProgress__item} ${styles.createOrderProgress__item__first} ${styles.createOrderProgress__item__completed}`}
        >
          <span className={styles.createOrderProgress__item__step}></span>

          <span className={styles.createOrderProgress__item__title}>
            Заказ создан
          </span>
        </div>

        <div
          className={`${styles.createOrderProgress__item} ${styles.createOrderProgress__item__second}`}
        >
          <span className={styles.createOrderProgress__item__step}></span>

          <span className={styles.createOrderProgress__item__title}>
            Стоимость
          </span>
        </div>

        <div
          className={`${styles.createOrderProgress__item} ${styles.createOrderProgress__item__third} ${styles.createOrderProgress__item__closed}`}
        >
          <span className={styles.createOrderProgress__item__step}></span>

          <span className={styles.createOrderProgress__item__title}>
            Заказ начат
          </span>
        </div>
      </div>
    );
  }
);
