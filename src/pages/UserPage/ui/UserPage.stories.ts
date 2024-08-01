import type { Meta, StoryObj } from "@storybook/react";
import { UserPage } from "./UserPage";
import { fn } from "@storybook/test";

const meta = {
  title: "Pages/UserPage",
  component: UserPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof UserPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
