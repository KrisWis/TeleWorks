import { lazy } from "react";

export const TelegramChannelStatsPageLazy: React.LazyExoticComponent<React.FC> =
  lazy(() =>
    import("./ui/TelegramChannelStatsPage").then(
      ({ TelegramChannelStatsPage }) => ({
        default: TelegramChannelStatsPage,
      })
    )
  );

export * from "./ui/TelegramChannelStatsPage";
