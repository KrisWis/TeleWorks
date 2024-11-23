import type { Meta, StoryObj } from "@storybook/react";
import { CreateCardForm } from "./CreateCardForm";

const meta = {
  title: "features/CreateCardForm",
  component: CreateCardForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CreateCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
