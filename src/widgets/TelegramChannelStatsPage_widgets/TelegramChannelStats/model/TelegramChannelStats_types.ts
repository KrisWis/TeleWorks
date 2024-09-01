import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";

export interface TelegramChannelStatsProps {
  rating: number;
  imgURL: string;
  title: string;
  category: string;
  favouritesAmount: number;
  desc: string;
  geoLanguage: GeoLanguageTypes;
  age: string;
  postsAmount: number;
}
