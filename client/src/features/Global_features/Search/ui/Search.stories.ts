import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import { ButtonTypes } from "@/shared/ui-kit/Button";

const meta = {
  title: "features/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "placeholder",
    ButtonType: ButtonTypes.RED,
    ButtonText: "Click",
  },
};
