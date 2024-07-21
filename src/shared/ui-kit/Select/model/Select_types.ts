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

export interface Select__Props {
  selectedOptions: Select_Option[];
  CustomDropdownIndicator: () => JSX.Element;
  TextStyles: SelectTextStyles;
  className?: string;
}
