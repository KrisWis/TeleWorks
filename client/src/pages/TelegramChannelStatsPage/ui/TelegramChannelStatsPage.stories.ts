import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsPage } from "./TelegramChannelStatsPage";

const meta = {
  title: "Pages/TelegramChannelStatsPage",
  component: TelegramChannelStatsPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
