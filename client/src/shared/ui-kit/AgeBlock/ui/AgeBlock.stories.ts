import type { Meta, StoryObj } from "@storybook/react";
import { AgeBlock } from "./AgeBlock";

const meta = {
  title: "Shared/AgeBlock",
  component: AgeBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AgeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    age: "1 год.",
  },
};
