import { createSlice } from "@reduxjs/toolkit";
import { CheckoutOrderSchema } from "@/features";
import {
  CheckoutOrderPackAmountsAction,
  CheckoutOrderPackPriceAction,
  CheckoutOrderStateAction,
} from "./CheckoutOrderSlice_types";
import { UseLocalStorageTypes } from "@/shared";
import { UseLocalStorageForCheckoutOrder } from "./hooks/UseLocalStorageForCheckoutOrder/UseLocalStorageForCheckoutOrder";

const initialState: CheckoutOrderSchema = {
  packPrice: 0,
  packAmounts: 1,
  extraServicesPrice: 0,
  finalPrice: 0,
};

export const checkoutOrderSlice = createSlice({
  name: "checkoutOrder",
  initialState: initialState,
  reducers: {
    setCheckoutOrderState: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderStateAction
    ) => {
      for (const key in action.payload) {
        state[key as keyof CheckoutOrderSchema] =
          action.payload[key as keyof CheckoutOrderSchema];
      }
    },

    setPackPrice: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackPriceAction
    ) => {
      state.packPrice = action.payload;
    },

    increasePackAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackAmountsAction
    ) => {
      state.packAmounts = state.packAmounts + action.payload;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },

    dicreasePackAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackAmountsAction
    ) => {
      state.packAmounts = state.packAmounts - action.payload;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },
  },
});

export const checkoutOrderSliceActions = checkoutOrderSlice.actions;

export const checkoutOrderReducer = checkoutOrderSlice.reducer;
