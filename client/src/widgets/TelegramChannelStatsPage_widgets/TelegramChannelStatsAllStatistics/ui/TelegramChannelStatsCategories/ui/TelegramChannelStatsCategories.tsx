import styles from "./TelegramChannelStatsCategories.module.scss";
import { memo, useContext } from "react";
import { Flex } from "@/shared/lib/Stack";
import { telegramChannelStatsCategories } from "../model/TelegramChannelStatsCategories_data";
import { tablet_mediaQuery } from "@/shared/const/global";
import { Categories } from "@/shared/ui-kit/Categories";
import {
  getActiveCategoryIndex,
  TelegramChannelStatsPageContext,
} from "@/app/layouts/BaseLayout/ui/pageWrappers/TelegramChannelStatsPageMain";

export const TelegramChannelStatsCategories: React.FC = memo(
  (): React.JSX.Element => {
    const { selectedCategoryIndex, setSelectedCategoryIndex } = useContext(
      TelegramChannelStatsPageContext,
    );

    return (
      <Flex
        className={styles.TelegramChannelStatsCategories}
        direction="column"
      >
        {!tablet_mediaQuery.matches ? (
          telegramChannelStatsCategories.map((category) => (
            <Flex
              className={`${styles.TelegramChannelStatsCategories__category} 
              ${selectedCategoryIndex == getActiveCategoryIndex(category) ? styles.TelegramChannelStatsCategories__category__active : ""}`}
              align="center"
              key={category.title}
              gap="10"
              onClick={() =>
                setSelectedCategoryIndex(getActiveCategoryIndex(category))
              }
            >
              <div
                className={
                  styles.TelegramChannelStatsCategories__category__icon
                }
              >
                {category.icon}
              </div>
              <span
                className={
                  styles.TelegramChannelStatsCategories__category__text
                }
              >
                {category.title}
              </span>
            </Flex>
          ))
        ) : (
          <Categories
            SliderPrevArrowID="TelegramChannelStatsCategories__sliderPrevArrow"
            SliderNextArrowID="TelegramChannelStatsCategories__sliderNextArrow"
            categories={telegramChannelStatsCategories.map(
              (category) => category.title,
            )}
            activeCategoryIndex={selectedCategoryIndex}
            setActiveCategoryIndex={setSelectedCategoryIndex}
          />
        )}
      </Flex>
    );
  },
);
TelegramChannelStatsCategories.displayName = "TelegramChannelStatsCategories";
