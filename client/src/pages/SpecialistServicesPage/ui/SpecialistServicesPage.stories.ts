import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SpecialistServicesPage } from "./SpecialistServicesPage";

const meta = {
  title: "Pages/SpecialistServicesPage",
  component: SpecialistServicesPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof SpecialistServicesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
