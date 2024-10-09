import { telegramChannelStatsCategories } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsCategories";
import { TelegramChannelStatsCategory } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsCategories/model/TelegramChannelStatsCategories_types";

export const getActiveCategoryIndex = (
  category: TelegramChannelStatsCategory
): number =>
  telegramChannelStatsCategories.findIndex(
    (item) => item.title == category.title
  );
