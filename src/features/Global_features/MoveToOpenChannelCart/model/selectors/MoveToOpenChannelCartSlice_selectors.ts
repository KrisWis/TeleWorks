import { RootState } from "@/app/store/AppStore";

export const getAllChannelsInCart = (state: RootState): number[] => {
  if (state.MoveToOpenChannelCartReducer) {
    return state.MoveToOpenChannelCartReducer.channelsIDs;
  } else {
    return [];
  }
};

export const getChannelInCartById = (
  state: RootState,
  id: number
): number | undefined | null => {
  if (state.MoveToOpenChannelCartReducer) {
    return state.MoveToOpenChannelCartReducer.channelsIDs.find(
      (channelID) => channelID == id
    );
  } else {
    return null;
  }
};
