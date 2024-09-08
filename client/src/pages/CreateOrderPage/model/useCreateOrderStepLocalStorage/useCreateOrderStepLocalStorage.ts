import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { CreateOrderPageContext } from "../CreateOrderPageContext";
import { LocalStorageKeys } from "@/app/layouts/BaseLayout/model/LocalStorageKeys";

export const UseCreateOrderStepLocalStorage: UseLocalStorageCustom<
  Omit<
    CreateOrderPageContext,
    "setCreateOrderActiveStep" | "setCreateOrderCompletedSteps"
  >
> = (type, value) => {
  return UseLocalStorage(type, LocalStorageKeys.CREATE_ORDER_STEP, value);
};
