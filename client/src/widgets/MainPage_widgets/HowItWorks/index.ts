import { lazy } from "react";

export const HowItWorks: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/HowItWorks").then(({ HowItWorks }) => ({
    default: HowItWorks,
  }))
);
