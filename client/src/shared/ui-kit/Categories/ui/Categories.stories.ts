import type { Meta, StoryObj } from "@storybook/react";
import { Categories } from "./Categories";

const meta = {
  title: "features/Categories",
  component: Categories,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Categories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    categories: [
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
      "category",
    ],
    SliderPrevArrowID: "custom_prevID",
    SliderNextArrowID: "custom_nextID",
  },
};
