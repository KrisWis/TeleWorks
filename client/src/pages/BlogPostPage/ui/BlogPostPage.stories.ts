import type { Meta, StoryObj } from "@storybook/react";
import { BlogPostPage } from "./BlogPostPage";

const meta = {
  title: "Pages/BlogPostPage",
  component: BlogPostPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BlogPostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
