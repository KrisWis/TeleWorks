import styles from "./CreateOrderCostContent.module.scss";
import { memo } from "react";
import { CreateOrderCostContentProps } from "../model/CreateOrderCostContent_types";
import { CreateOrderCostPayment } from "./CreateOrderCostPayment";

export const CreateOrderCostContent: React.FC<CreateOrderCostContentProps> =
  memo(({ CreateOrderCostPaymentProps }): React.JSX.Element => {
    return (
      <section className={styles.createOrderCostContent}>
        <div className={styles.createOrderCostContent__wrapper}>
          <CreateOrderCostPayment {...CreateOrderCostPaymentProps} />
        </div>
      </section>
    );
  });
