import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { TelegramChannelStats } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";
import { useEffect, useState } from "react";
import { memo } from "react";
import { TelegramChannelStatsAllStatistics } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";
import {
  TelegramChannelStatsCategories,
  telegramChannelStatsCategories,
} from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsCategories";
import { TelegramChannelStatsPageContext } from "../model/context/TelegramChannelStatsPageContext";
import { useParams } from "react-router-dom";

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

    // Получение id страницы
    const { id } = useParams<{ id: string }>();

    return (
      <TelegramChannelStatsPageContext.Provider
        value={{
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <main className="Page TelegramChannelStatsPage__main">
          <div className="padding">
            {id ? (
              <>
                <TelegramChannelStats channelId={Number(id)} />
                <TelegramChannelStatsAllStatistics />
              </>
            ) : (
              <span className="Page__error">Неверный идентификатор канала</span>
            )}
          </div>
        </main>
      </TelegramChannelStatsPageContext.Provider>
    );
  }
);
