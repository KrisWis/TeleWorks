import { lazy } from "react";
import type { ReviewsPanelProps } from "@/shared/types/user";

export const ReviewsPanel: React.LazyExoticComponent<
  React.FC<ReviewsPanelProps>
> = lazy(() =>
  import("./ui/ReviewsPanel").then(({ ReviewsPanel }) => ({
    default: ReviewsPanel,
  }))
);
