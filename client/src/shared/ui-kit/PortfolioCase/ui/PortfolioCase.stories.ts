import type { Meta, StoryObj } from "@storybook/react";
import { PortfolioCase } from "./PortfolioCase";

const meta = {
  title: "Shared/PortfolioCase",
  component: PortfolioCase,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PortfolioCase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgURL: `/global/images/portfolioCase__example_img.png`,
    caseName: "Название кейса 1",
    views: 100,
  },
};
