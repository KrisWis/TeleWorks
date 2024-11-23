import { lazy } from "react";

export const ProfilePage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/ProfilePage").then(({ ProfilePage }) => ({
    default: ProfilePage,
  })),
);
