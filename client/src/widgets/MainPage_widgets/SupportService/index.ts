import { lazy } from "react";

export const SupportService: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/SupportService").then(({ SupportService }) => ({
    default: SupportService,
  }))
);
