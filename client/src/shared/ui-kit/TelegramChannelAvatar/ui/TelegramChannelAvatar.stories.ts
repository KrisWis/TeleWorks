import type { Meta, StoryObj } from "@storybook/react";
import { TelegramChannelAvatar } from "./TelegramChannelAvatar";
import { URL_PART } from "@/shared/const/app";
import { AvatarSizes } from "../../Avatar";

const meta = {
  title: "Shared/TelegramChannelAvatar",
  component: TelegramChannelAvatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TelegramChannelAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BIG: Story = {
  args: {
    src: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    size: AvatarSizes.BIG,
  },
};

export const MEDIUM: Story = {
  args: {
    src: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    size: AvatarSizes.MEDIUM,
  },
};

export const SMALL: Story = {
  args: {
    src: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    size: AvatarSizes.SMALL,
  },
};
