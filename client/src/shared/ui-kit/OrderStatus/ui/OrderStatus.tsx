import { OrderStatuses, OrderStatusProps } from "../model/OrderStatus_types";
import styles from "./OrderStatus.module.scss";
import { memo } from "react";

export const OrderStatus: React.FC<OrderStatusProps> = memo(
  ({ orderStatus }): React.JSX.Element => {
    return (
      <span
        className={`${styles.orderStatus} 
        ${orderStatus == OrderStatuses.PROCESS ? styles.orderStatus__process : ""}
        ${orderStatus == OrderStatuses.CONTESTATION ? styles.orderStatus__contestation : ""}`}
      >
        {orderStatus}
      </span>
    );
  },
);
OrderStatus.displayName = "OrderStatus";
