import type { Meta, StoryObj } from "@storybook/react";
import { CreateOrderPage } from "./CreateOrderPage";

const meta = {
  title: "Pages/CreateOrderPage",
  component: CreateOrderPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateOrderPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
