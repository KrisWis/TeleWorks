import { createContext, useState } from "react";

export type BlogCreatePagePostTypes = "Пост" | "Обсуждения" | "Вопрос";

export const blogCreatePagePostTypes: BlogCreatePagePostTypes[] = [
  "Пост",
  "Обсуждения",
  "Вопрос",
];

export type CreatePostProgressSteps = "Создание заказа" | "Заказ создан";

export interface BlogCreatePageContext {
  selectedPostType: BlogCreatePagePostTypes;
  setSelectedPostType: React.Dispatch<
    React.SetStateAction<BlogCreatePagePostTypes>
  >;
  CreatePostActiveStep: CreatePostProgressSteps;
  setCreatePostActiveStep: React.Dispatch<
    React.SetStateAction<CreatePostProgressSteps>
  >;
}

export const BlogCreatePageContext = createContext<BlogCreatePageContext>({
  selectedPostType: "Пост",
  setSelectedPostType: useState,
  CreatePostActiveStep: "Создание заказа",
  setCreatePostActiveStep: useState,
});
