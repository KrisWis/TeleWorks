import type { Meta, StoryObj } from "@storybook/react";
import { ErrorContainer } from "./ErrorContainer";

const meta = {
  title: "Shared/ErrorContainer",
  component: ErrorContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ErrorContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
