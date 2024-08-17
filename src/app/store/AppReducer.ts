import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./AppStore";
import { CheckoutOrderSchema } from "@/features/ProjectInfo_features/CheckoutOrder";
import { MoveToOpenChannelCartSchema } from "@/features/Global_features/MoveToOpenChannelCart";

export interface RootReducer {
  checkoutOrderReducer?: Reducer<CheckoutOrderSchema>;
  MoveToOpenChannelCartReducer?: Reducer<MoveToOpenChannelCartSchema>;
}

export const RootReducer: ReducersMapObject<StoreSchema> = {};
