import type { Meta, StoryObj } from "@storybook/react";
import { AuthModal } from "./AuthModal";
import { useState } from "react";

const meta = {
  title: "Features/AuthModal",
  component: AuthModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AuthModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setModalOpen: useState,
    setRegModalOpen: useState,
    CustomSetModalAppear: useState,
    setPasswordRecoveryModalOpen: useState,
  },
};
