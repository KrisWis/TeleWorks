import { lazy } from "react";

export const ErrorPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/ErrorPage").then(({ ErrorPage }) => ({
    default: ErrorPage,
  })),
);
