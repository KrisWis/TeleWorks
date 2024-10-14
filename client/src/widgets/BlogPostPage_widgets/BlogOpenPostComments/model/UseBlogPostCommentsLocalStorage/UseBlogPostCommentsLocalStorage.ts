import {
  UseLocalStorage,
  UseLocalStorageCustomSecondary,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/app/layouts/BaseLayout/model/LocalStorageKeys";

export interface UseBlogPostCommentsLocalStorageInterface {
  textareaValue: string;
}

export const UseBlogPostCommentsLocalStorage: UseLocalStorageCustomSecondary<
  UseBlogPostCommentsLocalStorageInterface
> = (type, id, value) => {
  return UseLocalStorage(
    type,
    (LocalStorageKeys.BLOG_CREATE + id) as LocalStorageKeys,
    value
  );
};
