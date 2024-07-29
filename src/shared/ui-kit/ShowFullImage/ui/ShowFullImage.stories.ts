import type { Meta, StoryObj } from "@storybook/react";
import { ShowFullImage } from "./ShowFullImage";
import { URL_PART } from "@/app/layouts/model/BaseLayout__data";

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
    imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
  },
};
