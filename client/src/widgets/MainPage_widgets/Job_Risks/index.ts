import { lazy } from "react";

export const Job_Risks: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/Job_Risks").then(({ Job_Risks }) => ({
    default: Job_Risks,
  })),
);
