import { telegramChannelsCategories } from "@/app/layouts/BaseLayout/model/BaseLayout__types";
import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";

export type TelegramChannelStatsChangeType = "+" | "-";

export interface TelegramChannelStatsProps {
  channelId: number;
}

export interface TelegramChannelStatsInterface {
  rating: number;
  imgURL: string;
  title: string;
  category: telegramChannelsCategories;
  favouritesAmount: number;
  desc: string;
  geoLanguage: GeoLanguageTypes;
  age: string;
  postsAmount: number;
  channelLink: string;
}
