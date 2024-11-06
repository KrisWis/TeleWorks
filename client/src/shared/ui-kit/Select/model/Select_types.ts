/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Select_Option<OptionType = string> {
  value: OptionType;
  label: OptionType;
}

export interface SelectTextStyles {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  letterSpacing?: string;
  lineHeight?: string;
  color?: string;
  opacity?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

export interface SelectTheme {
  color: string;
  fontSize: string;
}

export enum SelectThemesEnum {
  BLACK = "black",
  GRAY = "gray",
}

export type SelectThemesList = {
  [key in SelectThemesEnum]: SelectTheme;
};

export const SelectThemes: SelectThemesList = {
  black: {
    fontSize: "15px",
    color: "var(--black-color)",
  },

  gray: {
    fontSize: "14px",
    color: "#b2b2b2",
  },
};

export enum valueContainerPaddingEnum {
  BIG = "2px 20px",
  MEDIUM = "2px 15px",
  SMALL = "2px 7px",
  NONE = "0px",
}

export interface Select__Props {
  /**
   * Выбираемые опции в селекте
   */
  selectedOptions: Select_Option[];
  placeholder?: string;

  /**
   * Компонент стрелочки, которая будет отображаться внутри селекта
   */
  CustomDropdownIndicator: () => JSX.Element;

  /**
   * Стили для текста
   */
  TextStyles: SelectTextStyles;
  className?: string;

  /**
   * Класс для обёртки компонента
   */
  wrapperClassName?: string;

  /**
   * Выбранная тема компонента
   */
  theme?: SelectThemesEnum;

  /**
   * Количество паддинга в компоненте
   */
  valueContainerPadding?: valueContainerPaddingEnum;

  /**
   * Опция, выбранная по-умолчанию
   */
  DefaultSelectedOption?: Select_Option;

  /**
   * Внешний стейт, который будет изменяться при выборе опции
   */
  setState?:
    | undefined
    | React.Dispatch<React.SetStateAction<Select_Option<any>>>
    | ((arg0: string | any) => void);
}
