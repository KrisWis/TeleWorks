import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ProfilePage } from "./ProfilePage";

const meta = {
  title: "Pages/ProfilePage",
  component: ProfilePage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
