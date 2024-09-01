import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { TelegramChannelStats } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";
import { useEffect } from "react";
import { memo } from "react";
import { telegramChannelStatsData } from "../model/TelegramChannelStatsPage_data";
import { TelegramChannelStatsAllStatistics } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";

export const TelegramChannelStatsPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document.querySelector("html")!.classList.add("TelegramChannelStatsPage");
    }, []);

    return (
      <main className="Page TelegramChannelStatsPage__main">
        <div className="padding">
          <TelegramChannelStats {...telegramChannelStatsData} />
          <TelegramChannelStatsAllStatistics />
        </div>
      </main>
    );
  }
);
