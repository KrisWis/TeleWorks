import type { Meta, StoryObj } from "@storybook/react";
import { FAQ_accordion } from "./FAQ_accordion";
import { turnkeyWebsitesPageFAQ_items } from "@/widgets/TurnkeyWebsitesPage_widgets/TurnkeyWebsitesPageFAQ";

const meta = {
  title: "Global Widgets/FAQ_accordion",
  component: FAQ_accordion,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FAQ_accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    FAQ_accordion_items: turnkeyWebsitesPageFAQ_items,
  },
};
