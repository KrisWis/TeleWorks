import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "text",
    placeholder: "placeholder",
    value: "value",
    onChange: () => {},
  },
};

export const IsWarn: Story = {
  args: {
    type: "text",
    placeholder: "placeholder",
    value: "value",
    onChange: () => {},
    isWarn: true,
  },
};
