import type { Meta, StoryObj } from "@storybook/react";
import { UserPage } from "./UserPage";

const meta = {
  title: "Pages/UserPage",
  component: UserPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
