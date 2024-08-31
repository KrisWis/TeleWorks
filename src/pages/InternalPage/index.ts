import { lazy } from "react";

export const InternalPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/InternalPage").then(({ InternalPage }) => ({
    default: InternalPage,
  }))
);
