import type { Meta, StoryObj } from "@storybook/react";
import { Favourite } from "./Favourite";
import { useState } from "react";

const meta = {
  title: "Shared/Favourite",
  component: Favourite,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Favourite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsNotFavourite: Story = {
  args: {
    IsFavourite: false,
    setIsFavourite: useState,
  },
};

export const IsFavourite: Story = {
  args: {
    IsFavourite: true,
    setIsFavourite: useState,
  },
};
