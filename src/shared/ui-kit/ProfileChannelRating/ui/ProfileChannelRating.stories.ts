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
    backgroundIsVisible: false,
  },
};

export const WithBackground: Story = {
  args: {
    backgroundIsVisible: true,
  },
};
