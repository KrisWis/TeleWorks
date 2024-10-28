import { getCartItemAmount, getCartItems } from "../..";
import { CatalogCartSliceSchema } from "../types/CatalogCartSlice_types";

const initialState: CatalogCartSliceSchema = {
  items: [
    {
      id: 0,
      amount: 1,
    },
  ],
};

describe("getCartItemAmount", () => {
  test("should return item amount value", () => {
    expect(getCartItemAmount(initialState, 0)).toBe(1);
  });

  test("should return 1 if item is not found", () => {
    expect(getCartItemAmount(initialState, 33223)).toBe(1);
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
