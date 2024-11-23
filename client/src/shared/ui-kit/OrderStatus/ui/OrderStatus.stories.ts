import type { Meta, StoryObj } from "@storybook/react";
import { OrderStatus } from "./OrderStatus";
import { OrderStatuses } from "../model/OrderStatus_types";

const meta = {
  title: "Shared/OrderStatus",
  component: OrderStatus,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof OrderStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Process: Story = {
  args: {
    orderStatus: OrderStatuses.PROCESS,
  },
};

export const Contestation: Story = {
  args: {
    orderStatus: OrderStatuses.CONTESTATION,
  },
};
