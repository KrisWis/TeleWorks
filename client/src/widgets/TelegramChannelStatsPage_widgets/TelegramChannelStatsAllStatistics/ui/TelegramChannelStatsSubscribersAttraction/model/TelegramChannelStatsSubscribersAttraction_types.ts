import { telegramChannelsCategories } from "@/app/layouts/BaseLayout/model/BaseLayout__types";
import { Hours } from "@/shared/types";
import { TelegramChannelStatsChangeType } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats/model/TelegramChannelStats_types";

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
