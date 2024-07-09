import styles from "./CatalogItemSelect.module.scss";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { CatalogItemSelect__Props } from "../model/CatalogItemSelect__types";

export const CatalogItemSelect: React.FC<CatalogItemSelect__Props> = ({
  selectedOptions,
}): React.JSX.Element => {
  const DropdownIndicatorRef = useRef<SVGSVGElement>(null);
  const SelectParentRef = useRef<HTMLDivElement>(null);

  const DropdownIndicator = (): JSX.Element => {
    return (
      <svg
        ref={DropdownIndicatorRef}
        className={styles.CatalogItemSelect__svg}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.39131 7.89143C5.63538 7.64736 6.03112 7.64736 6.27519 7.89143L9.99992 11.6161L13.7247 7.89143C13.9688 7.64736 14.3644 7.64736 14.6085 7.89143C14.8526 8.13551 14.8526 8.53121 14.6085 8.77529L10.4418 12.942C10.1978 13.186 9.80208 13.186 9.558 12.942L5.39131 8.77529C5.14723 8.53121 5.14723 8.13551 5.39131 7.89143Z"
          fill="#C4C4C4"
        />
      </svg>
    );
  };

  const [SelectedOption, setSelectedOption] = useState(null);

  const CustomStyles = {
    control: () => ({
      display: "flex",
      width: "100%",
      height: "100%",
    }),

    singleValue: () => ({
      fontFamily: "var(--second-family)",
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "-0.01em",
      lineHeight: "150%",
      color: "#b2b2b2",
      gridArea: "1 / 1 / 2 / 3",
    }),

    placeholder: () => ({
      fontFamily: "var(--second-family)",
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "-0.01em",
      lineHeight: "150%",
      color: "#b2b2b2",
      gridArea: "1 / 1 / 2 / 3",
    }),

    valueContainer: () => ({
      padding: "2px 15px",
      display: "grid",
      alignItems: "center",
      flex: 1,
    }),

    indicatorSeparator: () => ({}),
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!SelectParentRef.current?.contains(e.target as Node))
        DropdownIndicatorRef.current?.classList.remove(
          styles.CatalogItemSelect__svg__active
        );
    });
  }, []);

  const SelectOnClick = (): void => {
    DropdownIndicatorRef.current?.classList.toggle(
      styles.CatalogItemSelect__svg__active
    );
  };

  return (
    <div ref={SelectParentRef} onClick={SelectOnClick}>
      <Select
        className={styles.CatalogItemSelect}
        defaultValue={SelectedOption}
        onChange={() => {
          setSelectedOption;
        }}
        options={selectedOptions}
        styles={CustomStyles}
        placeholder={selectedOptions[0].label}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};
