import { lazy } from "react";

export const MyProjectsPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/MyProjectsPage").then(({ MyProjectsPage }) => ({
    default: MyProjectsPage,
  })),
);
