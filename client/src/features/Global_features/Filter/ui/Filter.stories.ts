import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";

const meta = {
  title: "features/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bonusFilters: [
      [{ value: "value", label: "label" }],
      [{ value: "value", label: "label" }],
      [{ value: "value", label: "label" }],
    ],
  },
};
