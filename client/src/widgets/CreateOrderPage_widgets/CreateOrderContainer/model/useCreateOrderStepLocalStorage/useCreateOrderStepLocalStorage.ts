import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { CreateOrderPageContext } from "../CreateOrderPageContext";
import { LocalStorageKeys } from "@/shared/const/app";

export const UseCreateOrderStepLocalStorage: UseLocalStorageCustom<
  Omit<
    CreateOrderPageContext,
    "setCreateOrderActiveStep" | "setCreateOrderCompletedSteps"
  >
> = (type, value) => {
  return UseLocalStorage(type, LocalStorageKeys.CREATE_ORDER_STEP, value);
};
