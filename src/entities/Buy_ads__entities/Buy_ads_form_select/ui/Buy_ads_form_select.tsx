import styles from "./Buy_ads_form_select.module.scss";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { Buy_ads_form_select__Props } from "../model/Buy_ads_form_select__types";

export const Buy_ads_form_select: React.FC<Buy_ads_form_select__Props> = ({
  selectedOptions,
}): React.JSX.Element => {
  const DropdownIndicatorRef = useRef<SVGSVGElement>(null);
  const SelectParentRef = useRef<HTMLDivElement>(null);

  const DropdownIndicator = (): JSX.Element => {
    return (
      <svg
        ref={DropdownIndicatorRef}
        className={styles.buy_ads__form__category__form__svg}
        width="14"
        height="23"
        viewBox="0 0 14 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M12.6329 12.5607C13.2187 11.9749 13.2187 11.0251 12.6329 10.4393L3.08698 0.893398C2.5012 0.307611 1.55145 0.307611 0.965664 0.893398C0.379877 1.47919 0.379877 2.42893 0.965664 3.01472L9.45095 11.5L0.965664 19.9853C0.379877 20.5711 0.379877 21.5208 0.965664 22.1066C1.55145 22.6924 2.5012 22.6924 3.08698 22.1066L12.6329 12.5607ZM10.5723 13H11.5723V10H10.5723V13Z"
          fill="#4266C6"
        />
      </svg>
    );
  };

  const [FormSelectedOption, setFormSelectedOption] = useState(null);

  const formSelectCustomStyles = {
    control: () => ({
      display: "flex",
      width: "100%",
      height: "100%",
    }),

    singleValue: () => ({
      fontFamily: "var(--second-family)",
      fontWeight: 500,
      fontSize: "32px",
      letterSpacing: "-0.04em",
      color: "#000",
      opacity: 0.4,
      gridArea: "1 / 1 / 2 / 3",
    }),

    placeholder: () => ({
      fontFamily: "var(--second-family)",
      fontWeight: 500,
      fontSize: "32px",
      letterSpacing: "-0.04em",
      color: "#000",
      opacity: 0.4,
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
          styles.buy_ads__form__category__form__svg__active
        );
    });
  }, []);

  const SelectOnClick = (): void => {
    DropdownIndicatorRef.current?.classList.toggle(
      styles.buy_ads__form__category__form__svg__active
    );
  };

  return (
    <div ref={SelectParentRef} onClick={SelectOnClick}>
      <Select
        className={styles.buy_ads__form__category__form}
        defaultValue={FormSelectedOption}
        onChange={() => {
          setFormSelectedOption;
        }}
        options={selectedOptions}
        styles={formSelectCustomStyles}
        placeholder={selectedOptions[0].label}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};
