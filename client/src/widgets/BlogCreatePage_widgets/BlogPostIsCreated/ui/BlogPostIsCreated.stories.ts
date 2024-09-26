import type { Meta, StoryObj } from "@storybook/react";
import { BlogPostIsCreated } from "./BlogPostIsCreated";

const meta = {
  title: "PageContents/BlogPostIsCreated",
  component: BlogPostIsCreated,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BlogPostIsCreated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
