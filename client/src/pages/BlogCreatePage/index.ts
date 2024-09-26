import { lazy } from "react";

export const BlogCreatePage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/BlogCreatePage").then(({ BlogCreatePage }) => ({
    default: BlogCreatePage,
  }))
);

export { BlogCreatePageContext } from "./model/BlogCreatePageContext";
export type {
  BlogCreatePagePostTypes,
  CreatePostProgressSteps,
} from "./model/BlogCreatePageContext";

export { useBlogCreatePageLocalStorage } from "./model/useBlogCreatePageLocalStorage";
