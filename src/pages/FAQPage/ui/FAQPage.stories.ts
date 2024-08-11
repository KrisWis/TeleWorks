import type { Meta, StoryObj } from "@storybook/react";
import { FAQPage } from "./FAQPage";

const meta = {
  title: "Pages/FAQPage",
  component: FAQPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FAQPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
