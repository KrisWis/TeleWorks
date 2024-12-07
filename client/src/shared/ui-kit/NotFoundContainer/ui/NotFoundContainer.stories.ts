import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundContainer } from "./NotFoundContainer";

const meta = {
  title: "Shared/NotFoundContainer",
  component: NotFoundContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NotFoundContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
