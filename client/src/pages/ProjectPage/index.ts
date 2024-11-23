import { lazy } from "react";

export const ProjectPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/ProjectPage").then(({ ProjectPage }) => ({
    default: ProjectPage,
  })),
);
