import { lazy } from "react";

export const MeetAdvantages: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/MeetAdvantages").then(({ MeetAdvantages }) => ({
    default: MeetAdvantages,
  })),
);
