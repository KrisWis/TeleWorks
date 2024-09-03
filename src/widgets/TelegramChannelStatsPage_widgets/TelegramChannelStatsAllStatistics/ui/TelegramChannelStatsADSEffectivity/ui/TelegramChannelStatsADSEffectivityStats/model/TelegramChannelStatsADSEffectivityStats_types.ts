import { telegramChannelsCategories } from "@/app/layouts/model/BaseLayout__types";
import { Hours } from "@/shared/types";
import { TelegramChannelStatsChangeType } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats/model/TelegramChannelStats_types";

export interface TelegramChannelStatsADSEffectivityStat {
  avatarImgURL: string;
  channelName: string;
  channelCategory: telegramChannelsCategories;
  channelDate: Date;
  hoursInTop: Hours;
  viewsAmount: number;
  subscribersChangeAmount: number;
  changeType: TelegramChannelStatsChangeType;
}

export interface TelegramChannelStatsADSEffectivityStatsProps {
  statItems: TelegramChannelStatsADSEffectivityStat[];
}
