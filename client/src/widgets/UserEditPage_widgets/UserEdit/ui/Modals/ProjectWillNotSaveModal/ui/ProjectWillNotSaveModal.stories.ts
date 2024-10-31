import type { Meta, StoryObj } from "@storybook/react";
import { ProjectWillNotSaveModal } from "./ProjectWillNotSaveModal";

const meta = {
  title: "Modals/ProjectWillNotSaveModal",
  component: ProjectWillNotSaveModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProjectWillNotSaveModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
