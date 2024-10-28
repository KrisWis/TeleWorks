import {
  CatalogCartSliceItem,
  CatalogCartSliceSchema,
} from "../types/CatalogCartSlice_types";

export const getCartItemAmount = (
  state: CatalogCartSliceSchema,
  id: number
): number => {
  if (state) {
    const item = state.items.find((item) => item.id == id);
    if (item) return item.amount;
  }
  return 1;
};

export const getCartItems = (
  state: CatalogCartSliceSchema
): CatalogCartSliceItem[] => {
  if (state) {
    if (state) return state.items;
  }
  return [];
};
