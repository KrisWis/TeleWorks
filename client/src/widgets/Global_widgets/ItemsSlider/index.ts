import { lazy } from "react";
import { ItemsSliderProps } from "./model/ItemsSlider_types";

export const ItemsSlider: React.LazyExoticComponent<
  React.FC<ItemsSliderProps>
> = lazy(() =>
  import("./ui/ItemsSlider").then(({ ItemsSlider }) => ({
    default: ItemsSlider,
  })),
);
