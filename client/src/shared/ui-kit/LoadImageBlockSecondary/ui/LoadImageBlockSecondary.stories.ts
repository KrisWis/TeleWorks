import type { Meta, StoryObj } from "@storybook/react";
import { LoadImageBlockSecondary } from "./LoadImageBlockSecondary";
import { useState } from "react";
import { URL_PART } from "@/app";

const meta = {
  title: "Shared/LoadImageBlockSecondary",
  component: LoadImageBlockSecondary,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadImageBlockSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    LoadedImage: `${URL_PART}/global/images/serviceExample_img_big.png`,
    setLoadedImage: useState,
    LoadedImageErrors: [],
    setLoadedImageErrors: useState,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    LoadedImage: `${URL_PART}/global/images/serviceExample_img_big.png`,
    setLoadedImage: useState,
    LoadedImageErrors: [],
    setLoadedImageErrors: useState,
  },
};
