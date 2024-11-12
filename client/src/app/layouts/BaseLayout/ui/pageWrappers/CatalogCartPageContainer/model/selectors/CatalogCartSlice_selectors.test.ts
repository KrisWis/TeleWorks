import { rtkApi } from "@/shared/config/api/rtkApi";
import { getCartItemAmount, getCartItems } from "../..";
import { StoreSchema } from "@/shared/config/store/AppStore";

const initialState: StoreSchema = {
  CatalogCartSliceReducer: {
    items: [
      {
        id: 0,
        amount: 1,
      },
    ],
  },

  [rtkApi.reducerPath]: {
    queries: {},
    mutations: {},
    provided: {},
    subscriptions: {},
    // @ts-expect-error здесь конфиг не нужен
    config: undefined,
  },
};

describe("getCartItemAmount", () => {
  test("should return item amount value", () => {
    expect(getCartItemAmount(initialState.CatalogCartSliceReducer!, 0)).toBe(1);
  });

  test("should return 1 if item is not found", () => {
    expect(
      getCartItemAmount(initialState.CatalogCartSliceReducer!, 33223)
    ).toBe(1);
  });
});

describe("getCartItems", () => {
  test("should return state items", () => {
    expect(getCartItems(initialState)).toEqual([
      {
        id: 0,
        amount: 1,
      },
    ]);
  });
});
