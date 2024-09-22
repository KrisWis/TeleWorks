import type { Meta, StoryObj } from "@storybook/react";
import { BlogPage } from "./BlogPage";

const meta = {
  title: "Pages/BlogPage",
  component: BlogPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BlogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
