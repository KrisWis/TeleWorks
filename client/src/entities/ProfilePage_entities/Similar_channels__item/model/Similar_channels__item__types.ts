import { telegramChannelsCategories } from "@/app/layouts/BaseLayout/model/BaseLayout__types";

export interface Similar_channels__itemProps {
  rating: number;
  starsAmount: number;
  imgURL: string;
  title: string;
  category: telegramChannelsCategories;
  subscribersAmount: string;
  views: string;
  ER: number;
  CPV: number;
  price: number;
}
