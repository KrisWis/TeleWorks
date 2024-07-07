import type { Meta, StoryObj } from "@storybook/react";
import { MainPage_button_red } from "./MainPage_button_red";
import HowItWorksStyles from "../../../../entities/MainPage__entities/HowItWorks__entities/HowItWorks__item/ui/HowItWorks__item.module.scss";
import headerStyles from "../../../../widgets/Header/ui/Header.module.scss";
import advancementStyles from "../../../../widgets/MainPage__widgets/Advancement/ui/Advancement.module.scss";
import BuyPlacementStyles from "../../../../widgets/MainPage__widgets/Buy_placement/ui/Buy_placement.module.scss";
import SupportStyles from "../../../../widgets/MainPage__widgets/SupportService/ui/SupportService.module.scss";

const meta = {
  title: "shared/MainPageButtonRed",
  component: MainPage_button_red,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MainPage_button_red>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonIsHovered: Story = {
  args: {
    to: "/",
    text: "Клик",
    hover: true,
  },
};

export const CreateAccount: Story = {
  args: {
    to: "/",
    text: "Создать аккаунт",
    className: HowItWorksStyles.howItWorks__item__button,
  },
};

export const Login: Story = {
  args: {
    to: "/",
    text: "Войти",
    className: headerStyles.header__item__login,
  },
};

export const Start: Story = {
  args: {
    to: "/",
    text: "Начать",
    className: advancementStyles.advancement__buttons__start,
  },
};

export const Buy_Placement: Story = {
  args: {
    to: "/",
    text: "Купить размещение",
    className: BuyPlacementStyles.Buy_placement__buy,
  },
};

export const Support: Story = {
  args: {
    to: "/",
    text: "Тех поддержка",
    className: SupportStyles.supportService__support__button,
  },
};
