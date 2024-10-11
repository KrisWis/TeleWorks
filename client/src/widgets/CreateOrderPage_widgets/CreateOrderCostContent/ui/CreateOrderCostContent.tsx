import styles from "./CreateOrderCostContent.module.scss";
import { memo } from "react";
import { CreateOrderCostPayment } from "./CreateOrderCostPayment";
import { createOrderCostFinalPrice } from "../model/CreateOrderCostContent_data";
import { OrderSecurityGuarantee } from "@/shared/ui-kit/OrderSecurityGuarantee";
import { OrderPreview } from "@/entities/CreateOrderPage_entities/OrderPreview";

export const CreateOrderCostContent: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.createOrderCostContent}>
      <div className={styles.createOrderCostContent__firstCol}>
        <CreateOrderCostPayment />
      </div>

      <div className={styles.createOrderCostContent__secondCol}>
        <OrderPreview FinalPrice={createOrderCostFinalPrice} />

        <OrderSecurityGuarantee />
      </div>
    </section>
  );
});
