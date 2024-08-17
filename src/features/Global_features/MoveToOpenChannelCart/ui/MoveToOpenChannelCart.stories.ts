import type { Meta, StoryObj } from "@storybook/react";
import { MoveToOpenChannelCart } from "./MoveToOpenChannelCart";

const meta = {
  title: "features/MoveToOpenChannelCart",
  component: MoveToOpenChannelCart,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MoveToOpenChannelCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
