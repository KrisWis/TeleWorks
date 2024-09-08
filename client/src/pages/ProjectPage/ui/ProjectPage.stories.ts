import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ProjectPage } from "./ProjectPage";

const meta = {
  title: "Pages/ProjectPage",
  component: ProjectPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof ProjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
