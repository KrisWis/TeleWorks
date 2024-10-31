import { telegramChannelsCategories } from "@/shared/types/telegramChannels";
import { Hours } from "@/shared/types/global";
import { TelegramChannelStatsChangeType } from "@/shared/types/project";

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
