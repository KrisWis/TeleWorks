import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InternalPage } from "./InternalPage";
import { ReceiveNotifications } from "@/widgets/Global_widgets/ReceiveNotifications";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";

const FullInternalPage: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <InternalPage />
      <ReceiveNotifications />
      <Footer />
    </>
  );
};

const meta = {
  title: "Pages/InternalPage",
  component: FullInternalPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof InternalPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
