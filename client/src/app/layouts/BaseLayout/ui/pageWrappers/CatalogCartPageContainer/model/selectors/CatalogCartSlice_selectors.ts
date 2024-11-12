import { StoreSchema } from "@/shared/config/store/AppStore";
import {
  CatalogCartSliceItem,
  CatalogCartSliceSchema,
} from "@/shared/types/catalog";
import { buildSelector } from "@/shared/utils/store";

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

export const [useCartItems, getCartItems] = buildSelector<
  CatalogCartSliceItem[]
>((state: StoreSchema) => {
  if (state.CatalogCartSliceReducer) {
    return state.CatalogCartSliceReducer!.items;
  }

  return [];
}, true);
