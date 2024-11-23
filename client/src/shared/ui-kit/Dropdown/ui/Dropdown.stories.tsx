import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

const meta = {
  title: "Shared/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    DropdownIsOpen: false,
    setDropdownIsOpen: useState,
    children: <>Dropdown</>,
    trigger: <>Клик</>,
  },
};

export const Open: Story = {
  args: {
    DropdownIsOpen: true,
    setDropdownIsOpen: useState,
    children: <>Dropdown</>,
    trigger: <>Клик</>,
  },
};
