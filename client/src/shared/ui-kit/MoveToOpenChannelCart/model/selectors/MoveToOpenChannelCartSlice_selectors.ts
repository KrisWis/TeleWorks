import { MoveToOpenChannelCartSchema } from "@/shared/types/schemas";

export const getAllChannelsInCart = (
  state: MoveToOpenChannelCartSchema
): number[] => {
  if (state) {
    return state.channelsIDs;
  } else {
    return [];
  }
};

export const checkChannelInCart = (
  state: MoveToOpenChannelCartSchema,
  id: number
): boolean => {
  if (state) {
    return Boolean(state.channelsIDs.find((channelID) => channelID == id));
  }
  return false;
};
