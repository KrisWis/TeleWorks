import styles from "./SpecialistServicesResults.module.scss";
import { memo, useState } from "react";
import { sortSelectItems } from "../data/SpecialistServicesResults_data";
import { servicesItems } from "@/shared/mockData";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import { ProjectItemViewTypes } from "@/shared/const/project";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import {
  ProjectItem,
  ServicesItem,
} from "@/entities/Global_entities/ProjectItem";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import SortSelectDropdownIndicatorSVG from "@/shared/assets/icons/Global/SortSelectDropdownIndicatorSVG.svg?react";
import { mobile_mediaQuery } from "@/shared/const/global";

const SortSelectDropDownIndicator = (): JSX.Element => {
  return (
    <SortSelectDropdownIndicatorSVG className={selectStyles.Select__svg} />
  );
};

const TextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 600,
  fontSize: mobile_mediaQuery.matches ? "10px" : "20px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "var(--main-color)",
};

export const SpecialistServicesResults: React.FC = memo(
  (): React.JSX.Element => {
    const [activeViewType, setActiveViewType] = useState<ProjectItemViewTypes>(
      mobile_mediaQuery.matches
        ? ProjectItemViewTypes.ROW
        : ProjectItemViewTypes.COLUMN
    );

    return (
      <div className={styles.specialistServicesResults}>
        <div className={styles.specialistServicesResults__header}>
          <span className={styles.specialistServicesResults__results}>
            {servicesItems.length} Результатов
          </span>

          <div className={styles.specialistServicesResults__sort}>
            {!mobile_mediaQuery.matches && (
              <>
                <svg
                  onClick={() => setActiveViewType(ProjectItemViewTypes.COLUMN)}
                  className={`${styles.specialistServicesResults__viewType} ${activeViewType == ProjectItemViewTypes.COLUMN ? styles.specialistServicesResults__viewType__active : ""}`}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.66667 1C6.66667 0.447715 6.21895 0 5.66667 0H1C0.447715 0 0 0.447714 0 0.999999V5.66667C0 6.21895 0.447714 6.66667 0.999999 6.66667H5.66667C6.21895 6.66667 6.66667 6.21895 6.66667 5.66667V1ZM6.66667 8.33338C6.66667 7.7811 6.21895 7.33338 5.66667 7.33338H1C0.447715 7.33338 0 7.7811 0 8.33338V13.0001C0 13.5523 0.447714 14.0001 0.999999 14.0001H5.66667C6.21895 14.0001 6.66667 13.5523 6.66667 13.0001V8.33338ZM7.33301 1C7.33301 0.447715 7.78072 0 8.33301 0H12.9997C13.552 0 13.9997 0.447714 13.9997 0.999999V5.66667C13.9997 6.21895 13.552 6.66667 12.9997 6.66667H8.33301C7.78072 6.66667 7.33301 6.21895 7.33301 5.66667V1ZM13.9997 8.33337C13.9997 7.78109 13.552 7.33337 12.9997 7.33337H8.33301C7.78072 7.33337 7.33301 7.78109 7.33301 8.33337V13C7.33301 13.5523 7.78072 14 8.33301 14H12.9997C13.552 14 13.9997 13.5523 13.9997 13V8.33337Z"
                  />
                </svg>

                <svg
                  onClick={() => setActiveViewType(ProjectItemViewTypes.ROW)}
                  className={`${styles.specialistServicesResults__viewType} ${activeViewType == ProjectItemViewTypes.ROW ? styles.specialistServicesResults__viewType__active : ""}`}
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 1C4 0.447715 3.55228 0 3 0H1C0.447715 0 0 0.447715 0 1V3C0 3.55228 0.447715 4 1 4H3C3.55228 4 4 3.55228 4 3V1ZM5 1C5 0.447715 5.44772 0 6 0H14C14.5523 0 15 0.447715 15 1V3C15 3.55228 14.5523 4 14 4H6C5.44772 4 5 3.55228 5 3V1ZM15 6C15 5.44772 14.5523 5 14 5H6C5.44772 5 5 5.44772 5 6V8C5 8.55229 5.44772 9 6 9H14C14.5523 9 15 8.55229 15 8V6ZM15 11C15 10.4477 14.5523 10 14 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H14C14.5523 14 15 13.5523 15 13V11ZM0 6C0 5.44772 0.447715 5 1 5H3C3.55228 5 4 5.44772 4 6V8C4 8.55229 3.55228 9 3 9H1C0.447715 9 0 8.55229 0 8V6ZM4 11C4 10.4477 3.55228 10 3 10H1C0.447715 10 0 10.4477 0 11V13C0 13.5523 0.447715 14 1 14H3C3.55228 14 4 13.5523 4 13V11Z"
                  />
                </svg>
              </>
            )}

            <div className={styles.specialistServicesResults__sort__sorting}>
              <span
                className={styles.specialistServicesResults__sort__sorting_text}
              >
                Сортировка
              </span>

              <Select
                TextStyles={TextStyles}
                CustomDropdownIndicator={SortSelectDropDownIndicator}
                selectedOptions={sortSelectItems}
                valueContainerPadding={
                  mobile_mediaQuery.matches
                    ? valueContainerPaddingEnum.NONE
                    : valueContainerPaddingEnum.SMALL
                }
              />
            </div>
          </div>
        </div>

        <div
          className={` ${styles.specialistServicesResults__items} 
          ${activeViewType == ProjectItemViewTypes.ROW ? styles.specialistServicesResults__items__column : ""}
          ${activeViewType == ProjectItemViewTypes.COLUMN ? styles.specialistServicesResults__items__row : ""}`}
        >
          {(activeViewType == ProjectItemViewTypes.ROW
            ? servicesItems.slice(0, 3)
            : servicesItems.slice(0, 6)
          ).map((serviceItem: ServicesItem) => (
            <ProjectItem
              key={serviceItem.title + serviceItem.authorName}
              servicesItem={serviceItem}
              viewType={activeViewType}
            />
          ))}
        </div>

        <LoadMore
          type={ButtonTypes.CYAN}
          className={styles.specialistServicesResults__loadMore}
        />
      </div>
    );
  }
);
