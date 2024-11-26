import { lazy } from "react";

export const Channel_stats: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/Channel_stats").then(({ Channel_stats }) => ({
    default: Channel_stats,
  })),
);
