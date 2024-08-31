import { lazy } from "react";
import { ProjectReviewsProps } from "./model/ProjectReviews_types";

export const ProjectReviews: React.LazyExoticComponent<
  React.FC<ProjectReviewsProps>
> = lazy(() =>
  import("./ui/ProjectReviews").then(({ ProjectReviews }) => ({
    default: ProjectReviews,
  }))
);
