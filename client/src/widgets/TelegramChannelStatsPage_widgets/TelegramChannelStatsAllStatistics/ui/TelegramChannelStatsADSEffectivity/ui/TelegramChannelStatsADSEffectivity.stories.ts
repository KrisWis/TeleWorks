import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsADSEffectivity } from "./TelegramChannelStatsADSEffectivity";

const meta = {
  title: "PageContents/TelegramChannelStatsADSEffectivity",
  component: TelegramChannelStatsADSEffectivity,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsADSEffectivity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
