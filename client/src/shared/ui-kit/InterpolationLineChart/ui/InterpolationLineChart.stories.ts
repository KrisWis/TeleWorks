import type { Meta, StoryObj } from "@storybook/react";
import { InterpolationLineChart } from "./InterpolationLineChart";
import { telegramChannelStatsInvolvementAverageAmountGraphic } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsInvolvement/model/TelegramChannelStatsInvolvement_data";

const meta = {
  title: "Shared/InterpolationLineChart",
  component: InterpolationLineChart,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InterpolationLineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    charts: telegramChannelStatsInvolvementAverageAmountGraphic,
  },
};
