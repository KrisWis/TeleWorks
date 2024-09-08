import type { Meta, StoryObj } from "@storybook/react";
import { IncreaseScaleHover } from "./IncreaseScaleHover";

const meta = {
  title: "Shared/IncreaseScaleHover",
  component: IncreaseScaleHover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof IncreaseScaleHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <span>test</span>,
  },
};
