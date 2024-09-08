import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/app/layouts/BaseLayout/model/LocalStorageKeys";

export const useCreateOrderTIFormLocalStorage: UseLocalStorageCustom<string> = (
  type,
  value
) =>
  UseLocalStorage(
    type,
    LocalStorageKeys.CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM,
    value
  );
