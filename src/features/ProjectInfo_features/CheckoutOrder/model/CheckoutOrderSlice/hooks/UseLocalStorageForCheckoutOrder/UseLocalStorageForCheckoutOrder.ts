import {
  UseLocalStorage,
  UseLocalStorageCustom,
  UseLocalStorageTypes,
} from "@/shared";
import { CheckoutOrderSchema } from "../../../CheckoutOrder_types";
import { LocalStorageKeys } from "@/app/AppLocalStorageKeys";

export const UseLocalStorageForCheckoutOrder: UseLocalStorageCustom<
  CheckoutOrderSchema
> = (type, value) => {
  if (type == UseLocalStorageTypes.GET) {
    return UseLocalStorage(type, LocalStorageKeys.CHECKOUTORDER);
  } else if (type == UseLocalStorageTypes.UPDATE) {
    return UseLocalStorage(type, LocalStorageKeys.CHECKOUTORDER, value);
  }

  return false;
};
