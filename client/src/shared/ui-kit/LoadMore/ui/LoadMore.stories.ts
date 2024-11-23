import type { Meta, StoryObj } from "@storybook/react";
import { LoadMore } from "./LoadMore";
import { ButtonTypes } from "../../Button";

const meta = {
  title: "Shared/LoadMore",
  component: LoadMore,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: ButtonTypes.RED,
  },
};
