import {
  telegramChannelStatsCategories,
  TelegramChannelStatsCategory,
} from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsCategories";

export const getActiveCategoryIndex = (
  category: TelegramChannelStatsCategory
): number =>
  telegramChannelStatsCategories.findIndex(
    (item) => item.title == category.title
  );
