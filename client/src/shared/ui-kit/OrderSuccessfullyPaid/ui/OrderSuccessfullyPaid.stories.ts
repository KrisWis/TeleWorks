import type { Meta, StoryObj } from "@storybook/react";
import { OrderSuccessfullyPaid } from "./OrderSuccessfullyPaid";

const meta = {
  title: "Shared/OrderSuccessfullyPaid",
  component: OrderSuccessfullyPaid,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof OrderSuccessfullyPaid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
