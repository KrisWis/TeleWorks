export interface Select_Option {
  value: string;
  label: string;
}

export interface SelectTextStyles {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  letterSpacing?: string;
  lineHeight?: string;
  color?: string;
  opacity?: number;
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
    color: "#000",
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
}

export interface Select__Props {
  selectedOptions: Select_Option[];
  CustomDropdownIndicator: () => JSX.Element;
  TextStyles: SelectTextStyles;
  className?: string;
  theme?: SelectThemesEnum;
  valueContainerPadding?: valueContainerPaddingEnum;
}
