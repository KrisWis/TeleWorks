import { RootState } from "@/app/AppStore";

export const getPackAmounts = (state: RootState): number => {
  return state.checkoutOrderReducer.packAmounts;
};
