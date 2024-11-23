import { CatalogCartSliceSchema } from "@/shared/types/catalog";
import {
  CatalogCartSliceActions,
  CatalogCartSliceReducer,
} from "./CatalogCartSlice";

const initialState: CatalogCartSliceSchema = {
  items: [
    {
      id: 0,
      amount: 1,
    },

    {
      id: 1,
      amount: 2,
    },
  ],
};

describe("CatalogCartSlice.test", () => {
  test("increase item amount", () => {
    expect(
      CatalogCartSliceReducer(
        initialState,
        CatalogCartSliceActions.changeItemAmount({ itemId: 0, amount: 1 }),
      ),
    ).toEqual({
      items: [
        {
          id: 0,
          amount: 2,
        },

        {
          id: 1,
          amount: 2,
        },
      ],
    });
  });

  test("dicrease item amount", () => {
    expect(
      CatalogCartSliceReducer(
        initialState,
        CatalogCartSliceActions.changeItemAmount({ itemId: 1, amount: -1 }),
      ),
    ).toEqual({
      items: [
        {
          id: 0,
          amount: 1,
        },

        {
          id: 1,
          amount: 1,
        },
      ],
    });
  });

  test("delete item if it`s amount < 0", () => {
    expect(
      CatalogCartSliceReducer(
        initialState,
        CatalogCartSliceActions.changeItemAmount({ itemId: 0, amount: -1 }),
      ),
    ).toEqual({
      items: [
        {
          id: 1,
          amount: 2,
        },
      ],
    });
  });

  test("set Items", () => {
    expect(
      CatalogCartSliceReducer(
        initialState,
        CatalogCartSliceActions.setItems({
          items: [
            {
              id: 0,
              amount: 1,
            },
            {
              id: 1,
              amount: 1,
            },
            {
              id: 2,
              amount: 1,
            },
          ],
        }),
      ),
    ).toEqual({
      items: [
        {
          id: 0,
          amount: 1,
        },
        {
          id: 1,
          amount: 1,
        },
        {
          id: 2,
          amount: 1,
        },
      ],
    });
  });
});
