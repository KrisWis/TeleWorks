import type { Meta, StoryObj } from "@storybook/react";
import { PasswordRecoveryModal } from "./PasswordRecoveryModal";

const meta = {
  title: "Modals/PasswordRecoveryModal",
  component: PasswordRecoveryModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PasswordRecoveryModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
