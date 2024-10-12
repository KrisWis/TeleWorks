import type { Meta, StoryObj } from "@storybook/react";
import { KindDeedsCreateRequestPage } from "./KindDeedsCreateRequestPage";

const meta = {
  title: "Pages/KindDeedsCreateRequestPage",
  component: KindDeedsCreateRequestPage,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof KindDeedsCreateRequestPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
