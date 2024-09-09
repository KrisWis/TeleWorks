import styles from "./TelegramChannelStatsAllStatistics.module.scss";
import { memo, useContext, useMemo } from "react";
import { TelegramChannelStatsCategories } from "./TelegramChannelStatsCategories/ui/TelegramChannelStatsCategories";
import { telegramChannelStatsCategories } from "./TelegramChannelStatsCategories";
import { TelegramChannelStatsPageContext } from "@/pages/TelegramChannelStatsPage/model/context/TelegramChannelStatsPageContext";
import { tablet_mediaQuery } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { getActiveCategoryIndex } from "@/pages/TelegramChannelStatsPage/model/getActiveCategoryIndex/getActiveCategoryIndex";

export const TelegramChannelStatsAllStatistics: React.FC = memo(
  (): React.JSX.Element => {
    // Отображение нужной категории
    const { selectedCategoryIndex } = useContext(
      TelegramChannelStatsPageContext
    );

    const selectedCategoryBlock: React.ReactNode = useMemo(
      () =>
        telegramChannelStatsCategories.find(
          (item) => getActiveCategoryIndex(item) == selectedCategoryIndex
        )?.block,
      [selectedCategoryIndex]
    );

    return (
      <div
        className={`${styles.TelegramChannelStatsAllStatistics} ${!tablet_mediaQuery.matches ? "Page__BoxShadowWrapper" : ""}`}
      >
        <TelegramChannelStatsCategories />

        <div
          className={`${styles.TelegramChannelStatsAllStatistics__data} ${tablet_mediaQuery.matches ? "Page__BoxShadowWrapper" : ""}`}
        >
          {selectedCategoryBlock}
        </div>
      </div>
    );
  }
);
