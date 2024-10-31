import { CheckoutOrderPacks } from "./project";

export interface CheckoutOrderSchema {
  packs: CheckoutOrderPacks;
  finalPrice: number;
}
export interface MoveToOpenChannelCartSchema {
  channelsIDs: number[];
}
