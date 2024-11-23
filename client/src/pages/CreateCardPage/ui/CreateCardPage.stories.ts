import type { Meta, StoryObj } from "@storybook/react";
import { CreateCardPage } from "./CreateCardPage";
import { fn } from "@storybook/test";

const meta = {
  title: "Pages/CreateCardPage",
  component: CreateCardPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof CreateCardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
