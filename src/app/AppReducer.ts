import { CheckoutOrderSchema } from "@/features";
import { Reducer } from "@reduxjs/toolkit";
import { checkoutOrderReducer } from "../features/ProjectInfo_features/CheckoutOrder/model/CheckoutOrderSlice/CheckoutOrderSlice";

export interface RootReducer {
  checkoutOrderReducer: Reducer<CheckoutOrderSchema>;
}

export const RootReducer: RootReducer = { checkoutOrderReducer };

export type RootReducerKey = keyof RootReducer;
