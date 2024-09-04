import {
  Action,
  combineReducers,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { StoreSchema, StoreSchemaKey } from "./AppStore";
import { OptionalRecord } from "@/shared/types";

export type MountedReducers = OptionalRecord<StoreSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: Action) => StoreSchema;
  add: (key: StoreSchemaKey, reducer: Reducer) => void;
  remove: (key: StoreSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export function createReducerManager(
  initialReducers: ReducersMapObject<StoreSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StoreSchemaKey> = [];
  const mountedReducers: MountedReducers = {};

  // TODO: если под конец проекта так и не появится глобальных редюсеров, то пофиксить ошибку в консоли

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StoreSchema, action: Action) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }

      // @ts-expect-error В проекте используются асинхронные редюссеры, поэтому очевидно, что state будет пустым
      return combinedReducer(state, action);
    },
    add: (key: StoreSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      mountedReducers[key] = true;

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
