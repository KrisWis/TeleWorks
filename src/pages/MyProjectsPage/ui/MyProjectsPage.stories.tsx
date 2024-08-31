import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MyProjectsPage } from "./MyProjectsPage";

const meta = {
  title: "Pages/MyProjectsPage",
  component: MyProjectsPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof MyProjectsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
