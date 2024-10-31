import { TelegramChannelStatsCategories } from "../const/telegramChannels";

export type telegramChannelsCategories =
  | "Интерьер и строительство"
  | "Новости и СМИ";
export interface TelegramChannelStatsCategory {
  title: TelegramChannelStatsCategories;
  icon: React.ReactNode;
  block: React.ReactNode;
}
