import { lazy } from "react";

export const FAQ: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/FAQ").then(({ FAQ }) => ({
    default: FAQ,
  })),
);
