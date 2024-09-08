import { lazy } from "react";

export const TurnkeyWebsitesPage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/TurnkeyWebsitesPage").then(({ TurnkeyWebsitesPage }) => ({
      default: TurnkeyWebsitesPage,
    }))
);
