import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MyProjectsPage } from "./MyProjectsPage";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";

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
