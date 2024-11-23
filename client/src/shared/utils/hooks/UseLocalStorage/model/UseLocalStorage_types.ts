export enum UseLocalStorageTypes {
  UPDATE = "update",
  GET = "get",
  DELETE = "delete",
}

export type UseLocalStorageCustom<ReturnValue> = (
  type: UseLocalStorageTypes,
  value?: ReturnValue,
  id?: string,
) => false | ReturnValue;

export type UseLocalStorageCustomSecondary<ReturnValue> = (
  type: UseLocalStorageTypes,
  id?: string,
  value?: ReturnValue,
) => false | ReturnValue;
