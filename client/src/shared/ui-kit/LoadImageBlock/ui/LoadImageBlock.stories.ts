import type { Meta, StoryObj } from "@storybook/react";
import { LoadImageBlock } from "./LoadImageBlock";
import { useState } from "react";
import { URL_PART } from "@/shared/const/app";
import { LoadImageBlockSizes } from "../../LoadImageBlockWithoutLoading";

const meta = {
  title: "Shared/LoadImageBlock",
  component: LoadImageBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BIG: Story = {
  args: {
    size: LoadImageBlockSizes.BIG,
    title: "Загрузить изображение",
    requirements: true,
    LoadedImage: `${URL_PART}/global/images/serviceExample_img_big.png`,
    setLoadedImage: useState,
    LoadedImageErrors: [],
    setLoadedImageErrors: useState,
  },
};

export const SMALL: Story = {
  args: {
    size: LoadImageBlockSizes.SMALL,
    title: "Загрузить изображение",
    requirements: true,
    LoadedImage: `${URL_PART}/global/images/serviceExample_img_big.png`,
    setLoadedImage: useState,
    LoadedImageErrors: [],
    setLoadedImageErrors: useState,
  },
};
