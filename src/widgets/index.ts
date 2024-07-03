import { lazy } from "react";

/* ГЛОБАЛЬНЫЕ КОМПОНЕНТЫ */
export * from "./Header/ui/Header";

/* ГЛАВНАЯ СТРАНИЦА */
export * from "./MainPage__widgets/Advancement/ui/Advancement";

/* СТРАНИЦА ПРОФИЛЯ */

export * from "./ProfilePage__widgets/Profile/ui/Profile";

export * from "./ProfilePage__widgets/Stats/ui/Stats";

export const Buy_ads: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage__widgets/Buy_ads/ui/Buy_ads").then(({ Buy_ads }) => ({
    default: Buy_ads,
  }))
);

export const Channel_stats: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage__widgets/Channel_stats/ui/Channel_stats").then(
    ({ Channel_stats }) => ({
      default: Channel_stats,
    })
  )
);

export const Channel_reviews: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage__widgets/Channel_reviews/ui/Channel_reviews").then(
    ({ Channel_reviews }) => ({ default: Channel_reviews })
  )
);

export const Reviews: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage__widgets/Reviews/ui/Reviews").then(({ Reviews }) => ({
    default: Reviews,
  }))
);

export const Similar_channels: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage__widgets/Similar_channels/ui/Similar_channels").then(
    ({ Similar_channels }) => ({ default: Similar_channels })
  )
);
