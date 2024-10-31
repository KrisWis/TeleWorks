import { telegramChannelsCategories } from "@/shared/types/telegramChannels";
import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";

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
