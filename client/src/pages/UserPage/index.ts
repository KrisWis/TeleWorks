import { lazy } from "react";

export const UserPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/UserPage").then(({ UserPage }) => ({
    default: UserPage,
  })),
);
