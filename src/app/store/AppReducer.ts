import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./AppStore";
import { checkoutOrderReducer } from "@/features/ProjectInfo_features/CheckoutOrder/model/slice/CheckoutOrderSlice";
import { CheckoutOrderSchema } from "@/features/ProjectInfo_features/CheckoutOrder";

export interface RootReducer {
  checkoutOrderReducer: Reducer<CheckoutOrderSchema>;
}

export const RootReducer: ReducersMapObject<StoreSchema> = {
  checkoutOrderReducer,
};
