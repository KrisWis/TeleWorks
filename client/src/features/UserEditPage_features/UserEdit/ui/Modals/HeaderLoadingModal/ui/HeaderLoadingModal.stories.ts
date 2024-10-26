import type { Meta, StoryObj } from "@storybook/react";
import { HeaderLoadingModal } from "./HeaderLoadingModal";
import { useState } from "react";

const meta = {
  title: "Modals/HeaderLoadingModal",
  component: HeaderLoadingModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeaderLoadingModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    HeaderLoadedImageFinish: "",
    setHeaderLoadedImageFinish: useState,
    CustomSetModalAppear: useState,
    setModalOpen: useState,
  },
};
