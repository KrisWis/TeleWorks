import type { Meta, StoryObj } from "@storybook/react";
import { Share } from "./Share";

const meta = {
  title: "Shared/Share",
  component: Share,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Share>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
