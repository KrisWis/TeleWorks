import { telegramChannelsCategories } from "@/app/layouts/BaseLayout/model/BaseLayout__types";
import { Hours } from "@/shared/types";
import { TelegramChannelStatsChangeType } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";

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
