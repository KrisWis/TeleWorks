import { lazy } from "react";

export const EarnInSteps: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/EarnInSteps").then(({ EarnInSteps }) => ({
    default: EarnInSteps,
  }))
);
