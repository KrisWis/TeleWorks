import type { Meta, StoryObj } from "@storybook/react";
import { ShowFullImage } from "./ShowFullImage";
import { ShowFullImageTypes } from "../model/ShowFullImage_types";

const meta = {
  title: "Shared/ShowFullImage",
  component: ShowFullImage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ShowFullImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    imgURLs: [
      `/global/images/serviceExample_img_big.png`,
      `/global/images/portfolioCase__example_img.png`,
      `/global/images/serviceExample_img_big.png`,
    ],
    type: ShowFullImageTypes.FULL,
  },
};

export const Short: Story = {
  args: {
    imgURLs: [
      `/global/images/serviceExample_img_big.png`,
      `/global/images/portfolioCase__example_img.png`,
      `/global/images/serviceExample_img_big.png`,
    ],
    type: ShowFullImageTypes.SHORT,
  },
};
