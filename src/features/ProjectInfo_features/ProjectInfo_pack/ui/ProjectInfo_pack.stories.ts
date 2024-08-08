import type { Meta, StoryObj } from "@storybook/react";
import { ProjectInfo_pack } from "./ProjectInfo_pack";
import { ProjectInfo_packs } from "@/pages/ProjectPage/model/ProjectPage_data";

const meta = {
  title: "features/ProjectInfo_pack",
  component: ProjectInfo_pack,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProjectInfo_pack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    packs: ProjectInfo_packs,
  },
};
