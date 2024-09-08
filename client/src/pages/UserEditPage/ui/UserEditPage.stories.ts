import type { Meta, StoryObj } from "@storybook/react";
import { UserEditPage } from "./UserEditPage";

const meta = {
  title: "Pages/UserEditPage",
  component: UserEditPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
