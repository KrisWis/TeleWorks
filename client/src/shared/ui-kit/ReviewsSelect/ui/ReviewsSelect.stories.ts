import type { Meta, StoryObj } from "@storybook/react";
import { ReviewsSelect } from "./ReviewsSelect";
import { reviews_selectOptions } from "@/widgets/ProfilePage_widgets/Reviews/model/Reviews_data";

const meta = {
  title: "Shared/ReviewsSelect",
  component: ReviewsSelect,

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReviewsSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    reviews_selectOptions: reviews_selectOptions,
  },
};
