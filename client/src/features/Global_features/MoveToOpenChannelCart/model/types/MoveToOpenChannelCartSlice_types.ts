export interface MoveToOpenChannelCartSchema {
  channelsIDs: number[];
}

interface addChannelToCartPayload {
  channelID: number;
}

export interface addChannelToCartAction {
  payload: addChannelToCartPayload;
  type: string;
}

interface removeChannelToCartPayload {
  channelID: number;
}

export interface removeChannelToCartAction {
  payload: removeChannelToCartPayload;
  type: string;
}

interface setChannelsForCartPayload {
  channelsIDs: number[];
}

export interface setChannelsForCartAction {
  payload: setChannelsForCartPayload;
  type: string;
}
