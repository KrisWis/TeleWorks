import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/shared/const/app";
import { KindDeedsCreateRequestLocalStorageInterface } from "../types";

export const UseKindDeedsCreateRequestLocalStorage: UseLocalStorageCustom<
  KindDeedsCreateRequestLocalStorageInterface
> = (type, value) => {
  return UseLocalStorage(type, LocalStorageKeys.CREATE_ORDER_STEP, value);
};
