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
import {
  Select__Props,
  Select_Option,
  SelectThemes,
  SelectThemesEnum,
  valueContainerPaddingEnum,
} from "../model/Select_types";

export const Select: React.FC<Select__Props> = memo(
  ({
    selectedOptions,
    CustomDropdownIndicator,
    TextStyles,
    className,
    theme = SelectThemesEnum.BLACK,
    valueContainerPadding = valueContainerPaddingEnum.MEDIUM,
    setState,
    DefaultSelectedOption,
  }): React.JSX.Element => {
    // Объявление переменных и событие при изменение
    const SelectParentRef = useRef<HTMLDivElement>(null);

    const [SelectedOption, setSelectedOption] = useState<Select_Option | null>(
      DefaultSelectedOption || null
    );
    const DropdownIndicatorRef = useRef<HTMLDivElement>(null);

    const SelectOnChange = (newValue: Select_Option): void => {
      setSelectedOption(newValue);

      if (setState) {
        setState(newValue);
      }
    };

    // Стилилизация
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
      color: SelectThemes[theme].color,
      fontSize: SelectThemes[theme].fontSize,
      ...TextStyles,
      gridArea: "1 / 1 / 2 / 3",
      whiteSpace: "nowrap",
      position: "relative",
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
        padding: valueContainerPadding,
        display: "grid",
        alignItems: "center",
        flex: 1,
      }),

      indicatorSeparator: () => ({}),

      menu: () => ({
        zIndex: "var(--z-index-dropdown)",
        top: "100%",
        position: "absolute",
        width: "20vw",
        backgroundColor: "hsl(0, 0%, 100%)",
        borderRadius: "4px",
        boxShadow:
          "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
        marginBottom: "8px",
        marginTop: "8px",
        boxSizing: "border-box",
        fontSize: TextStyles.fontSize,
        right: 0,
      }),
    };

    // Закрытие дропдауна
    useEffect(() => {
      const closeDropDown = (e: Event) => {
        if (
          !SelectParentRef.current?.contains(e.target as Node) &&
          DropdownIndicatorRef.current!
        ) {
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

    // Событие при выборе селекта
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
          onChange={(newValue) => {
            SelectOnChange(newValue as Select_Option);
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
