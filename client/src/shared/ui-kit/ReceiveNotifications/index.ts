import { lazy } from "react";

export const ReceiveNotifications: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/ReceiveNotifications").then(({ ReceiveNotifications }) => ({
      default: ReceiveNotifications,
    }))
);
