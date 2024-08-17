import { createSlice } from "@reduxjs/toolkit";
import {
  addChannelToCartAction,
  MoveToOpenChannelCartSchema,
  removeChannelToCartAction,
  setChannelsForCartAction,
} from "../types/MoveToOpenChannelCartSlice_types";
import { UseMoveToOpenChannelCartLocalStorage } from "../UseMoveToOpenChannelCartLocalStorage/UseMoveToOpenChannelCartLocalStorage";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";

export const editionsAmountsMultiplier: number = 1.5;

const initialState: MoveToOpenChannelCartSchema = {
  channelsIDs: [],
};

export const MoveToOpenChannelCartSlice = createSlice({
  name: "MoveToOpenChannelCart",
  initialState: initialState,
  reducers: {
    setChannelsForCart: (
      state: MoveToOpenChannelCartSchema,
      action: setChannelsForCartAction
    ) => {
      state.channelsIDs = action.payload.channelsIDs;
    },

    addChannelToCart: (
      state: MoveToOpenChannelCartSchema,
      action: addChannelToCartAction
    ) => {
      state.channelsIDs = [...state.channelsIDs, action.payload.channelID];

      UseMoveToOpenChannelCartLocalStorage(
        UseLocalStorageTypes.UPDATE,
        state.channelsIDs.map((channelID) => channelID)
      );
    },

    removeChannelFromCart: (
      state: MoveToOpenChannelCartSchema,
      action: removeChannelToCartAction
    ) => {
      state.channelsIDs = state.channelsIDs.filter(
        (channelID) => channelID !== action.payload.id
      );

      UseMoveToOpenChannelCartLocalStorage(
        UseLocalStorageTypes.UPDATE,
        state.channelsIDs.map((channelID) => channelID)
      );
    },
  },
});

export const MoveToOpenChannelCartActions = MoveToOpenChannelCartSlice.actions;

export const MoveToOpenChannelCartReducer = MoveToOpenChannelCartSlice.reducer;
