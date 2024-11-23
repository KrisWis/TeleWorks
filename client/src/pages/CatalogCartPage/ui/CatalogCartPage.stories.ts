import type { Meta, StoryObj } from "@storybook/react";
import { CatalogCartPage } from "./CatalogCartPage";

const meta = {
  title: "Pages/CatalogCartPage",
  component: CatalogCartPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CatalogCartPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
