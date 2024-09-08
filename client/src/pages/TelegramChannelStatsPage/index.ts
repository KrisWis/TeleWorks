import { lazy } from "react";

export const TelegramChannelStatsPage: React.LazyExoticComponent<React.FC> =
  lazy(() =>
    import("./ui/TelegramChannelStatsPage").then(
      ({ TelegramChannelStatsPage }) => ({
        default: TelegramChannelStatsPage,
      })
    )
  );
