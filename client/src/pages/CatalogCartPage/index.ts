import { lazy } from "react";

export const CatalogCartPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/CatalogCartPage").then(({ CatalogCartPage }) => ({
    default: CatalogCartPage,
  }))
);

export {
  getCartItemAmount,
  getCartItems,
} from "./model/selectors/CatalogCartSlice_selectors";
export { CatalogCartSliceActions } from "./model/slice/CatalogCartSlice";
