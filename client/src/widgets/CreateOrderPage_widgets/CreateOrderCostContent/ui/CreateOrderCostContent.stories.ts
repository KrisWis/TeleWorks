import type { Meta, StoryObj } from "@storybook/react";
import { CreateOrderCostContent } from "./CreateOrderCostContent";

const meta = {
  title: "PageContents/CreateOrderCostContent",
  component: CreateOrderCostContent,
} satisfies Meta<typeof CreateOrderCostContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
