import {
  ReduxStoreWithManager,
  StoreSchema,
  StoreSchemaKey,
} from "@/app/store/AppStore";
import { Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StoreSchemaKey]?: Reducer<NonNullable<StoreSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  children: React.ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  const mountedReducers = store.reducerManager.getMountedReducers();

  // TODO: убрать логи, когда будет закончена разработка
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StoreSchemaKey];
      if (!mounted) {
        store.reducerManager.add(name as StoreSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StoreSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, [
    dispatch,
    mountedReducers,
    reducers,
    removeAfterUnmount,
    store.reducerManager,
  ]);

  return <>{children}</>;
};
