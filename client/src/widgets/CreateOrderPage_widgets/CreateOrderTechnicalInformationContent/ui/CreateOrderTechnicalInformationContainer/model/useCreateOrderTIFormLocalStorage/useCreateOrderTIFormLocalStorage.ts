import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/shared/const/app";

export const UseCreateOrderTIFormLocalStorage: UseLocalStorageCustom<string> = (
  type,
  value
) =>
  UseLocalStorage(
    type,
    LocalStorageKeys.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM,
    value
  );
