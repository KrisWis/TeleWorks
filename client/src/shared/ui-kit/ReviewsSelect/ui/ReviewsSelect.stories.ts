import type { Meta, StoryObj } from "@storybook/react";
import { ReviewsSelect } from "./ReviewsSelect";
import { Select_Option } from "../../Select/model/Select_types";

const meta = {
  title: "Shared/ReviewsSelect",
  component: ReviewsSelect,

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReviewsSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const reviews_selectOptions: Select_Option[] = [
  {
    value: "Сортировка: По самым полезным",
    label: "Сортировка: По самым полезным",
  },
  {
    value: "Сортировка: По самым популярным",
    label: "Сортировка: По самым популярным",
  },
  {
    value: "Сортировка: По самым смешным",
    label: "Сортировка: По самым смешным",
  },
];

export const Primary: Story = {
  args: {
    reviews_selectOptions: reviews_selectOptions,
  },
};
