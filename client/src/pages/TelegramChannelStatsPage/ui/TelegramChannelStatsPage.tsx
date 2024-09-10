import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { TelegramChannelStats } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";
import { useEffect, useState } from "react";
import { memo } from "react";
import { TelegramChannelStatsAllStatistics } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";
import { TelegramChannelStatsPageContext } from "../model/context/TelegramChannelStatsPageContext";
import { useParams } from "react-router-dom";

export const TelegramChannelStatsPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document.querySelector("html")!.classList.add("TelegramChannelStatsPage");
    }, []);

    // Выбор категории
    const [selectedCategoryIndex, setSelectedCategoryIndex] =
      useState<number>(0);

    // Получение id страницы
    const { id } = useParams<{ id: string }>();

    return (
      <TelegramChannelStatsPageContext.Provider
        value={{
          selectedCategoryIndex,
          setSelectedCategoryIndex,
        }}
      >
        <main className="Page TelegramChannelStatsPage__main">
          <TelegramChannelStats channelId={Number(id)} />
          <TelegramChannelStatsAllStatistics />
        </main>
      </TelegramChannelStatsPageContext.Provider>
    );
  }
);
