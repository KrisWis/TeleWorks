export * from "./ui/CatalogCartPageContainer";
export {
  getCartItemAmount,
  getCartItems,
  useCartItems,
} from "./model/selectors/CatalogCartSlice_selectors";
export {
  CatalogCartSliceActions,
  useCatalogCartSliceActions,
} from "./model/slice/CatalogCartSlice";
export { cartItems } from "./model/data";
