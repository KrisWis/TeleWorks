import type { Meta, StoryObj } from "@storybook/react";
import { ModalTemplate } from "./ModalTemplate";
import { useState } from "react";

const meta = {
  title: "Shared/ModalTemplate",
  component: ModalTemplate,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ModalTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <></>,
    setModalOpen: useState,
    CustomSetModalAppear: useState,
  },
};
