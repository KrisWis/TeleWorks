import { lazy } from "react";
import { ReviewsPanelProps } from "./Global_widgets/ReviewsPanel/model/ReviewsPanel_types";
import { ReviewsProps } from "./ProfilePage_widgets/Reviews/model/Reviews_types";
import { ProjectReviewsProps } from "./ProjectPage_widgets/ProjectReviews/model/ProjectReviews_types";
import { ItemsSliderProps } from "./Global_widgets/ItemsSlider/model/ItemsSlider_types";

/* ГЛОБАЛЬНЫЕ КОМПОНЕНТЫ */
export * from "./Global_widgets/Header/ui/Header";

export const Footer: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./Global_widgets/Footer/ui/Footer").then(({ Footer }) => ({
    default: Footer,
  }))
);

export const ReceiveNotifications: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./Global_widgets/ReceiveNotifications/ui/ReceiveNotifications"
    ).then(({ ReceiveNotifications }) => ({
      default: ReceiveNotifications,
    }))
);

export const ReviewsPanel: React.LazyExoticComponent<
  React.FC<ReviewsPanelProps>
> = lazy(() =>
  import("./Global_widgets/ReviewsPanel/ui/ReviewsPanel").then(
    ({ ReviewsPanel }) => ({ default: ReviewsPanel })
  )
);

export const ItemsSlider: React.LazyExoticComponent<
  React.FC<ItemsSliderProps>
> = lazy(() =>
  import("./Global_widgets/ItemsSlider/ui/ItemsSlider").then(
    ({ ItemsSlider }) => ({ default: ItemsSlider })
  )
);

/* ГЛАВНАЯ СТРАНИЦА */
export * from "./MainPage_widgets/Advancement/ui/Advancement";

export * from "./MainPage_widgets/Buy_placement/ui/Buy_placement";

export * from "./MainPage_widgets/WeAreTrusted/ui/WeAreTrusted";

export const HowItWorks: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage_widgets/HowItWorks/ui/HowItWorks").then(
    ({ HowItWorks }) => ({
      default: HowItWorks,
    })
  )
);

export const MeetAdvantages: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage_widgets/MeetAdvantages/ui/MeetAdvantages").then(
    ({ MeetAdvantages }) => ({
      default: MeetAdvantages,
    })
  )
);

export const Platform_Privileges: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./MainPage_widgets/Platform_Privileges/ui/Platform_Privileges"
    ).then(({ Platform_Privileges }) => ({
      default: Platform_Privileges,
    }))
);

export const Additional_Services: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./MainPage_widgets/Additional_Services/ui/Additional_Services"
    ).then(({ Additional_Services }) => ({
      default: Additional_Services,
    }))
);

export const Ads: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage_widgets/Ads/ui/Ads").then(({ Ads }) => ({
    default: Ads,
  }))
);

export const Guarantor_Services: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./MainPage_widgets/Guarantor_Services/ui/Guarantor_Services").then(
      ({ Guarantor_Services }) => ({
        default: Guarantor_Services,
      })
    )
);

export const Job_Risks: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage_widgets/Job_Risks/ui/Job_Risks").then(({ Job_Risks }) => ({
    default: Job_Risks,
  }))
);

export const Transaction_Advantage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import(
      "./MainPage_widgets/Transaction_Advantage/ui/Transaction_Advantage"
    ).then(({ Transaction_Advantage }) => ({
      default: Transaction_Advantage,
    }))
);

export const SupportService: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage_widgets/SupportService/ui/SupportService").then(
    ({ SupportService }) => ({
      default: SupportService,
    })
  )
);

export * from "./MainPage_widgets/MainPageFooter/ui/MainPageFooter";

/* СТРАНИЦА ПРОФИЛЯ */

export * from "./ProfilePage_widgets/Stats/ui/Stats";

export const Buy_ads: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage_widgets/Buy_ads/ui/Buy_ads").then(({ Buy_ads }) => ({
    default: Buy_ads,
  }))
);

export const Channel_stats: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage_widgets/Channel_stats/ui/Channel_stats").then(
    ({ Channel_stats }) => ({
      default: Channel_stats,
    })
  )
);

export const Reviews: React.LazyExoticComponent<React.FC<ReviewsProps>> = lazy(
  () =>
    import("./ProfilePage_widgets/Reviews/ui/Reviews").then(({ Reviews }) => ({
      default: Reviews,
    }))
);

/* СТРАНИЦА "МОИ ПРОЕКТЫ" */
export * from "./MyProjects_widgets/MyProjects/ui/MyProjects";

/* СТРАНИЦА "КАТАЛОГ" */
export * from "./CatalogPage_widgets/Catalog/ui/Catalog";

/* СТРАНИЦА "ВНУТРЕННЯЯ" */
export * from "./InternalPage_widgets/MainSection/ui/MainSection";
export * from "./InternalPage_widgets/ChannelsExamples/ui/ChannelsExamples";

export const OpenAdvantages: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./InternalPage_widgets/OpenAdvantages/ui/OpenAdvantages").then(
    ({ OpenAdvantages }) => ({ default: OpenAdvantages })
  )
);

export const EarnInSteps: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./InternalPage_widgets/EarnInSteps/ui/EarnInSteps").then(
    ({ EarnInSteps }) => ({ default: EarnInSteps })
  )
);

export const MarketPlace: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./InternalPage_widgets/MarketPlace/ui/MarketPlace").then(
    ({ MarketPlace }) => ({ default: MarketPlace })
  )
);

export const FAQ: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./InternalPage_widgets/FAQ/ui/FAQ").then(({ FAQ }) => ({
    default: FAQ,
  }))
);

/* СТРАНИЦА "УСЛУГИ СПЕЦИАЛИСТОВ" */
export * from "./SpecialistServicesPage_widgets/SpecialistServices/ui/SpecialistServices";

/* СТРАНИЦА "ОТКРЫТЫЙ ПРОЕКТ" */
export * from "./ProjectPage_widgets/ProjectInfo/ui/ProjectInfo";

export const ProjectReviews: React.LazyExoticComponent<
  React.FC<ProjectReviewsProps>
> = lazy(() =>
  import("./ProjectPage_widgets/ProjectReviews/ui/ProjectReviews").then(
    ({ ProjectReviews }) => ({
      default: ProjectReviews,
    })
  )
);
