import { lazy } from "react";

export const BlogCreatePage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/BlogCreatePage").then(({ BlogCreatePage }) => ({
    default: BlogCreatePage,
  }))
);
