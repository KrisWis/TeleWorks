import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./TelegramChannelStatsAllStatistics.module.scss";
import { memo, useState } from "react";
import { telegramChannelStatsCategories } from "../model/TelegramChannelStatsAllStatistics_data";
import { TelegramChannelStatsCategories } from "../model/TelegramChannelStatsAllStatistics_types";

export const TelegramChannelStatsAllStatistics: React.FC = memo(
  (): React.JSX.Element => {
    // Выбор категории
    const [selectedCategory, setSelectedCategory] =
      useState<TelegramChannelStatsCategories>(
        telegramChannelStatsCategories[0].title
      );

    console.log(selectedCategory);

    return (
      <Flex
        className={`${styles.TelegramChannelStatsAllStatistics} Page__BoxShadowWrapper`}
      >
        <Flex
          className={styles.TelegramChannelStatsAllStatistics__categories}
          direction="column"
        >
          {telegramChannelStatsCategories.map((category) => (
            <Flex
              className={`${styles.TelegramChannelStatsAllStatistics__category} 
              ${selectedCategory == category.title ? styles.TelegramChannelStatsAllStatistics__category__active : ""}`}
              align="center"
              key={category.title}
              gap="10"
              onClick={() => setSelectedCategory(category.title)}
            >
              <div
                className={
                  styles.TelegramChannelStatsAllStatistics__category__icon
                }
              >
                {category.icon}
              </div>
              <span
                className={
                  styles.TelegramChannelStatsAllStatistics__category__text
                }
              >
                {category.title}
              </span>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }
);
