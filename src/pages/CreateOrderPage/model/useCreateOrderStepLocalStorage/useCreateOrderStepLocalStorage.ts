import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { CreateOrderPageContext } from "../CreateOrderPageContext";
import { LocalStorageKeys } from "@/app/layouts/model/LocalStorageKeys";

export const useCreateOrderStepLocalStorage: UseLocalStorageCustom<
  Omit<
    CreateOrderPageContext,
    "setCreateOrderActiveStep" | "setCreateOrderCompletedSteps"
  >
> = (type, value) =>
  UseLocalStorage(type, LocalStorageKeys.CREATE_ORDER_STEP, value);
