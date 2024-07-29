export enum UseLocalStorageTypes {
  UPDATE = "update",
  GET = "get",
  DELETE = "delete",
}

export type UseLocalStorageCustom<ReturnValue> = (
  type: UseLocalStorageTypes,
  value?: ReturnValue
) => false | ReturnValue;
