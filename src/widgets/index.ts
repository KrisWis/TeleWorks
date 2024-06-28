import { lazy } from "react";

export * from "./Profile/ui/Profile";

export * from "./Stats/ui/Stats";

export const Buy_ads: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Buy_ads/ui/Buy_ads").then(({ Buy_ads }) => ({ default: Buy_ads }))
);

export const Channel_stats: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Channel_stats/ui/Channel_stats").then(({ Channel_stats }) => ({
    default: Channel_stats,
  }))
);

export const Channel_reviews: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Channel_reviews/ui/Channel_reviews").then(
    ({ Channel_reviews }) => ({ default: Channel_reviews })
  )
);

export const Reviews: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Reviews/ui/Reviews").then(({ Reviews }) => ({ default: Reviews }))
);

export const Similar_channels: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Similar_channels/ui/Similar_channels").then(
    ({ Similar_channels }) => ({ default: Similar_channels })
  )
);
