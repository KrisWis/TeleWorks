import type { Meta, StoryObj } from "@storybook/react";
import { CustomItemBadge } from "./CustomItemBadge";

const meta = {
  title: "Shared/CustomItemBadge",
  component: CustomItemBadge,

  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomItemBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TeleWorksChoice: Story = {
  args: {
    firstTitle: "Выбор",
    secondTitle: "TeleWorks",
  },
};

export const TopOfTheWeek: Story = {
  args: {
    firstTitle: "Топ",
    secondTitle: "НЕДЕЛИ",
  },
};
