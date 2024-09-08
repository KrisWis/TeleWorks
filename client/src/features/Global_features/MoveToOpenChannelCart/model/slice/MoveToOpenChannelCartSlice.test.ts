import { MoveToOpenChannelCartSchema } from "../..";
import {
  MoveToOpenChannelCartActions,
  MoveToOpenChannelCartReducer,
} from "./MoveToOpenChannelCartSlice";

const initialState: MoveToOpenChannelCartSchema = {
  channelsIDs: [1, 2, 3],
};

describe("MoveToOpenChannelCartSlice", () => {
  test("setChannelsForCart", () => {
    const state: MoveToOpenChannelCartSchema = initialState;

    expect(
      MoveToOpenChannelCartReducer(
        state,
        MoveToOpenChannelCartActions.setChannelsForCart(state)
      )
    ).toEqual(initialState);
  });

  test("addChannelToCart", () => {
    const state: MoveToOpenChannelCartSchema = initialState;

    const channelID = 4;

    expect(
      MoveToOpenChannelCartReducer(
        state,
        MoveToOpenChannelCartActions.addChannelToCart({ channelID })
      )
    ).toEqual({ channelsIDs: [...initialState.channelsIDs, channelID] });
  });

  test("removeChannelToCart", () => {
    const state: MoveToOpenChannelCartSchema = initialState;

    const channelIDToRemove = 1;

    expect(
      MoveToOpenChannelCartReducer(
        state,
        MoveToOpenChannelCartActions.removeChannelFromCart({
          channelID: channelIDToRemove,
        })
      )
    ).toEqual({
      channelsIDs: initialState.channelsIDs.filter(
        (item) => item !== channelIDToRemove
      ),
    });
  });
});
