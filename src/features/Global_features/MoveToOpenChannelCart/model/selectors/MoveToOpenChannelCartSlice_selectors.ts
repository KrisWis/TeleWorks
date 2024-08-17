import { RootState } from "@/app/store/AppStore";

export const getAllChannelsInCart = (state: RootState): number[] => {
  if (state.MoveToOpenChannelCartReducer) {
    return state.MoveToOpenChannelCartReducer.channelsIDs;
  } else {
    return [];
  }
};

export const checkChannelInCart = (state: RootState, id: number): boolean => {
  if (state.MoveToOpenChannelCartReducer) {
    return Boolean(
      state.MoveToOpenChannelCartReducer.channelsIDs.find(
        (channelID) => channelID == id
      )
    );
  }
  return false;
};
