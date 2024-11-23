import type { Meta, StoryObj } from "@storybook/react";
import { Share } from "./Share";
import { ShareTypes } from "../model/Share_types";

const meta = {
  title: "Shared/Share",
  component: Share,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Share>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ShareTypes.DEFAULT,
    url: "url",
  },
};

export const Red: Story = {
  args: {
    type: ShareTypes.RED,
    url: "url",
  },
};
