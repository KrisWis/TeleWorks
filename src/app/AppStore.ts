import { Action, Store, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootReducer } from "./AppReducer";
import { CheckoutOrderSchema } from "@/features";

export interface StoreSchema {
  checkoutOrderReducer: CheckoutOrderSchema;
}

export const store: Store<StoreSchema, Action<string>> = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
