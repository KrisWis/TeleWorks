import { lazy } from "react";

export const TelegramChannelPage: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/TelegramChannelPage").then(({ TelegramChannelPage }) => ({
      default: TelegramChannelPage,
    })),
);
