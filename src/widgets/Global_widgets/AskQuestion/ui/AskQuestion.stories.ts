import type { Meta, StoryObj } from "@storybook/react";
import { AskQuestion } from "./AskQuestion";

const meta = {
  title: "Global Widgets/AskQuestion",
  component: AskQuestion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AskQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
