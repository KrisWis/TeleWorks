import { lazy } from "react";

export const BlogPostPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/BlogPostPage").then(({ BlogPostPage }) => ({
    default: BlogPostPage,
  }))
);
