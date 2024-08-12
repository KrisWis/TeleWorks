import type { Meta, StoryObj } from "@storybook/react";
import { ReceiveNotifications } from "./ReceiveNotifications";

const meta = {
  title: "Global Widgets/ReceiveNotifications",
  component: ReceiveNotifications,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReceiveNotifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
