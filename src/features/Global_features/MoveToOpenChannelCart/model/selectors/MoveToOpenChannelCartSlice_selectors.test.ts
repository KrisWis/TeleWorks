import { StoreSchema } from "@/app/store/AppStore";
import {
  checkChannelInCart,
  getAllChannelsInCart,
  MoveToOpenChannelCartSchema,
} from "../..";

const initialState: MoveToOpenChannelCartSchema = {
  channelsIDs: [1, 2, 3],
};

describe("getAllChannelsInCart", () => {
  test("should return channels array", () => {
    const state: StoreSchema = {
      MoveToOpenChannelCartReducer: initialState,
    };
    expect(getAllChannelsInCart(state)).toBe(initialState.channelsIDs);
  });
});

describe("checkChannelInCart", () => {
  test("check channel in state", () => {
    const state: StoreSchema = {
      MoveToOpenChannelCartReducer: initialState,
    };
    expect(checkChannelInCart(state, 1)).toBe(true);
  });

  test("check channel not in state", () => {
    const state: StoreSchema = {
      MoveToOpenChannelCartReducer: initialState,
    };
    expect(checkChannelInCart(state, 4)).toBe(false);
  });
});
