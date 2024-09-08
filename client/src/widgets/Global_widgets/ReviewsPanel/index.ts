import { lazy } from "react";
import { ReviewsPanelProps } from "./model/ReviewsPanel_types";

export const ReviewsPanel: React.LazyExoticComponent<
  React.FC<ReviewsPanelProps>
> = lazy(() =>
  import("./ui/ReviewsPanel").then(({ ReviewsPanel }) => ({
    default: ReviewsPanel,
  }))
);
