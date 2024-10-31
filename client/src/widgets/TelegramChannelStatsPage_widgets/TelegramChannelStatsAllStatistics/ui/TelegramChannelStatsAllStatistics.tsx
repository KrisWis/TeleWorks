import styles from "./TelegramChannelStatsAllStatistics.module.scss";
import { memo, useContext, useMemo } from "react";
import { telegramChannelStatsCategories } from "..";
import { TelegramChannelStatsCategories } from "./TelegramChannelStatsCategories/ui/TelegramChannelStatsCategories";
import {
  getActiveCategoryIndex,
  TelegramChannelStatsPageContext,
} from "@/app/layouts/BaseLayout/ui/pageWrappers/TelegramChannelStatsPageMain";
import { tablet_mediaQuery } from "@/shared/const/global";

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
      <div className={styles.TelegramChannelStatsAllStatistics__wrapper}>
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
      </div>
    );
  }
);
