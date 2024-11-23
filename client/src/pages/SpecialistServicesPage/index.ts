import { lazy } from "react";

export const SpecialistServicesPage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/SpecialistServicesPage").then(
      ({ SpecialistServicesPage }) => ({
        default: SpecialistServicesPage,
      }),
    ),
);
