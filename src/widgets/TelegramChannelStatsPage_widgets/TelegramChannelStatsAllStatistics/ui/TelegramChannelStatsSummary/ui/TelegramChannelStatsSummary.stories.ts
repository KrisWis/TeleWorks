import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelStatsSummary } from "./TelegramChannelStatsSummary";

const meta = {
  title: "PageContents/TelegramChannelStatsSummary",
  component: TelegramChannelStatsSummary,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelStatsSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
