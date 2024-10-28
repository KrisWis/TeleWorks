import { configureStore, EnhancedStore, Reducer } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createReducerManager, ReducerManager } from "./AppReducerManager";
import { RootReducer } from "./AppReducer";
import { CheckoutOrderSchema } from "@/features/ProjectInfo_features/CheckoutOrder";
import { MoveToOpenChannelCartSchema } from "@/features/Global_features/MoveToOpenChannelCart";
import { rtkApi } from "../layouts/BaseLayout/api/rtkApi";
import { CatalogCartSliceSchema } from "@/pages/CatalogCartPage/model/types/CatalogCartSlice_types";

export interface StoreSchema {
  checkoutOrderReducer?: CheckoutOrderSchema;
  MoveToOpenChannelCartReducer?: MoveToOpenChannelCartSchema;
  CatalogCartSliceReducer?: CatalogCartSliceSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

const reducerManager = createReducerManager(RootReducer);

export const store = configureStore({
  reducer: reducerManager.reduce as Reducer<StoreSchema>,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

// TODO: под конец проекта пофиксить это, если до этого от улби не узнаю как это сделать
// @ts-expect-error store не имеет поле reducerManager
store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type StoreSchemaKey = keyof StoreSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReducerManager;
}
