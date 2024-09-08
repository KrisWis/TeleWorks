import { LocalStorageKeys } from "@/app/layouts/BaseLayout/model/LocalStorageKeys";
import { UseLocalStorageTypes } from "./UseLocalStorage_types";

export const UseLocalStorage = (
  type: UseLocalStorageTypes,
  key: LocalStorageKeys,
  value?: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): boolean | any => {
  if (type == UseLocalStorageTypes.UPDATE) {
    localStorage.setItem(key as unknown as string, JSON.stringify(value));
  } else if (type == UseLocalStorageTypes.GET) {
    const LocalStorageItem: string | null = localStorage.getItem(
      key as unknown as string
    );

    if (LocalStorageItem && LocalStorageItem !== "undefined") {
      const LocalStorageParsedItem = JSON.parse(LocalStorageItem);

      return LocalStorageParsedItem;
    } else {
      return false;
    }
  } else if (type == UseLocalStorageTypes.DELETE) {
    localStorage.removeItem(key as unknown as string);
  }

  return true;
};
