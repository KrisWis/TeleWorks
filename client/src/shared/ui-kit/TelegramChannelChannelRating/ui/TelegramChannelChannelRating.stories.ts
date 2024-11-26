import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelChannelRating } from "./TelegramChannelChannelRating";

const meta = {
  title: "Shared/TelegramChannelChannelRating",
  component: TelegramChannelChannelRating,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelChannelRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutBackground: Story = {
  args: {
    rating: 509.2,
    backgroundIsVisible: false,
  },
};

export const WithBackground: Story = {
  args: {
    rating: 509.2,
    backgroundIsVisible: true,
  },
};
