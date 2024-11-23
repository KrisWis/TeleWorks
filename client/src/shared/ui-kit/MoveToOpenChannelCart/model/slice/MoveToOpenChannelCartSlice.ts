import {
  addChannelToCartAction,
  removeChannelToCartAction,
  setChannelsForCartAction,
} from "../types/MoveToOpenChannelCartSlice_types";
import { UseMoveToOpenChannelCartLocalStorage } from "../UseMoveToOpenChannelCartLocalStorage/UseMoveToOpenChannelCartLocalStorage";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { MoveToOpenChannelCartSchema } from "@/shared/types/schemas";
import { buildSlice } from "@/shared/utils/store";

export const editionsAmountsMultiplier: number = 1.5;

const initialState: MoveToOpenChannelCartSchema = {
  channelsIDs: [],
};

export const MoveToOpenChannelCartSlice = buildSlice({
  name: "MoveToOpenChannelCart",
  initialState: initialState,
  reducers: {
    setChannelsForCart: (
      state: MoveToOpenChannelCartSchema,
      action: setChannelsForCartAction,
    ) => {
      state.channelsIDs = action.payload.channelsIDs;
    },

    addChannelToCart: (
      state: MoveToOpenChannelCartSchema,
      action: addChannelToCartAction,
    ) => {
      state.channelsIDs.push(action.payload.channelID);

      UseMoveToOpenChannelCartLocalStorage(
        UseLocalStorageTypes.UPDATE,
        state.channelsIDs.map((channelID) => channelID),
      );
    },

    removeChannelFromCart: (
      state: MoveToOpenChannelCartSchema,
      action: removeChannelToCartAction,
    ) => {
      state.channelsIDs.splice(
        state.channelsIDs.findIndex((item) => item == action.payload.channelID),
        1,
      );

      UseMoveToOpenChannelCartLocalStorage(
        UseLocalStorageTypes.UPDATE,
        state.channelsIDs.map((channelID) => channelID),
      );
    },
  },
});

export const {
  actions: MoveToOpenChannelCartActions,
  reducer: MoveToOpenChannelCartReducer,
  useActions: useMoveToOpenChannelCartActions,
} = MoveToOpenChannelCartSlice;
