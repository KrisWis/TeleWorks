import type { Meta, StoryObj } from "@storybook/react";
import { TagsInput } from "./TagsInput";
import { useState } from "react";

const meta = {
  title: "Shared/TagsInput",
  component: TagsInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TagsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setSelectedTags: useState,
    SelectedTags: [],
  },
};
