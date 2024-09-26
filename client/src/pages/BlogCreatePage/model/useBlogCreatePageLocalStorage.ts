import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/app/layouts/BaseLayout/model/LocalStorageKeys";

interface useBlogCreatePageLocalStorageInterface {
  title: string;
  textareaValue: string;
  tags: string[];
}

export const useBlogCreatePageLocalStorage: UseLocalStorageCustom<
  useBlogCreatePageLocalStorageInterface
> = (type, value) => {
  return UseLocalStorage(type, LocalStorageKeys.BLOG_CREATE, value);
};
