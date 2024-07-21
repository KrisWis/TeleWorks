import styles from "./Select.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import {
  CSSObjectWithLabel,
  GroupBase,
  PlaceholderProps,
  default as ReactSelect,
  SingleValueProps,
  StylesConfig,
} from "react-select";
import { Select__Props } from "../model/Select_types";

export const Select: React.FC<Select__Props> = memo(
  ({
    selectedOptions,
    CustomDropdownIndicator,
    TextStyles,
    className,
  }): React.JSX.Element => {
    const SelectParentRef = useRef<HTMLDivElement>(null);

    const [SelectedOption, setSelectedOption] = useState(null);
    const DropdownIndicatorRef = useRef<HTMLDivElement>(null);

    const DropdownIndicator = (): JSX.Element => {
      return <div ref={DropdownIndicatorRef}>{CustomDropdownIndicator()}</div>;
    };

    const valueStyles:
      | ((
          base: CSSObjectWithLabel,
          props:
            | SingleValueProps<unknown, boolean, GroupBase<unknown>>
            | PlaceholderProps<unknown, boolean, GroupBase<unknown>>
        ) => CSSObjectWithLabel)
      | undefined = () => ({
      ...TextStyles,
      gridArea: "1 / 1 / 2 / 3",
    });

    const CustomStyles: StylesConfig = {
      control: () => ({
        display: "flex",
        width: "100%",
        height: "100%",
      }),

      singleValue: valueStyles,

      placeholder: valueStyles,

      valueContainer: () => ({
        padding: "2px 15px",
        display: "grid",
        alignItems: "center",
        flex: 1,
      }),

      indicatorSeparator: () => ({}),
    };

    useEffect(() => {
      const closeDropDown = (e: Event) => {
        if (!SelectParentRef.current?.contains(e.target as Node)) {
          (DropdownIndicatorRef.current! as HTMLElement).classList.remove(
            styles.Select__svg__active
          );
        }
      };

      document.addEventListener("click", closeDropDown);

      return () => {
        document.removeEventListener("click", closeDropDown);
      };
    }, []);

    const SelectOnClick = (): void => {
      (DropdownIndicatorRef.current! as HTMLElement).classList.toggle(
        styles.Select__svg__active
      );
    };

    return (
      <div ref={SelectParentRef} onClick={SelectOnClick}>
        <ReactSelect
          className={`${styles.Select} ${className}`}
          defaultValue={SelectedOption}
          onChange={() => {
            setSelectedOption;
          }}
          options={selectedOptions}
          styles={CustomStyles}
          placeholder={selectedOptions[0].label}
          components={{
            DropdownIndicator,
          }}
        />
      </div>
    );
  }
);
