import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { AvatarSizes } from "../model/Avatar_types";

const meta = {
  title: "Shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    imgSize: AvatarSizes.SMALL,
    imgURL: `/global/images/serviceExample_authorImg.png`,
  },
};

export const Medium: Story = {
  args: {
    imgSize: AvatarSizes.MEDIUM,
    imgURL: `/global/images/serviceExample_authorImg.png`,
  },
};

export const Big: Story = {
  args: {
    imgSize: AvatarSizes.BIG,
    imgURL: `/global/images/serviceExample_authorImg.png`,
  },
};
