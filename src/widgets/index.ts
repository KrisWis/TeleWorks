import { lazy } from "react";

/* ГЛОБАЛЬНЫЕ КОМПОНЕНТЫ */
export * from "./Header/ui/Header";

export const Footer: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Footer/ui/Footer").then(({ Footer }) => ({
    default: Footer,
  }))
);

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

export const Additional_Services: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./MainPage__widgets/Additional_Services/ui/Additional_Services"
    ).then(({ Additional_Services }) => ({
      default: Additional_Services,
    }))
);

export const Ads: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage__widgets/Ads/ui/Ads").then(({ Ads }) => ({
    default: Ads,
  }))
);

export const Guarantor_Services: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./MainPage__widgets/Guarantor_Services/ui/Guarantor_Services").then(
      ({ Guarantor_Services }) => ({
        default: Guarantor_Services,
      })
    )
);

export const Job_Risks: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage__widgets/Job_Risks/ui/Job_Risks").then(
    ({ Job_Risks }) => ({
      default: Job_Risks,
    })
  )
);

export const Transaction_Advantage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./MainPage__widgets/Transaction_Advantage/ui/Transaction_Advantage"
    ).then(({ Transaction_Advantage }) => ({
      default: Transaction_Advantage,
    }))
);

export const SupportService: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage__widgets/SupportService/ui/SupportService").then(
    ({ SupportService }) => ({
      default: SupportService,
    })
  )
);

export * from "./MainPage__widgets/MainPageFooter/ui/MainPageFooter";

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

/* СТРАНИЦА "МОИ ПРОЕКТЫ" */
export * from "./MyProjects__widgets/MyProjects/ui/MyProjects";
export * from "./ReceiveNotifications/ui/ReceiveNotifications";

/* СТРАНИЦА "КАТАЛОГ" */
export * from "./Catalog__widgets/Catalog/ui/Catalog";
