import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TelegramChannelPage } from "./TelegramChannelPage";

const meta = {
  title: "Pages/TelegramChannelPage",
  component: TelegramChannelPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof TelegramChannelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
