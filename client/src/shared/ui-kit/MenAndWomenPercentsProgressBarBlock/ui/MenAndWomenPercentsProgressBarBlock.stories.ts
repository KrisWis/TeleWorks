import type { Meta, StoryObj } from "@storybook/react";
import { MenAndWomenPercentsProgressBarBlock } from "./MenAndWomenPercentsProgressBarBlock";

const meta = {
  title: "Shared/MenAndWomenPercentsProgressBarBlock",
  component: MenAndWomenPercentsProgressBarBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenAndWomenPercentsProgressBarBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    menPercent: 50,
    womenPercent: 50,
    title: "Пол подписчиков",
  },
};
