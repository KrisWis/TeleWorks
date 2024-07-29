import { lazy } from "react";
import { Reviews__itemProps } from "./Reviews__item/model/Reviews__item_types";

export const ReviewsItem: React.LazyExoticComponent<
  React.FC<Reviews__itemProps>
> = lazy(() =>
  import("./Reviews__item/ui/Reviews__item").then(({ Reviews__item }) => ({
    default: Reviews__item,
  }))
);

export * from "./ProjectItem/ui/ProjectItem";
