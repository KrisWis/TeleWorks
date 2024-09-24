import { createContext, useState } from "react";

export type BlogCreatePagePostTypes = "Пост" | "Обсуждения" | "Вопрос";

export const blogCreatePagePostTypes: BlogCreatePagePostTypes[] = [
  "Пост",
  "Обсуждения",
  "Вопрос",
];

export interface BlogCreatePageContext {
  selectedPostType: BlogCreatePagePostTypes;
  setSelectedPostType: React.Dispatch<
    React.SetStateAction<BlogCreatePagePostTypes>
  >;
}

export const BlogCreatePageContext = createContext<BlogCreatePageContext>({
  selectedPostType: "Пост",
  setSelectedPostType: useState,
});
