import {
  UseLocalStorage,
  UseLocalStorageCustom,
} from "@/shared/utils/hooks/UseLocalStorage";
import { LocalStorageKeys } from "@/shared/const/app";

export const UseMoveToOpenChannelCartLocalStorage: UseLocalStorageCustom<
  number[]
> = (type, value) =>
  UseLocalStorage(type, LocalStorageKeys.MOVE_TO_OPEN_CHANNEL_CART, value);
