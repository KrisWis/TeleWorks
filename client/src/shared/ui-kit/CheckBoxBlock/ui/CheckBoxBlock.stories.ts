import type { Meta, StoryObj } from "@storybook/react";
import { CheckBoxBlock } from "./CheckBoxBlock";

const meta = {
  title: "Shared/CheckBoxBlock",
  component: CheckBoxBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckBoxBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    isActive: true,
    onClick: () => {},
  },
};

export const DisActive: Story = {
  args: {
    isActive: false,
    onClick: () => {},
  },
};

export const Warn: Story = {
  args: {
    isActive: false,
    onClick: () => {},
    isWarn: true,
  },
};
