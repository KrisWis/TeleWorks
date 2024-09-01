import { telegramChannelsCategories } from "@/app/layouts/model/BaseLayout__types";
import { Hours } from "@/shared/types";

export type TelegramChannelStatsSubscribersAttractionChangeType = "+" | "-";

export interface TelegramChannelStatsSubscribersAttractionOnDaysItem {
  date: Date;
  subscribersAmount: number;
  changesAmount: number;
  changeType?: TelegramChannelStatsSubscribersAttractionChangeType;
}

export interface TelegramChannelStatsSubscribersAttractionOnHoursReferencesChannel {
  channelName: string;
  viewsAmountInThousands: number;
  subscribersIncreaseAmount: number;
  category: telegramChannelsCategories;
  channelImgURL: string;
  postImgURL: string;
  desc: string;
  postViewsAmount: number;
  postRepostsAmount: number;
  postCommentsAmount: number;
}

export interface TelegramChannelStatsSubscribersAttractionOnHoursItem {
  hour: Hours;
  referencesAmount: number;
  repostsAmount: number;
  changesAmount: number;
  changeType?: TelegramChannelStatsSubscribersAttractionChangeType;
  referencesChannels?: TelegramChannelStatsSubscribersAttractionOnHoursReferencesChannel[];
}

export interface TelegramChannelStatsSubscribersAttractionOnHours {
  date: Date;
  items: TelegramChannelStatsSubscribersAttractionOnHoursItem[];
}
