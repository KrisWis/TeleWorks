import type { Meta, StoryObj } from "@storybook/react";
import { Buy_ads_calendar } from "./Buy_ads_calendar";

const meta = {
  title: "features/Buy_ads_calendar",
  component: Buy_ads_calendar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Buy_ads_calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
