import type { Meta, StoryObj } from "@storybook/react";
import { OrderSecurityGuarantee } from "./OrderSecurityGuarantee";

const meta = {
  title: "Shared/OrderSecurityGuarantee",
  component: OrderSecurityGuarantee,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof OrderSecurityGuarantee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
