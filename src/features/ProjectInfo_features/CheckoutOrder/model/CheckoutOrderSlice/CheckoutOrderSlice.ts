import { createSlice } from "@reduxjs/toolkit";
import { CheckoutOrderSchema } from "@/features";
import {
  CheckoutOrderExtraServicesAction,
  CheckoutOrderExtraServiceAmountAction,
  CheckoutOrdereditionsAmountsAction,
  CheckoutOrderPackPriceAction,
  CheckoutOrderStateAction,
  CheckoutOrderExtraServiceAction,
  CheckoutOrderFinalPriceAction,
} from "./CheckoutOrderSlice_types";
import { UseLocalStorageTypes } from "@/shared";
import { UseLocalStorageForCheckoutOrder } from "./hooks/UseLocalStorageForCheckoutOrder/UseLocalStorageForCheckoutOrder";

const editionsAmountsMultiplier: number = 1.5;

const initialState: CheckoutOrderSchema = {
  packs: {
    Базовый: {
      packPrice: 0,
      editionsAmounts: 1,
      extraServices: {},
    },

    Стандарт: {
      packPrice: 0,
      editionsAmounts: 1,
      extraServices: {},
    },

    Премиум: {
      packPrice: 0,
      editionsAmounts: 1,
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

    changeFinalPrice: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderFinalPriceAction
    ) => {
      state.finalPrice = action.payload;
      state = initialState;
    },

    setPackPrice: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderPackPriceAction
    ) => {
      const actionPrice = action.payload.price;

      state.packs[action.payload.packType].packPrice = actionPrice;

      state.finalPrice += actionPrice;
    },

    changeeditionsAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrdereditionsAmountsAction
    ) => {
      state.packs[action.payload.packType].editionsAmounts +=
        action.payload.amounts;

      if (action.payload.amounts > 0) {
        state.finalPrice *= editionsAmountsMultiplier;
      } else {
        state.finalPrice /= editionsAmountsMultiplier;
      }
      state.finalPrice = Math.round(state.finalPrice);

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },

    changeExtraServiceAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderExtraServiceAmountAction
    ) => {
      const extraServiceAmount =
        state.packs[action.payload.packType].extraServices[
          action.payload.extraServiceTitle
        ].amount!;

      const extraServicePrice =
        state.packs[action.payload.packType].extraServices[
          action.payload.extraServiceTitle
        ].price;

      if (isNaN(extraServiceAmount) || !extraServiceAmount)
        state.packs[action.payload.packType].extraServices[
          action.payload.extraServiceTitle
        ].amount = 1;

      state.packs[action.payload.packType].extraServices[
        action.payload.extraServiceTitle
      ].amount! += action.payload.extraServiceAmount;

      state.finalPrice += extraServicePrice * action.payload.extraServiceAmount;

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },

    changeExtraServices: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderExtraServicesAction
    ) => {
      const extraServices = state.packs[action.payload.packType].extraServices;

      for (const extraService of action.payload.extraServices) {
        extraServices[extraService.title] = extraService;
      }

      state.packs[action.payload.packType].extraServices = extraServices;
    },

    changeExtraServiceSelected: (
      state: CheckoutOrderSchema,
      action: CheckoutOrderExtraServiceAction
    ) => {
      try {
        state.packs[action.payload.packType].extraServices[
          action.payload.extraService.title
        ].selected = action.payload.changeTo;
      } catch {
        () => {};
      }

      if (action.payload.changeTo) {
        state.finalPrice += action.payload.extraService.price;
      } else {
        state.finalPrice -= action.payload.extraService.price;
      }

      UseLocalStorageForCheckoutOrder(UseLocalStorageTypes.UPDATE, state);
    },
  },
});

export const checkoutOrderSliceActions = checkoutOrderSlice.actions;

export const checkoutOrderReducer = checkoutOrderSlice.reducer;
