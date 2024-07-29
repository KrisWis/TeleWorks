import { Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CheckoutOrderSchema } from "@/features/ProjectInfo_features";
import { StoreSchema } from "./AppStore";
import { checkoutOrderReducer } from "@/features/ProjectInfo_features/CheckoutOrder/model/slice/CheckoutOrderSlice";

export interface RootReducer {
  checkoutOrderReducer: Reducer<CheckoutOrderSchema>;
}

export const RootReducer: ReducersMapObject<StoreSchema> = {
  checkoutOrderReducer,
};
