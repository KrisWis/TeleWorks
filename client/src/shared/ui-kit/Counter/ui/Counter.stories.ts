import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";

const meta = {
  title: "Shared/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    amount: 1,
    dicreaseAmount: () => {},
    increaseAmount: () => {},
  },
};

export const MediumDisabled: Story = {
  args: {
    amount: 1,
    dicreaseAmount: () => {},
    increaseAmount: () => {},
    isDisabled: true,
  },
};

export const Small: Story = {
  args: {
    amount: 1,
    dicreaseAmount: () => {},
    increaseAmount: () => {},
    type: "small",
  },
};

export const SmallDisabled: Story = {
  args: {
    amount: 1,
    dicreaseAmount: () => {},
    increaseAmount: () => {},
    isDisabled: true,
    type: "small",
  },
};
