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
