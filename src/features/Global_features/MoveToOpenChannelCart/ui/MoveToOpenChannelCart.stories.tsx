import type { Meta, StoryObj } from "@storybook/react";
import { MoveToOpenChannelCart } from "./MoveToOpenChannelCart";
import { useState } from "react";
import { MoveToOpenChannelCartReducer } from "../model/slice/MoveToOpenChannelCartSlice";
import { DynamicModuleLoader } from "@/shared/ui-kit/DynamicModuleLoader/DynamicModuleLoader";

const MoveToOpenChannelCartWithReducer: React.FC = () => {
  const [MoveToOpenChannelCartIsAppear, setMoveToOpenChannelCartIsAppear] =
    useState<boolean>(false);

  return (
    <DynamicModuleLoader reducers={{ MoveToOpenChannelCartReducer }}>
      <MoveToOpenChannelCart
        MoveToOpenChannelCartIsAppear={MoveToOpenChannelCartIsAppear}
        setMoveToOpenChannelCartIsAppear={setMoveToOpenChannelCartIsAppear}
      />
    </DynamicModuleLoader>
  );
};

const meta = {
  title: "features/MoveToOpenChannelCart",
  component: MoveToOpenChannelCartWithReducer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MoveToOpenChannelCartWithReducer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
