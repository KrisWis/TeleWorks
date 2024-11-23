import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsSubscribersAttraction } from "./TelegramChannelStatsSubscribersAttraction";

const meta = {
  title: "PageContents/TelegramChannelStatsSubscribersAttraction",
  component: TelegramChannelStatsSubscribersAttraction,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsSubscribersAttraction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
