import { Reviews__itemProps } from "@/shared/types/user";
import { lazy } from "react";

export const Reviews__item: React.LazyExoticComponent<
  React.FC<Reviews__itemProps>
> = lazy(() =>
  import("./ui/Reviews__item").then(({ Reviews__item }) => ({
    default: Reviews__item,
  }))
);
