import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MyProjectsPage } from "./MyProjectsPage";
import { Footer, Header } from "@/widgets";

const FullMyProjectsPage: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <MyProjectsPage />
      <Footer />
    </>
  );
};

const meta = {
  title: "Pages/MyProjectsPage",
  component: FullMyProjectsPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof MyProjectsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
