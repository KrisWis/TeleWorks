import type { Meta, StoryObj } from "@storybook/react";
import { ProfileAvatar } from "./ProfileAvatar";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { AvatarSizes } from "../../Avatar";

const meta = {
  title: "Shared/ProfileAvatar",
  component: ProfileAvatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BIG: Story = {
  args: {
    src: `${URL_PART}/ProfilePage/images/other/default-user.png`,
    size: AvatarSizes.BIG,
  },
};

export const MEDIUM: Story = {
  args: {
    src: `${URL_PART}/ProfilePage/images/other/default-user.png`,
    size: AvatarSizes.MEDIUM,
  },
};

export const SMALL: Story = {
  args: {
    src: `${URL_PART}/ProfilePage/images/other/default-user.png`,
    size: AvatarSizes.SMALL,
  },
};
