import type { Meta, StoryObj } from "@storybook/react";
import { BlogFilter } from "./BlogFilter";

const meta = {
  title: "Global Widgets/BlogFilter",
  component: BlogFilter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BlogFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
