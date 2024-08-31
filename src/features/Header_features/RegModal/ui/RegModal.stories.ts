import type { Meta, StoryObj } from "@storybook/react";
import { RegModal } from "./RegModal";
import { useState } from "react";

const meta = {
  title: "Modals/RegModal",
  component: RegModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RegModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setModalOpen: useState,
    setLoginModalOpen: useState,
    CustomSetModalAppear: useState,
  },
};
