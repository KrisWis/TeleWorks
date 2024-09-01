import { TelegramChannelStatsPageContext } from "@/pages/TelegramChannelStatsPage/model/TelegramChannelStatsPageContext";
import styles from "./TelegramChannelStatsCategories.module.scss";
import { memo, useContext } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { telegramChannelStatsCategories } from "../model/TelegramChannelStatsCategories_data";

export const TelegramChannelStatsCategories: React.FC = memo(
  (): React.JSX.Element => {
    const { selectedCategory, setSelectedCategory } = useContext(
      TelegramChannelStatsPageContext
    );

    return (
      <Flex
        className={styles.TelegramChannelStatsCategories}
        direction="column"
      >
        {telegramChannelStatsCategories.map((category) => (
          <Flex
            className={`${styles.TelegramChannelStatsCategories__category} 
              ${selectedCategory == category.title ? styles.TelegramChannelStatsCategories__category__active : ""}`}
            align="center"
            key={category.title}
            gap="10"
            onClick={() => setSelectedCategory(category.title)}
          >
            <div
              className={styles.TelegramChannelStatsCategories__category__icon}
            >
              {category.icon}
            </div>
            <span
              className={styles.TelegramChannelStatsCategories__category__text}
            >
              {category.title}
            </span>
          </Flex>
        ))}
      </Flex>
    );
  }
);
