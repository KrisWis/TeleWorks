import styles from "./UserPortfolio.module.scss";
import { memo } from "react";
import { UserPortfolioProps } from "../model/UserPortfolio_types";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import SortSelectDropdownIndicatorSVG from "@/shared/assets/icons/Global/SortSelectDropdownIndicatorSVG.svg?react";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import { userPortfolioSortSelectItems } from "../model/UserPortfolio_data";
import { Categories } from "@/features/Global_features/Categories";
import { PortfolioCase } from "@/shared/ui-kit/PortfolioCase";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import { ButtonTypes } from "@/shared/ui-kit/Button";

const SortSelectDropDownIndicator = (): JSX.Element => {
  return (
    <SortSelectDropdownIndicatorSVG className={selectStyles.Select__svg} />
  );
};

const SortSelectTextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 600,
  fontSize: "20px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "var(--main-color)",
};

export const UserPortfolio: React.FC<UserPortfolioProps> = memo(
  ({ categories, cases }): React.JSX.Element => {
    return (
      <section className={styles.UserPortfolio}>
        <div className={styles.UserPortfolio__header}>
          <h2 className="UserPage__caption">Портфолио</h2>

          <div className={styles.UserPortfolio__sorting}>
            <span className={styles.UserPortfolio__sorting_text}>
              Сортировка:
            </span>

            <Select
              TextStyles={SortSelectTextStyles}
              CustomDropdownIndicator={SortSelectDropDownIndicator}
              selectedOptions={userPortfolioSortSelectItems}
              valueContainerPadding={valueContainerPaddingEnum.SMALL}
            />
          </div>
        </div>

        <Categories
          className={styles.UserPortfolio__categories}
          categories={categories}
          SliderPrevArrowID="UserPortfolio__sliderPrevArrow"
          SliderNextArrowID="UserPortfolio__sliderNextArrow"
        />

        <div className={styles.UserPortfolio__cases}>
          {cases.map((Case) => (
            <PortfolioCase
              imgURL={Case.imgURL}
              views={Case.views}
              caseName={Case.caseName}
              className={styles.UserPortfolio__case}
            />
          ))}
        </div>

        <LoadMore
          className={styles.UserPortfolio__loadMore}
          type={ButtonTypes.RED}
        />
      </section>
    );
  }
);
