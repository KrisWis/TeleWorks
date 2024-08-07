import type { Meta, StoryObj } from "@storybook/react";
import { CreateOrderTechnicalInformationContent } from "./CreateOrderTechnicalInformationContent";

const meta = {
  title: "PageContents/CreateOrderTechnicalInformationContent",
  component: CreateOrderTechnicalInformationContent,
} satisfies Meta<typeof CreateOrderTechnicalInformationContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
