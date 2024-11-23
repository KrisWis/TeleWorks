import type { Meta, StoryObj } from "@storybook/react";
import { AuthorStats } from "./AuthorStats";

const meta = {
  title: "Shared/AuthorStats",
  component: AuthorStats,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AuthorStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    reputation: 1,
    ordersAmount: 1,
    positiveReviewsAmount: 1,
    negativeReviewsAmount: 1,
  },
};
