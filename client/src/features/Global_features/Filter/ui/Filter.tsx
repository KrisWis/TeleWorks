import { useState } from "react";
import styles from "./Filter.module.scss";
import { FilterProps } from "../model/Filter_types";
import { tablet_mediaQuery } from "@/app";
import { Flex } from "@/shared/ui-kit/Stack";
import BlogFilterAdaptiveSVG from "@/shared/assets/icons/BlogPage/BlogFilterAdaptiveSVG.svg?react";
import { FilterContent } from "./FilterContent";

export const Filter: React.FC<FilterProps> = ({
  bonusFilters,
}): React.JSX.Element => {
  // Стейт для открытия фильтра в адаптиве
  const [adaptiveFilterIsOpen, setAdaptiveFilterIsOpen] =
    useState<boolean>(false);

  return (
    <>
      {!tablet_mediaQuery.matches ? (
        <FilterContent bonusFilters={bonusFilters} />
      ) : (
        <Flex
          direction="column"
          align="center"
          className={`${styles.Filter__adaptive}
            ${adaptiveFilterIsOpen ? styles.Filter__adaptive__active : ""}`}
        >
          <Flex
            gap="10"
            align="center"
            justify="center"
            onClick={() => setAdaptiveFilterIsOpen(!adaptiveFilterIsOpen)}
            className={styles.Filter__adaptive__wrapper}
          >
            <BlogFilterAdaptiveSVG />
            <span className={styles.Filter__adaptive__text}>
              Поиск и фильтры
            </span>
          </Flex>

          <FilterContent bonusFilters={bonusFilters} />
        </Flex>
      )}
    </>
  );
};
