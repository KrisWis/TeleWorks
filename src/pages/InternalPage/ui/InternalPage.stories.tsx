import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InternalPage } from "./InternalPage";
import { Footer, Header, ReceiveNotifications } from "@/widgets";

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
