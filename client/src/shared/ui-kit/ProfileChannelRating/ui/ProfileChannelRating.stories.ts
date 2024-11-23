import type { Meta, StoryObj } from "@storybook/react";
import { ProfileChannelRating } from "./ProfileChannelRating";

const meta = {
  title: "Shared/ProfileChannelRating",
  component: ProfileChannelRating,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileChannelRating>;

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
