import { lazy } from "react";

export const Footer: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/Footer").then(({ Footer }) => ({
    default: Footer,
  })),
);
