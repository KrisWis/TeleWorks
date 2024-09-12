import { ReactNode } from "react";
import FamousPostsSVG from "@/shared/assets/icons/BlogPage/FamousPostsSVG.svg?react";
import FreshPostsSVG from "@/shared/assets/icons/BlogPage/FreshPostsSVG.svg?react";
import SavedPostsSVG from "@/shared/assets/icons/BlogPage/SavedPostsSVG.svg?react";

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
  (category) => category.title
);

export const BlogFilterThemes: string[] = [
  "Владелец канала",
  "Покупатель канала",
  "Фриланс",
  "Обновления",
  "Исследования",
  "Другое",
];

export const BlogFilterTeleworks: string[] = ["О проекте", "Правила"];

export type BlogFilterAllCategories =
  | keyof typeof blogFilterCategoryTitles
  | keyof typeof BlogFilterThemes
  | keyof typeof BlogFilterTeleworks;

export interface BlogFilterProps {
  selectedCategory: BlogFilterAllCategories;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<BlogFilterAllCategories>
  >;
}
