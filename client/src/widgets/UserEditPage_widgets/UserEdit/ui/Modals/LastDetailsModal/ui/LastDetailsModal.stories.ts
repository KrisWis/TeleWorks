import type { Meta, StoryObj } from "@storybook/react";
import { LastDetailsModal } from "./LastDetailsModal";

const meta = {
  title: "Modals/LastDetailsModal",
  component: LastDetailsModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LastDetailsModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
