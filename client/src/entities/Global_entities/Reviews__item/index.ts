import { lazy } from "react";
import { Reviews__itemProps } from "./model/Reviews__item_types";

export const Reviews__item: React.LazyExoticComponent<
  React.FC<Reviews__itemProps>
> = lazy(() =>
  import("./ui/Reviews__item").then(({ Reviews__item }) => ({
    default: Reviews__item,
  }))
);

export type { Reviews__itemProps } from "./model/Reviews__item_types";
