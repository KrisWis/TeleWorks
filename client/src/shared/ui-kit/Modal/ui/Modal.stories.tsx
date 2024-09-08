import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta = {
  title: "Shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <div>Текст модалки</div>,
  },
};
