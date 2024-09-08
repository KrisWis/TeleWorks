import type { Meta, StoryObj } from "@storybook/react";
import { ProjectEditions } from "./ProjectEditions";

const meta = {
  title: "Shared/ProjectEditions",
  component: ProjectEditions,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProjectEditions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    editionsAmount: 3,
  },
};
