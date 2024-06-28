import styles from "./Reviews_select.module.scss";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { reviews_selectOptions } from "../model/Reviews__select__data";

export const Reviews_select: React.FC = (): React.JSX.Element => {
  const [SelectedOption, setSelectedOption] = useState(null);
  const DropdownIndicatorRef = useRef<SVGSVGElement>(null);
  const SelectParentRef = useRef<HTMLDivElement>(null);

  const DropdownIndicator = (): JSX.Element => {
    return (
      <svg
        ref={DropdownIndicatorRef}
        className={styles.reviews__select__svg}
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z"
          fill="#4266C6"
        />
      </svg>
    );
  };

  const SelectCustomStyles = {
    control: () => ({
      display: "flex",
      width: "100%",
      height: "100%",
    }),

    singleValue: () => ({
      fontFamily: "var(--font-family)",
      fontWeight: 400,
      fontSize: "24px",
      letterSpacing: "-0.04em",
      color: "#000",
      opacity: 0.4,
      gridArea: "1 / 1 / 2 / 3",
    }),

    placeholder: () => ({
      fontFamily: "var(--font-family)",
      fontWeight: 400,
      fontSize: "24px",
      letterSpacing: "-0.04em",
      color: "#000",
      opacity: 0.4,
      gridArea: "1 / 1 / 2 / 3",
    }),

    valueContainer: () => ({
      padding: "2px 25px",
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
          styles.reviews__select__svg__active
        );
    });
  }, []);

  const SelectOnClick = (): void => {
    DropdownIndicatorRef.current?.classList.toggle(
      styles.reviews__select__svg__active
    );
  };

  return (
    <div
      className={styles.reviews__selectWrapper}
      ref={SelectParentRef}
      onClick={SelectOnClick}
    >
      <Select
        className={styles.reviews__select}
        defaultValue={SelectedOption}
        onChange={() => {
          setSelectedOption;
        }}
        options={reviews_selectOptions}
        styles={SelectCustomStyles}
        placeholder={reviews_selectOptions[0].label}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};
