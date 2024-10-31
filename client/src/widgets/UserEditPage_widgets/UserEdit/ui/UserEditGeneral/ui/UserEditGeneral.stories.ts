import type { Meta, StoryObj } from "@storybook/react";
import { UserEditGeneral } from "./UserEditGeneral";

const meta = {
  title: "features/UserEditGeneral",
  component: UserEditGeneral,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserEditGeneral>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
