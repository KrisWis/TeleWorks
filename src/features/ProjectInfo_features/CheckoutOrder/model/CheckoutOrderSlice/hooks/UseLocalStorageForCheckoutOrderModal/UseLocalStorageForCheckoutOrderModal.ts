import {
  UseLocalStorage,
  UseLocalStorageCustom,
  UseLocalStorageTypes,
} from "@/shared";
import { LocalStorageKeys } from "@/app/AppLocalStorageKeys";

export const UseLocalStorageForCheckoutOrderModal: UseLocalStorageCustom<
  boolean
> = (type, value) => {
  if (type == UseLocalStorageTypes.GET) {
    return UseLocalStorage(type, LocalStorageKeys.CHECKOUTORDER_MODAL);
  } else if (type == UseLocalStorageTypes.UPDATE) {
    return UseLocalStorage(type, LocalStorageKeys.CHECKOUTORDER_MODAL, value);
  }

  return false;
};
