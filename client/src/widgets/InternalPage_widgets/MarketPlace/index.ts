import { lazy } from "react";

export const MarketPlace: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/MarketPlace").then(({ MarketPlace }) => ({
    default: MarketPlace,
  })),
);
