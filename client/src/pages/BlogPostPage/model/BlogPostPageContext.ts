import {
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/widgets/Global_widgets/BlogFilter";
import { createContext, useState } from "react";

export interface BlogPostPageContext {
  blogFilterSelectedCategory: BlogFilterAllCategories;
  setBlogFilterSelectedCategory: React.Dispatch<
    React.SetStateAction<BlogFilterAllCategories>
  >;
}

export const BlogPostPageContext = createContext<BlogPostPageContext>({
  blogFilterSelectedCategory:
    blogFilterCategoryTitles[0] as keyof typeof blogFilterCategoryTitles,
  setBlogFilterSelectedCategory: useState,
});
