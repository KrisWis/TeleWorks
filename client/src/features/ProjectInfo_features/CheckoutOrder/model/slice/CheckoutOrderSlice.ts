import { createSlice } from "@reduxjs/toolkit";
import {
  CheckoutOrderExtraServicesAction,
  CheckoutOrderExtraServiceAmountAction,
  CheckoutOrdereditionsAmountsAction,
  CheckoutOrderPackPriceAction,
  CheckoutOrderStateAction,
  CheckoutOrderExtraServiceAction,
  CheckoutOrderFinalPriceAction,
} from "../types/CheckoutOrderSlice_types";
import { CheckoutOrderSchema } from "../CheckoutOrder_types";

export const editionsAmountsMultiplier: number = 1.5;

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
        // @ts-expect-error типы должны быть корректными
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
    },

    clearProjectEditionsAmounts: (
      state: CheckoutOrderSchema,
      action: CheckoutOrdereditionsAmountsAction
    ) => {
      state.packs[action.payload.packType].editionsAmounts =
        action.payload.amounts;
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
      state.packs[action.payload.packType].extraServices[
        action.payload.extraService.title
      ].selected = action.payload.changeTo;

      let ExtraServiceAmount =
        state.packs[action.payload.packType].extraServices[
          action.payload.extraService.title
        ].amount;

      if (!ExtraServiceAmount) ExtraServiceAmount = 1;

      if (action.payload.changeTo) {
        state.finalPrice +=
          action.payload.extraService.price * ExtraServiceAmount;
      } else {
        state.finalPrice -=
          action.payload.extraService.price * ExtraServiceAmount;
      }
    },
  },
});

export const checkoutOrderSliceActions = checkoutOrderSlice.actions;

export const checkoutOrderReducer = checkoutOrderSlice.reducer;
