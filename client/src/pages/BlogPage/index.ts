import { lazy } from "react";

export const BlogPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/BlogPage").then(({ BlogPage }) => ({
    default: BlogPage,
  }))
);
