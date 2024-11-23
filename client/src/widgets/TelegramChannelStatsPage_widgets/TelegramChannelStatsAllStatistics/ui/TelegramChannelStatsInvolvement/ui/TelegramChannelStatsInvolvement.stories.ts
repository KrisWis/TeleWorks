import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsInvolvement } from "./TelegramChannelStatsInvolvement";

const meta = {
  title: "PageContents/TelegramChannelStatsInvolvement",
  component: TelegramChannelStatsInvolvement,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsInvolvement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
