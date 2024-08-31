import { lazy } from "react";

export const Buy_ads: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/Buy_ads").then(({ Buy_ads }) => ({
    default: Buy_ads,
  }))
);
