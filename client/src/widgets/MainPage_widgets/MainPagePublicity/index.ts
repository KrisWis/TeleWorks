import { lazy } from "react";

export const MainPagePublicity: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/MainPagePublicity").then(({ MainPagePublicity }) => ({
    default: MainPagePublicity,
  }))
);
