import { MoveToOpenChannelCartSchema } from "@/shared/types/schemas";
import { checkChannelInCart, getAllChannelsInCart } from "../..";

const initialState: MoveToOpenChannelCartSchema = {
  channelsIDs: [1, 2, 3],
};

describe("getAllChannelsInCart", () => {
  test("should return channels array", () => {
    expect(getAllChannelsInCart(initialState)).toBe(initialState.channelsIDs);
  });
});

describe("checkChannelInCart", () => {
  test("check channel in state", () => {
    expect(checkChannelInCart(initialState, 1)).toBe(true);
  });

  test("check channel not in state", () => {
    expect(checkChannelInCart(initialState, 4)).toBe(false);
  });
});
