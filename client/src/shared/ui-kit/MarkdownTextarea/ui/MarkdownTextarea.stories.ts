import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownTextarea } from "./MarkdownTextarea";
import { useState } from "react";

const meta = {
  title: "Shared/MarkdownTextarea",
  component: MarkdownTextarea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MarkdownTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    TextareaValue: "",
    setTextareaValue: useState,
    minSymbolsAmount: 100,
    maxSymbolsAmount: 500,
  },
};
