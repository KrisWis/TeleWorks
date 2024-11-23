import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonTypes } from "../model/Button__types";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonRed: Story = {
  args: {
    to: "/",
    text: "Красная кнопка",
    type: ButtonTypes.RED,
  },
};

export const ButtonBlue: Story = {
  args: {
    to: "/",
    text: "Синяя кнопка",
    type: ButtonTypes.BLUE,
  },
};

export const ButtonGray: Story = {
  args: {
    to: "/",
    text: "Серая кнопка",
    type: ButtonTypes.GRAY,
  },
};

export const ButtonBlack: Story = {
  args: {
    to: "/",
    text: "Чёрная кнопка",
    type: ButtonTypes.BLACK,
  },
};
