import { CatalogCartSliceSchema } from "@/shared/types/catalog";

interface changeItemAmountPayload {
  itemId: number;
  amount: number;
}

export interface changeItemAmountAction {
  payload: changeItemAmountPayload;
  type: string;
}

export interface setItemsAction {
  payload: CatalogCartSliceSchema;
  type: string;
}
