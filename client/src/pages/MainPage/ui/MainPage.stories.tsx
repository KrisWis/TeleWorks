import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MainPage } from "./MainPage";

const meta = {
  title: "Pages/MainPage",
  component: MainPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
