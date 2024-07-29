import type { Meta, StoryObj } from "@storybook/react";
import { PopupTemplate } from "./PopupTemplate";

const meta = {
  title: "Shared/PopupTemplate",
  component: PopupTemplate,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PopupTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
