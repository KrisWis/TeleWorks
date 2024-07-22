import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import styles from "./Select.module.scss";
import { SelectTextStyles, SelectThemes } from "../model/Select_types";
import { catalogFilter_themesOptions } from "@/features/Global_features/Filter/model/Filter_data";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const DropdownIndicator = (): JSX.Element => {
  return (
    <svg
      className={styles.Select__svg}
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

const getTextStyles = (themes: boolean = false): SelectTextStyles => {
  return {
    fontFamily: "var(--second-family)",
    fontWeight: 400,
    fontSize: themes == true ? "14px" : "15px",
    letterSpacing: "-0.01em",
    lineHeight: "150%",
    color: themes == true ? "#b2b2b2" : "#000",
  };
};

export const BLACK: Story = {
  args: {
    className: styles.Select,
    CustomDropdownIndicator: DropdownIndicator,
    TextStyles: getTextStyles(true),
    selectedOptions: catalogFilter_themesOptions,
    theme: SelectThemes.BLACK,
  },
};

export const GRAY: Story = {
  args: {
    className: styles.Select,
    CustomDropdownIndicator: DropdownIndicator,
    TextStyles: getTextStyles(true),
    selectedOptions: catalogFilter_themesOptions,
    theme: SelectThemes.GRAY,
  },
};
