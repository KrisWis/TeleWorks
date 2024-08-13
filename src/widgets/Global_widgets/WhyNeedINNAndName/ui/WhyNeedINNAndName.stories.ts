import type { Meta, StoryObj } from "@storybook/react";
import { WhyNeedINNAndName } from "./WhyNeedINNAndName";
import "./WhyNeedINNAndName_swiper.scss";

const meta = {
  title: "Global Widgets/WhyNeedINNAndName",
  component: WhyNeedINNAndName,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WhyNeedINNAndName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ActiveSlide: 1,
  },
};
