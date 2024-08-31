export enum OrderStatuses {
  PROCESS = "в процессе",
  CONTESTATION = "Оспаривание",
}

export interface OrderStatusProps {
  orderStatus: OrderStatuses;
}
