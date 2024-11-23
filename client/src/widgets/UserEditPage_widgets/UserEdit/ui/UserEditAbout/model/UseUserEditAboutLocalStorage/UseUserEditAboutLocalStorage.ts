import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/shared/const/app";

export const UseUserEditAboutLocalStorage: UseLocalStorageCustom<string> = (
  type,
  value,
) => UseLocalStorage(type, LocalStorageKeys.USER_EDIT_ABOUT, value);
