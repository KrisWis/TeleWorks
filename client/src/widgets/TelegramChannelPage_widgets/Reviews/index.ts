import { lazy } from "react";
import { ReviewsProps } from "./model/Reviews_types";

export const Reviews: React.LazyExoticComponent<React.FC<ReviewsProps>> = lazy(
  () =>
    import("./ui/Reviews").then(({ Reviews }) => ({
      default: Reviews,
    })),
);
