import { ProjectInfoPackNames } from "@/shared/const/project";
import { OrderStatuses } from "@/shared/ui-kit/OrderStatus";

export interface OrderInfoProps {
  orderImgURL: string;
  orderTitle: string;
  orderPackName: ProjectInfoPackNames;
  extraServices: string[];
  extra: string[];
  orderStatus: OrderStatuses;
  PerformerUsername: `@${string}`;
  orderDate: `${number}.${number}.${number}   ${number}:${number}`;
  multiplier: number;
  price: number;
}
