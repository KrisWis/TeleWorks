import { createSlice } from "@reduxjs/toolkit";
import { CheckoutOrderSchema } from "@/features";
import {
  CheckoutOrderExtraServicesAction,
  CheckoutOrderExtraServiceAmountAction,
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
      extraServices: {},
    },

    Стандарт: {
      packPrice: 0,
      packAmounts: 1,
      extraServices: {},
    },

    Премиум: {
      packPrice: 0,
      packAmounts: 1,
      extraServices: {},
    },
  },
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

    changePackAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackAmountsAction
    ) => {
      const packState = state.packs[action.payload.packType];

      state.packs[action.payload.packType].packAmounts =
        packState.packAmounts + action.payload.amounts;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },

    changeExtraServiceAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderExtraServiceAmountAction
    ) => {
      let extraServiceAmount =
        state.packs[action.payload.packType].extraServices[
          action.payload.extraServiceTitle
        ].amount;

      if (!extraServiceAmount) extraServiceAmount = 1;

      state.packs[action.payload.packType].extraServices[
        action.payload.extraServiceTitle
      ].amount = extraServiceAmount + action.payload.extraServiceAmount;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },

    addExtraServices: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderExtraServicesAction
    ) => {
      const extraServices = state.packs[action.payload.packType].extraServices;

      for (const extraService of action.payload.extraServices) {
        extraServices[extraService.title] = extraService;
      }

      state.packs[action.payload.packType].extraServices = extraServices;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },
  },
});

export const checkoutOrderSliceActions = checkoutOrderSlice.actions;

export const checkoutOrderReducer = checkoutOrderSlice.reducer;
