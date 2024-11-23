import type { Meta, StoryObj } from "@storybook/react";
import { HeaderMenuDropdown } from "./HeaderMenuDropdown";
import { useState } from "react";

const meta = {
  title: "Dropdowns/HeaderMenuDropdown",
  component: HeaderMenuDropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeaderMenuDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    DropdownIsOpen: true,
    setDropdownIsOpen: useState,
    setLoginIsOpen: useState,
  },
};
