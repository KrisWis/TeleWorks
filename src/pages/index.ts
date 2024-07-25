import { lazy } from "react";

export const ProfilePage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProfilePage/ui/ProfilePage").then(({ ProfilePage }) => ({
    default: ProfilePage,
  }))
);

export const MainPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MainPage/ui/MainPage").then(({ MainPage }) => ({
    default: MainPage,
  }))
);

export const MyProjectsPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./MyProjectsPage/ui/MyProjectsPage").then(({ MyProjectsPage }) => ({
    default: MyProjectsPage,
  }))
);

export const CatalogPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./CatalogPage/ui/CatalogPage").then(({ CatalogPage }) => ({
    default: CatalogPage,
  }))
);

export const InternalPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./InternalPage/ui/InternalPage").then(({ InternalPage }) => ({
    default: InternalPage,
  }))
);

export const SpecialistServicesPage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./SpecialistServicesPage/ui/SpecialistServicesPage").then(
      ({ SpecialistServicesPage }) => ({
        default: SpecialistServicesPage,
      })
    )
);

export const ProjectPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ProjectPage/ui/ProjectPage").then(({ ProjectPage }) => ({
    default: ProjectPage,
  }))
);
