import { lazy } from "react";

export const Additional_Services: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/Additional_Services").then(({ Additional_Services }) => ({
      default: Additional_Services,
    })),
);
