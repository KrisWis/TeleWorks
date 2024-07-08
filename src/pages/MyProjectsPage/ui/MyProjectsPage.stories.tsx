import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MyProjectsPage } from "./MyProjectsPage";
import { Header } from "@/widgets";

const MyProjectsPageWithHeader: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <MyProjectsPage />
    </>
  );
};

const meta = {
  title: "Pages/MyProjectsPage",
  component: MyProjectsPageWithHeader,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof MyProjectsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
