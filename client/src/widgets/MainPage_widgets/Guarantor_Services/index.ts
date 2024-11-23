import { lazy } from "react";

export const Guarantor_Services: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/Guarantor_Services").then(({ Guarantor_Services }) => ({
      default: Guarantor_Services,
    })),
);
