/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreSchema, useAppSelector } from "@/shared/config/store/AppStore";
import { shallowEqual } from "react-redux";

type Selector<T, Args extends any[]> = (state: StoreSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[] = []>(
  selector: Selector<T, Args>,
  isShallowEqual?: boolean,
): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) => {
    const ShallowEqual = isShallowEqual ? shallowEqual : undefined;

    return useAppSelector((state) => selector(state, ...args), ShallowEqual);
  };

  return [useSelectorHook, selector];
}
