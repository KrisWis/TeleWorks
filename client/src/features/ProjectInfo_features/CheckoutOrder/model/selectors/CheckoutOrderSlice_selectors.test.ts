import { CheckoutOrderSchema } from "../CheckoutOrder_types";
import {
  geteditionsAmounts,
  getExtraServiceAmount,
  getFinalPrice,
} from "./CheckoutOrderSlice_selectors";
import { ProjectInfoPackNames } from "@/features/ProjectInfo_features/ProjectInfo_pack/model/ProjectInfo_pack_types";

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
  finalPrice: 100,
};

describe("geteditionsAmounts", () => {
  test("should return editions amount value", () => {
    expect(geteditionsAmounts(initialState, ProjectInfoPackNames.BASE)).toBe(1);
  });
});

describe("getExtraServiceAmount", () => {
  test("should return extra service amount value", () => {
    expect(
      getExtraServiceAmount(
        initialState,
        ProjectInfoPackNames.BASE,
        "extraService"
      )
    ).toBe(1);

    expect(
      getExtraServiceAmount(
        initialState,
        ProjectInfoPackNames.PREMIUM,
        "extraService"
      )
    ).toBe(1000);
  });
});

describe("geteditionsAmounts", () => {
  test("should return editions amount value", () => {
    expect(geteditionsAmounts(initialState, ProjectInfoPackNames.BASE)).toBe(1);
  });
});

describe("getFinalPrice", () => {
  test("should return final price value", () => {
    expect(getFinalPrice(initialState)).toBe(100);
  });
});
