import { ReactNode } from "react";
import FamousPostsSVG from "@/shared/assets/icons/BlogPage/FamousPostsSVG.svg?react";
import FreshPostsSVG from "@/shared/assets/icons/BlogPage/FreshPostsSVG.svg?react";
import SavedPostsSVG from "@/shared/assets/icons/BlogPage/SavedPostsSVG.svg?react";
import ChannelBuyerSVG from "@/shared/assets/icons/BlogPage/ChannelBuyerSVG.svg?react";
import ChannelOwnerSVG from "@/shared/assets/icons/BlogPage/ChannelOwnerSVG.svg?react";
import AboutProjectSVG from "@/shared/assets/icons/BlogPage/AboutProjectSVG.svg?react";
import ExplorationsSVG from "@/shared/assets/icons/BlogPage/ExplorationsSVG.svg?react";
import FreelanceSVG from "@/shared/assets/icons/BlogPage/FreelanceSVG.svg?react";
import OtherSVG from "@/shared/assets/icons/BlogPage/OtherSVG.svg?react";
import RulesSVG from "@/shared/assets/icons/BlogPage/RulesSVG.svg?react";
import UpdatesSVG from "@/shared/assets/icons/BlogPage/UpdatesSVG.svg?react";

export interface BlogFilterCategory {
  icon: ReactNode;
  title: string;
}

export const blogFilterCategories: BlogFilterCategory[] = [
  {
    icon: <FamousPostsSVG />,
    title: "Популярное",
  },

  {
    icon: <FreshPostsSVG />,
    title: "Свежее",
  },

  {
    icon: <SavedPostsSVG />,
    title: "Сохранённое",
  },
];

export const blogFilterCategoryTitles = blogFilterCategories.map(
  (category) => category.title,
);

export const blogFilterThemes: BlogFilterCategory[] = [
  {
    icon: <ChannelOwnerSVG />,
    title: "Владелец канала",
  },

  {
    icon: <ChannelBuyerSVG />,
    title: "Покупатель канала",
  },

  {
    icon: <FreelanceSVG />,
    title: "Фриланс",
  },

  {
    icon: <UpdatesSVG />,
    title: "Обновления",
  },

  {
    icon: <ExplorationsSVG />,
    title: "Исследования",
  },

  {
    icon: <OtherSVG />,
    title: "Другое",
  },
];

export const blogFilterThemesTitles = blogFilterThemes.map(
  (category) => category.title,
);

export const blogFilterTeleworks: BlogFilterCategory[] = [
  {
    icon: <AboutProjectSVG />,
    title: "О проекте",
  },

  {
    icon: <RulesSVG />,
    title: "Правила",
  },
];

export const blogFilterTeleworksTitles = blogFilterTeleworks.map(
  (category) => category.title,
);

export type BlogFilterAllCategories =
  | keyof typeof blogFilterCategoryTitles
  | keyof typeof blogFilterThemesTitles
  | keyof typeof blogFilterTeleworksTitles;

export interface BlogFilterProps {
  selectedCategory: BlogFilterAllCategories;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<BlogFilterAllCategories>
  >;
  canReturn?: boolean;
}
