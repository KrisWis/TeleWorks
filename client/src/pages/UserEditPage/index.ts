import { lazy } from "react";

export const UserEditPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/UserEditPage").then(({ UserEditPage }) => ({
    default: UserEditPage,
  })),
);
