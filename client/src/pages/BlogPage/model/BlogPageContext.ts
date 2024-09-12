import {
  BlogFilterAllCategories,
  blogFilterCategoryTitles,
} from "@/widgets/Global_widgets/BlogFilter";
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
