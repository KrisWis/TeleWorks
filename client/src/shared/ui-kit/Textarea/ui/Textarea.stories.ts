import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Shared/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "placeholder",
    value: "value",
    onChange: () => {},
  },
};

export const IsWarn: Story = {
  args: {
    placeholder: "placeholder",
    value: "value",
    onChange: () => {},
    isWarn: true,
  },
};
