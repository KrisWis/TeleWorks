import { lazy } from "react";

/* ГЛОБАЛЬНЫЕ КОМПОНЕНТЫ */
export * from "./Header/ui/Header";

/* ГЛАВНАЯ СТРАНИЦА */
export * from "./MainPage__widgets/Advancement/ui/Advancement";

export * from "./MainPage__widgets/Buy_placement/ui/Buy_placement";

export * from "./MainPage__widgets/WeAreTrusted/ui/WeAreTrusted";

export const HowItWorks: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage__widgets/HowItWorks/ui/HowItWorks").then(
    ({ HowItWorks }) => ({
      default: HowItWorks,
    })
  )
);

export const MeetAdvantages: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage__widgets/MeetAdvantages/ui/MeetAdvantages").then(
    ({ MeetAdvantages }) => ({
      default: MeetAdvantages,
    })
  )
);

export const Platform_Privileges: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./MainPage__widgets/Platform_Privileges/ui/Platform_Privileges"
    ).then(({ Platform_Privileges }) => ({
      default: Platform_Privileges,
    }))
);

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
