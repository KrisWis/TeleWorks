import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./TelegramChannelStatsAllStatistics.module.scss";
import { memo, useContext, useMemo } from "react";
import { TelegramChannelStatsCategories } from "./TelegramChannelStatsCategories/ui/TelegramChannelStatsCategories";
import { TelegramChannelStatsPageContext } from "@/pages/TelegramChannelStatsPage/model/TelegramChannelStatsPageContext";
import { telegramChannelStatsCategories } from "./TelegramChannelStatsCategories";

export const TelegramChannelStatsAllStatistics: React.FC = memo(
  (): React.JSX.Element => {
    // Отображение нужной категории
    const { selectedCategory } = useContext(TelegramChannelStatsPageContext);

    const selectedCategoryBlock: React.ReactNode = useMemo(
      () =>
        telegramChannelStatsCategories.find(
          (item) => item.title == selectedCategory
        )?.block,
      [selectedCategory]
    );

    return (
      <Flex
        className={`${styles.TelegramChannelStatsAllStatistics} Page__BoxShadowWrapper`}
      >
        <TelegramChannelStatsCategories />

        <div className={styles.TelegramChannelStatsAllStatistics__data}>
          {selectedCategoryBlock}
        </div>
      </Flex>
    );
  }
);
