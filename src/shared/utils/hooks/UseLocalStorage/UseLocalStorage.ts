import { UseLocalStorageTypes } from "./UseLocalStorage_types";

export const UseLocalStorage = (
  type: UseLocalStorageTypes,
  key: string,
  value?: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): boolean | any => {
  if (type == UseLocalStorageTypes.UPDATE) {
    localStorage.setItem(key, JSON.stringify(value));
  } else if (type == UseLocalStorageTypes.GET) {
    const LocalStorageItem: string | null = localStorage.getItem(key);

    if (LocalStorageItem && LocalStorageItem !== "undefined") {
      const LocalStorageParsedItem = JSON.parse(LocalStorageItem);

      return LocalStorageParsedItem;
    } else {
      return false;
    }
  }
};
