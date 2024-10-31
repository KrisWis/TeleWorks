import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/shared/const/app";

export interface useBlogCreatePageLocalStorageInterface {
  title: string;
  textareaValue: string;
  tags: string[];
}

export const UseBlogCreatePageLocalStorage: UseLocalStorageCustom<
  useBlogCreatePageLocalStorageInterface
> = (type, value) => {
  return UseLocalStorage(type, LocalStorageKeys.BLOG_CREATE, value);
};
