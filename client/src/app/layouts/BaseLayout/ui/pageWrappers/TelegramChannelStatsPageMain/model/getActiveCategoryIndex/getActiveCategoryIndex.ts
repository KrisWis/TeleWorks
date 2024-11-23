import { TelegramChannelStatsCategory } from "@/shared/types/telegramChannels";
import { telegramChannelStatsCategories } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";

export const getActiveCategoryIndex = (
  category: TelegramChannelStatsCategory,
): number =>
  telegramChannelStatsCategories.findIndex(
    (item) => item.title == category.title,
  );
