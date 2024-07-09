import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CatalogPage } from "./CatalogPage";
import { Footer, Header } from "@/widgets";

const FullCatalogPage: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <CatalogPage />
      <Footer />
    </>
  );
};

const meta = {
  title: "Pages/CatalogPage",
  component: FullCatalogPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof CatalogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
