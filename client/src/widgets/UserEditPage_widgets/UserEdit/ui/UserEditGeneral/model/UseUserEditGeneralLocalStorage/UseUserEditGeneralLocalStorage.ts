import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/shared/const/app";
import { SelectProfessionsEnum } from "../UserEditGeneral_data";
import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";

export interface UserEditGeneralLocalStorage {
  name: string;
  surname: string;
  profession: Select_Option<SelectProfessionsEnum>;
  tags: string[];
}

export const UseUserEditGeneralLocalStorage: UseLocalStorageCustom<
  UserEditGeneralLocalStorage
> = (type, value) =>
  UseLocalStorage(type, LocalStorageKeys.USER_EDIT_GENERAL, value);
