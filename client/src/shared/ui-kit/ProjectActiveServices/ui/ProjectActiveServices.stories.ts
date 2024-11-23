import type { Meta, StoryObj } from "@storybook/react";
import { ProjectActiveServices } from "./ProjectActiveServices";

const meta = {
  title: "Shared/ProjectActiveServices",
  component: ProjectActiveServices,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProjectActiveServices>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ProjectActiveServices: ["active", "active2"],
  },
};
