import styles from "./CatalogFilterSelect.module.scss";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { CatalogFilterSelect__Props } from "../model/CatalogFilterSelect__types";

export const CatalogFilterSelect: React.FC<CatalogFilterSelect__Props> = ({
  selectedOptions,
  themes = false,
}): React.JSX.Element => {
  const DropdownIndicatorRef = useRef<SVGSVGElement>(null);
  const SelectParentRef = useRef<HTMLDivElement>(null);

  const DropdownIndicator = (): JSX.Element => {
    return (
      <svg
        ref={DropdownIndicatorRef}
        className={styles.CatalogFilterSelect__svg}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.46967 9.46967C6.76256 9.17678 7.23744 9.17678 7.53033 9.46967L12 13.9393L16.4697 9.46967C16.7626 9.17678 17.2374 9.17678 17.5303 9.46967C17.8232 9.76256 17.8232 10.2374 17.5303 10.5303L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L6.46967 10.5303C6.17678 10.2374 6.17678 9.76256 6.46967 9.46967Z"
          fill="#001A72"
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
      fontSize: themes == true ? "14px" : "15px",
      letterSpacing: "-0.01em",
      lineHeight: "150%",
      color: themes == true ? "#b2b2b2" : "#000",
      gridArea: "1 / 1 / 2 / 3",
    }),

    placeholder: () => ({
      fontFamily: "var(--second-family)",
      fontWeight: 400,
      fontSize: themes == true ? "14px" : "15px",
      letterSpacing: "-0.01em",
      lineHeight: "150%",
      color: themes == true ? "#b2b2b2" : "#000",
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
          styles.CatalogFilterSelect__svg__active
        );
    });
  }, []);

  const SelectOnClick = (): void => {
    DropdownIndicatorRef.current?.classList.toggle(
      styles.CatalogFilterSelect__svg__active
    );
  };

  return (
    <div ref={SelectParentRef} onClick={SelectOnClick}>
      <Select
        className={styles.CatalogFilterSelect}
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
