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
  packs: {
    Базовый: {
      packPrice: 0,
      packAmounts: 1,
    },

    Стандарт: {
      packPrice: 0,
      packAmounts: 1,
    },

    Премиум: {
      packPrice: 0,
      packAmounts: 1,
    },
  },
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
        // @ts-expect-error ts сбрасывает типы ключа
        state[key as keyof CheckoutOrderSchema] =
          action.payload[key as keyof CheckoutOrderSchema];
      }
    },

    setPackPrice: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackPriceAction
    ) => {
      state.packs[action.payload.packType].packPrice = action.payload.price;
    },

    increasePackAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackAmountsAction
    ) => {
      const packState = state.packs[action.payload.packType];

      state.packs[action.payload.packType].packAmounts =
        packState.packAmounts + action.payload.amounts;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },

    dicreasePackAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackAmountsAction
    ) => {
      const packState = state.packs[action.payload.packType];

      state.packs[action.payload.packType].packAmounts =
        packState.packAmounts - action.payload.amounts;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },
  },
});

export const checkoutOrderSliceActions = checkoutOrderSlice.actions;

export const checkoutOrderReducer = checkoutOrderSlice.reducer;
