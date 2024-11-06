import { CheckoutOrderSchema } from "@/shared/types/schemas";
import { ProjectInfoPackNames } from "@/shared/const/project";
import {
  checkoutOrderReducer,
  checkoutOrderSliceActions,
  editionsAmountsMultiplier,
} from "./CheckoutOrderSlice";

const finalPriceConst: number = 10000;

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
      extraServices: {
        extraService: {
          title: "extraService",
          desc: "test",
          price: 1000,
          scalability: true,
          selected: false,
          amount: 1000,
        },
      },
    },
  },
  finalPrice: finalPriceConst,
};

describe("checkoutOrder test", () => {
  test("setCheckoutOrderState", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.setCheckoutOrderState(state)
      )
    ).toEqual(initialState);
  });

  test("changeFinalPrice", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(state, checkoutOrderSliceActions.changeFinalPrice(0))
        .finalPrice
    ).toBe(0);
  });

  test("setPackPrice", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.setPackPrice({
          packType: ProjectInfoPackNames.BASE,
          price: 100,
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.BASE]: {
          packPrice: 100,
          editionsAmounts: 1,
          extraServices: {},
        },
      },
      finalPrice: finalPriceConst + 100,
    });
  });

  test("changeeditionsAmounts increase", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeeditionsAmounts({
          packType: ProjectInfoPackNames.BASE,
          amounts: 1,
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.BASE]: {
          packPrice: 0,
          editionsAmounts: 2,
          extraServices: {},
        },
      },
      finalPrice: Math.round(finalPriceConst * editionsAmountsMultiplier),
    });
  });

  test("changeeditionsAmounts dicrease", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeeditionsAmounts({
          packType: ProjectInfoPackNames.BASE,
          amounts: -1,
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.BASE]: {
          packPrice: 0,
          editionsAmounts: 0,
          extraServices: {},
        },
      },
      finalPrice: Math.round(finalPriceConst / editionsAmountsMultiplier),
    });
  });

  test("clearProjectEditionsAmounts", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.clearProjectEditionsAmounts({
          packType: ProjectInfoPackNames.BASE,
          amounts: 0,
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.BASE]: {
          packPrice: 0,
          editionsAmounts: 0,
          extraServices: {},
        },
      },
      finalPrice: initialState.finalPrice,
    });
  });

  test("changeExtraServiceAmounts increase", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeExtraServiceAmounts({
          packType: ProjectInfoPackNames.PREMIUM,
          extraServiceAmount: 1,
          extraServiceTitle: "extraService",
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.PREMIUM]: {
          packPrice: 0,
          editionsAmounts: 1,
          extraServices: {
            extraService: {
              title: "extraService",
              desc: "test",
              price: 1000,
              scalability: true,
              selected: false,
              amount: 1001,
            },
          },
        },
      },
      finalPrice: finalPriceConst + 1000 * 1,
    });
  });

  test("changeExtraServiceAmounts dicrease", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeExtraServiceAmounts({
          packType: ProjectInfoPackNames.PREMIUM,
          extraServiceAmount: -1,
          extraServiceTitle: "extraService",
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.PREMIUM]: {
          packPrice: 0,
          editionsAmounts: 1,
          extraServices: {
            extraService: {
              title: "extraService",
              desc: "test",
              price: 1000,
              scalability: true,
              selected: false,
              amount: 999,
            },
          },
        },
      },
      finalPrice: finalPriceConst + 1000 * -1,
    });
  });

  test("changeExtraServices", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeExtraServices({
          packType: ProjectInfoPackNames.BASE,
          extraServices: [
            {
              title: "extraService",
              desc: "test",
              price: 1000,
              scalability: true,
              selected: false,
              amount: 1000,
            },
          ],
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.BASE]: {
          packPrice: 0,
          editionsAmounts: 1,
          extraServices: {
            extraService: {
              title: "extraService",
              desc: "test",
              price: 1000,
              scalability: true,
              selected: false,
              amount: 1000,
            },
          },
        },
      },
      finalPrice: initialState.finalPrice,
    });
  });

  test("changeExtraServiceSelected to select", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeExtraServiceSelected({
          packType: ProjectInfoPackNames.PREMIUM,
          extraService: {
            title: "extraService",
            desc: "test",
            price: 1000,
            scalability: true,
            selected: false,
            amount: 1000,
          },
          changeTo: true,
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.PREMIUM]: {
          packPrice: 0,
          editionsAmounts: 1,
          extraServices: {
            extraService: {
              title: "extraService",
              desc: "test",
              price: 1000,
              scalability: true,
              selected: true,
              amount: 1000,
            },
          },
        },
      },
      finalPrice: finalPriceConst + 1000 * 1000,
    });
  });

  test("changeExtraServiceSelected to unselect", () => {
    const state: CheckoutOrderSchema = initialState;

    expect(
      checkoutOrderReducer(
        state,
        checkoutOrderSliceActions.changeExtraServiceSelected({
          packType: ProjectInfoPackNames.PREMIUM,
          extraService: {
            title: "extraService",
            desc: "test",
            price: 1000,
            scalability: true,
            selected: true,
            amount: 1000,
          },
          changeTo: false,
        })
      )
    ).toEqual({
      packs: {
        ...initialState.packs,

        [ProjectInfoPackNames.PREMIUM]: {
          packPrice: 0,
          editionsAmounts: 1,
          extraServices: {
            extraService: {
              title: "extraService",
              desc: "test",
              price: 1000,
              scalability: true,
              selected: false,
              amount: 1000,
            },
          },
        },
      },
      finalPrice: finalPriceConst - 1000 * 1000,
    });
  });
});
