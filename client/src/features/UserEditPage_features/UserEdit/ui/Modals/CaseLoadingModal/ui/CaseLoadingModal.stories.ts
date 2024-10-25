import type { Meta, StoryObj } from "@storybook/react";
import { CaseLoadingModal } from "./CaseLoadingModal";

const meta = {
  title: "Modals/CaseLoadingModal",
  component: CaseLoadingModal,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CaseLoadingModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    setLastDetailsModalIsOpen: jest.fn(),
    setCaseLoadingModalIsOpen: jest.fn(),
  },
};
