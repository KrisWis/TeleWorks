import type { Meta, StoryObj } from "@storybook/react";
import { PostsBlock } from "./PostsBlock";

const meta = {
  title: "Shared/PostsBlock",
  component: PostsBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PostsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    postsAmount: 1573,
  },
};
