import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CatalogPage } from "./CatalogPage";

const meta = {
  title: "Pages/CatalogPage",
  component: CatalogPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof CatalogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
