import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MainPage } from "./MainPage";
import { Header } from "@/widgets";

const MainPageWithHeader: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
};

const meta = {
  title: "Pages/MainPage",
  component: MainPageWithHeader,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
