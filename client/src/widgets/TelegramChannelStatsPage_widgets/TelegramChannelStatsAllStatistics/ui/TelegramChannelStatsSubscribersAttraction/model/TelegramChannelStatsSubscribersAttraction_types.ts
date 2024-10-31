import { telegramChannelsCategories } from "@/shared/types/telegramChannels";
import { Hours } from "@/shared/types/global";
import { TelegramChannelStatsChangeType } from "@/shared/types/project";
export interface TelegramChannelStatsSubscribersAttractionOnDaysItem {
  date: Date;
  subscribersAmount: number;
  changesAmount: number;
  changeType?: TelegramChannelStatsChangeType;
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
  channelLink: string;
}

export interface TelegramChannelStatsSubscribersAttractionOnHoursItem {
  hour: Hours;
  referencesAmount: number;
  repostsAmount: number;
  changesAmount: number;
  changeType?: TelegramChannelStatsChangeType;
  referencesChannels?: TelegramChannelStatsSubscribersAttractionOnHoursReferencesChannel[];
}

export interface TelegramChannelStatsSubscribersAttractionOnHours {
  date: Date;
  items: TelegramChannelStatsSubscribersAttractionOnHoursItem[];
}
