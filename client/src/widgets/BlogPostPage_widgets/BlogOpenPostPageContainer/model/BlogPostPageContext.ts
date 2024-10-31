import { BlogPostCommentInterface } from "@/widgets/BlogPostPage_widgets/BlogOpenPostComments";
import { createContext, useState } from "react";

export interface BlogPostPageContext {
  answeredComment: BlogPostCommentInterface | null;
  setAnsweredComment: React.Dispatch<
    React.SetStateAction<BlogPostCommentInterface | null>
  >;
}

export const BlogPostPageContext = createContext<BlogPostPageContext>({
  answeredComment: null,
  setAnsweredComment: useState,
});
