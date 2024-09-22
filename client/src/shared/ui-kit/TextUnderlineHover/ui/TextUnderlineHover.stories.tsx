import type { Meta, StoryObj } from "@storybook/react";
import { TextUnderlineHover } from "./TextUnderlineHover";

const meta = {
  title: "Shared/TextUnderlineHover",
  component: TextUnderlineHover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextUnderlineHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>Ответить</>,
  },
};
