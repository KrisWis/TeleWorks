export enum UseLocalStorageTypes {
  UPDATE = "update",
  GET = "get",
}

export type UseLocalStorageCustom<ReturnValue> = (
  type: UseLocalStorageTypes,
  value?: unknown
) => boolean | ReturnValue;
