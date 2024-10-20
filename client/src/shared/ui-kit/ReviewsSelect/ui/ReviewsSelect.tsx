import styles from "./ReviewsSelect.module.scss";
import { memo } from "react";
import { ReviewsSelectProps } from "../model/ReviewsSelect_types";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import { Select, selectStyles } from "../../Select";
import { mobile_mediaQuery, tablet_mediaQuery } from "@/app";

const DropdownIndicator = (): JSX.Element => {
  return (
    <svg
      className={`${selectStyles.Select__svg} ${styles.reviews__select__svg}`}
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
        fill="var(--violet-color)"
      />
    </svg>
  );
};

const TextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 400,
  fontSize: mobile_mediaQuery.matches
    ? "8px"
    : tablet_mediaQuery.matches
      ? "16px"
      : "24px",
  letterSpacing: "-0.04em",
  color: "var(--black-color)",
  opacity: 0.4,
};

export const ReviewsSelect: React.FC<ReviewsSelectProps> = memo(
  ({ reviews_selectOptions }): React.JSX.Element => {
    return (
      <div className={styles.reviews__selectWrapper}>
        <Select
          className={styles.reviews__select}
          TextStyles={TextStyles}
          CustomDropdownIndicator={DropdownIndicator}
          selectedOptions={reviews_selectOptions}
          valueContainerPadding={
            mobile_mediaQuery.matches
              ? valueContainerPaddingEnum.NONE
              : valueContainerPaddingEnum.MEDIUM
          }
        />
      </div>
    );
  }
);
