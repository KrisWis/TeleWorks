import { CheckoutOrderSchema } from "@/features/ProjectInfo_features";
import { configureStore, EnhancedStore, Reducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createReducerManager, ReducerManager } from "./AppReducerManager";
import { RootReducer } from "./AppReducer";

export interface StoreSchema {
  checkoutOrderReducer: CheckoutOrderSchema;
}

const reducerManager = createReducerManager(RootReducer);

export const store = configureStore<StoreSchema>({
  reducer: reducerManager.reduce as Reducer<StoreSchema>,
});

store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type StoreSchemaKey = keyof StoreSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManager;
}
