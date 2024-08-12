import type { Meta, StoryObj } from "@storybook/react";
import { ReviewsPanel } from "./ReviewsPanel";

const meta = {
  title: "Global Widgets/ReviewsPanel",
  component: ReviewsPanel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReviewsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mark: 5,
    reviewsAmount: 256,
    fiveStarsProgress: 100,
    fourStarsProgress: 80,
    threeStarsProgress: 50,
    twoStarsProgress: 30,
    oneStarsProgress: 0,
  },
};
