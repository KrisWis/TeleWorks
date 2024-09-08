import type { Meta, StoryObj } from "@storybook/react";
import { UserEditAbout } from "./UserEditAbout";

const meta = {
  title: "features/UserEditAbout",
  component: UserEditAbout,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserEditAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
