import styles from "./TelegramChannelStatsCategories.module.scss";
import { memo, useContext } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { telegramChannelStatsCategories } from "../model/TelegramChannelStatsCategories_data";
import { TelegramChannelStatsPageContext } from "@/pages/TelegramChannelStatsPage/model/context/TelegramChannelStatsPageContext";
import { tablet_mediaQuery } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { Categories } from "@/features/Global_features/Categories";
import { getActiveCategoryIndex } from "@/pages/TelegramChannelStatsPage/model/getActiveCategoryIndex/getActiveCategoryIndex";

export const TelegramChannelStatsCategories: React.FC = memo(
  (): React.JSX.Element => {
    const { selectedCategoryIndex, setSelectedCategoryIndex } = useContext(
      TelegramChannelStatsPageContext
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
              (category) => category.title
            )}
            activeCategoryIndex={selectedCategoryIndex}
            setActiveCategoryIndex={setSelectedCategoryIndex}
          />
        )}
      </Flex>
    );
  }
);
