import type { Meta, StoryObj } from "@storybook/react";
import { HeaderServicesDropdown } from "./HeaderServicesDropdown";
import { useState } from "react";

const meta = {
  title: "Dropdowns/HeaderServicesDropdown",
  component: HeaderServicesDropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeaderServicesDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    DropdownIsOpen: true,
    setDropdownIsOpen: useState,
  },
};
