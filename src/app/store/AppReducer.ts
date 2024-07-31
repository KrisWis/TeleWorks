import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./AppStore";
import { CheckoutOrderSchema } from "@/features/ProjectInfo_features/CheckoutOrder";

export interface RootReducer {
  checkoutOrderReducer?: Reducer<CheckoutOrderSchema>;
}

export const RootReducer: ReducersMapObject<StoreSchema> = {};
