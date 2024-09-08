import { lazy } from "react";

export const OpenAdvantages: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/OpenAdvantages").then(({ OpenAdvantages }) => ({
    default: OpenAdvantages,
  }))
);
