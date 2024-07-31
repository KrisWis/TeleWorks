import type { Meta, StoryObj } from "@storybook/react";
import { ShowFullImage } from "./ShowFullImage";

const meta = {
  title: "Shared/ShowFullImage",
  component: ShowFullImage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ShowFullImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgURLs: [
      `/global/images/serviceExample_img_big.png`,
      `/global/images/portfolioCase__example_img.png`,
      `/global/images/serviceExample_img_big.png`,
    ],
  },
};
