import {
  Action,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { StoreSchema, StoreSchemaKey } from "./AppStore";

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: Action) => StoreSchema;
  add: (key: StoreSchemaKey, reducer: Reducer) => void;
  remove: (key: StoreSchemaKey) => void;
}

export function createReducerManager(
  initialReducers: ReducersMapObject<StoreSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StoreSchemaKey> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StoreSchema, action: Action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: StoreSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StoreSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
