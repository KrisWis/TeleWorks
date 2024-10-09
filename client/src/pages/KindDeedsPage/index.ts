import { lazy } from "react";

export const KindDeedsPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/KindDeedsPage").then(({ KindDeedsPage }) => ({
    default: KindDeedsPage,
  }))
);
