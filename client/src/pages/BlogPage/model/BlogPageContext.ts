import {
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/features/Global_features/BlogFilter";
import { createContext, useState } from "react";

export interface BlogPageContext {
  blogFilterSelectedCategory: BlogFilterAllCategories;
  setBlogFilterSelectedCategory: React.Dispatch<
    React.SetStateAction<BlogFilterAllCategories>
  >;
}

export const BlogPageContext = createContext<BlogPageContext>({
  blogFilterSelectedCategory:
    blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles,
  setBlogFilterSelectedCategory: useState,
});
