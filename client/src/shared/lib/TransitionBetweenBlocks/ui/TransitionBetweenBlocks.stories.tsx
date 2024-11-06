import type { Meta, StoryObj } from "@storybook/react";
import { TransitionBetweenBlocks } from "./TransitionBetweenBlocks";
import { transitionDurationMedium } from "@/shared/const/global";
import { useState } from "react";

const TransitionBetweenBlocksComponent: React.FC = (): JSX.Element => {
  const [blockIndex, setBlockIndex] = useState<number>(0);

  setTimeout(() => {
    setBlockIndex(1);
  }, transitionDurationMedium);

  return (
    <TransitionBetweenBlocks
      blocks={[
        {
          component: <>0</>,
          condition: blockIndex == 0,
          id: 0,
        },
        {
          component: <>1</>,
          condition: blockIndex == 1,
          id: 1,
        },
      ]}
      transitionDuration={transitionDurationMedium}
      defaultIndex={0}
    />
  );
};

const meta = {
  title: "Shared/TransitionBetweenBlocks",
  component: TransitionBetweenBlocksComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TransitionBetweenBlocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
