import { StoreSchema, useAppSelector } from "@/shared/config/store/AppStore";
import { shallowEqual } from "react-redux";

type Selector<T> = (state: StoreSchema) => T;
type Result<T> = [() => T, Selector<T>];

export function buildSelector<T>(
  selector: Selector<T>,
  customShallowEqual?: boolean
): Result<T> {
  const useSelectorHook = () => {
    if (customShallowEqual) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useAppSelector(selector, shallowEqual);
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useAppSelector(selector);
    }
  };

  return [useSelectorHook, selector];
}
