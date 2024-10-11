import { lazy } from "react";

export const KindDeedsChangeLives: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/KindDeedsChangeLives").then(({ KindDeedsChangeLives }) => ({
      default: KindDeedsChangeLives,
    }))
);
