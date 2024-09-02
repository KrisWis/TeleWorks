import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsViewsAnalyze } from "./TelegramChannelStatsViewsAnalyze";

const meta = {
  title: "PageContents/TelegramChannelStatsViewsAnalyze",
  component: TelegramChannelStatsViewsAnalyze,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsViewsAnalyze>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
