import type { Meta, StoryObj } from "@storybook/react";
import { InterpolationLineChartSecondary } from "./InterpolationLineChartSecondary";

const meta = {
  title: "Shared/InterpolationLineChartSecondary",
  component: InterpolationLineChartSecondary,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InterpolationLineChartSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    chartDataSets: [
      {
        id: 1,
        label: "12 Агв",
        value: 0,
      },
      {
        id: 2,
        label: "13 Авг",
        value: 200,
      },
      {
        id: 3,
        label: "14 Авг",
        value: 150,
      },
      {
        id: 4,
        label: "15 Авг",
        value: 400,
      },
      {
        id: 5,
        label: "16 Авг",
        value: 300,
      },
      {
        id: 6,
        label: "17 Авг",
        value: 700,
      },
      {
        id: 7,
        label: "18 Авг",
        value: 550,
      },
      {
        id: 8,
        label: "19 Авг",
        value: 570,
      },
      {
        id: 9,
        label: "20 Авг",
        value: 540,
      },
      {
        id: 10,
        label: "21 Авг",
        value: 570,
      },
    ],
  },
};
