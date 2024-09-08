import { ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./AppStore";
import { rtkApi } from "../layouts/BaseLayout/api/rtkApi";

export const RootReducer: ReducersMapObject<StoreSchema> = {
  [rtkApi.reducerPath]: rtkApi.reducer,
};
