import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { TelegramChannelStats } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";
import { useEffect, useState } from "react";
import { memo } from "react";
import { telegramChannelStatsData } from "../model/TelegramChannelStatsPage_data";
import { TelegramChannelStatsAllStatistics } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";
import { TelegramChannelStatsPageContext } from "../model/TelegramChannelStatsPageContext";
import {
  TelegramChannelStatsCategories,
  telegramChannelStatsCategories,
} from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsCategories";

export const TelegramChannelStatsPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document.querySelector("html")!.classList.add("TelegramChannelStatsPage");
    }, []);

    // Выбор категории
    const [selectedCategory, setSelectedCategory] =
      useState<TelegramChannelStatsCategories>(
        telegramChannelStatsCategories[0].title
      );

    return (
      <TelegramChannelStatsPageContext.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <main className="Page TelegramChannelStatsPage__main">
          <div className="padding">
            <TelegramChannelStats {...telegramChannelStatsData} />
            <TelegramChannelStatsAllStatistics />
          </div>
        </main>
      </TelegramChannelStatsPageContext.Provider>
    );
  }
);
