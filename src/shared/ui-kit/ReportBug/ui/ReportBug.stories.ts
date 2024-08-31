import type { Meta, StoryObj } from "@storybook/react";
import { ReportBug } from "./ReportBug";

const meta = {
  title: "Shared/ReportBug",
  component: ReportBug,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReportBug>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
