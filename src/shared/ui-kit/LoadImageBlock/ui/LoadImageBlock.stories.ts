import type { Meta, StoryObj } from "@storybook/react";
import { LoadImageBlock } from "./LoadImageBlock";
import { LoadImageBlockSizes } from "../model/LoadImageBlock_types";

const meta = {
  title: "Shared/LoadImageBlock",
  component: LoadImageBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderImage: Story = {
  args: {
    size: LoadImageBlockSizes.BIG,
    title: "Загрузить шапку профиля",
  },
};
