export interface CatalogCartSliceItem {
  id: number;
  amount: number;
}

export interface CatalogCartSliceSchema {
  items: CatalogCartSliceItem[];
}

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
