import type { Meta, StoryObj } from "@storybook/react";
import { ProjectDeadline } from "./ProjectDeadline";

const meta = {
  title: "Shared/ProjectDeadline",
  component: ProjectDeadline,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProjectDeadline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    deadline: "1 день",
  },
};
