import { lazy } from "react";

export const KindDeedsCreateRequestPage: React.LazyExoticComponent<React.FC> =
  lazy(() =>
    import("./ui/KindDeedsCreateRequestPage").then(
      ({ KindDeedsCreateRequestPage }) => ({
        default: KindDeedsCreateRequestPage,
      })
    )
  );
