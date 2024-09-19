import type { Meta, StoryObj } from "@storybook/react";
import { AttachFileContainer } from "./AttachFileContainer";
import { RefObject, useRef, useState } from "react";

const meta = {
  title: "Global Widgets/AttachFileContainer",
  component: AttachFileContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AttachFileContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    InputFiles: [],
    setInputFiles: useState,
    setInputFileProgress: useState,
    inputRef: useRef as unknown as RefObject<HTMLInputElement>,
  },
};
