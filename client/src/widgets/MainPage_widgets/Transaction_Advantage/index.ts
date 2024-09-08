import { lazy } from "react";

export const Transaction_Advantage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/Transaction_Advantage").then(({ Transaction_Advantage }) => ({
      default: Transaction_Advantage,
    }))
);
