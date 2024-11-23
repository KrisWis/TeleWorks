import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InternalPage } from "./InternalPage";

const meta = {
  title: "Pages/InternalPage",
  component: InternalPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof InternalPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
