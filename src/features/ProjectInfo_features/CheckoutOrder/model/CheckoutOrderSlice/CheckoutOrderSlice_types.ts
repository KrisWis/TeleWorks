import { CheckoutOrderSchema } from "@/features";

export interface CheckoutOrderPackPriceAction {
  payload: number;
  type: string;
}

export interface CheckoutOrderPackAmountsAction {
  payload: number;
  type: string;
}

export interface CheckoutOrderStateAction {
  payload: CheckoutOrderSchema;
  type: string;
}
