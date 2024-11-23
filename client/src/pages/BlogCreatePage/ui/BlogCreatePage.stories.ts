import type { Meta, StoryObj } from "@storybook/react";
import { BlogCreatePage } from "./BlogCreatePage";

const meta = {
  title: "Pages/BlogCreatePage",
  component: BlogCreatePage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BlogCreatePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
