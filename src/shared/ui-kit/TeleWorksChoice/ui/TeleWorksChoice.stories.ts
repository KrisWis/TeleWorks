import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TeleWorksChoice } from "./TeleWorksChoice";

const meta = {
  title: "Shared/TeleWorksChoice",
  component: TeleWorksChoice,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof TeleWorksChoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
