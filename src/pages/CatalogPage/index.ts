import { lazy } from "react";

export const CatalogPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/CatalogPage").then(({ CatalogPage }) => ({
    default: CatalogPage,
  }))
);
