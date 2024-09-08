import type { Meta, StoryObj } from "@storybook/react";
import { Buy_ads_form } from "./Buy_ads_form";

const meta = {
  title: "features/Buy_ads_form",
  component: Buy_ads_form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Buy_ads_form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
