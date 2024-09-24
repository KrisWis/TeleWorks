import type { Meta, StoryObj } from "@storybook/react";
import { LoadImageBlockWithoutLoading } from "./LoadImageBlockWithoutLoading";
import { LoadImageBlockSizes } from "..";

const meta = {
  title: "Shared/LoadImageBlockWithoutLoading",
  component: LoadImageBlockWithoutLoading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadImageBlockWithoutLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: LoadImageBlockSizes.BIG,
    title: "Загрузить изображение",
    requirements: true,
  },
};
