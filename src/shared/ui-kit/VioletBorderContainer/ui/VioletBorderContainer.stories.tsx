import type { Meta, StoryObj } from "@storybook/react";
import { VioletBorderContainer } from "./VioletBorderContainer";

const meta = {
  title: "Shared/VioletBorderContainer",
  component: VioletBorderContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VioletBorderContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div></div>,
  },
};
