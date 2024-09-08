import type { Meta, StoryObj } from "@storybook/react";
import { TipBlock } from "./TipBlock";

const meta = {
  title: "Shared/TipBlock",
  component: TipBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TipBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: [
      "Процент читателей, совершивших любое из действий (пересылка, комментарий, реакция). Считается как отношение количества всех взаимодействий читателей к количеству просмотров публикации.",
    ],
  },
};
