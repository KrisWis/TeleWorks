import {
  UseLocalStorage,
  UseLocalStorageCustom,
  UseLocalStorageTypes,
} from "@/shared";
import { LocalStorageKeys } from "@/app/AppLocalStorageKeys";
import { ProjectInfoPackNames } from "@/features/ProjectInfo_features/ProjectInfo_pack/model/ProjectInfo_pack_types";

export interface UseLocalStorageForCheckoutOrderModalReturn {
  activePack: ProjectInfoPackNames | string;
  value: boolean;
}

export const UseLocalStorageForCheckoutOrderModal: UseLocalStorageCustom<
  UseLocalStorageForCheckoutOrderModalReturn
> = (type, value) => {
  if (type == UseLocalStorageTypes.GET) {
    return UseLocalStorage(type, LocalStorageKeys.CHECKOUTORDER_MODAL);
  } else if (type == UseLocalStorageTypes.UPDATE) {
    return UseLocalStorage(type, LocalStorageKeys.CHECKOUTORDER_MODAL, value);
  }

  return false;
};
