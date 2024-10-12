import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { TelegramChannelStats } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";
import { useEffect, useState } from "react";
import { memo } from "react";
import { TelegramChannelStatsAllStatistics } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";
import { TelegramChannelStatsPageContext } from "../model/context/TelegramChannelStatsPageContext";
import { useParams } from "react-router-dom";
import { isNumber } from "@/shared/utils/IsNumber";
import { NotFoundContainer } from "@/widgets/NotFound_widgets/NotFoundContainer";
import { PortNow } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const TelegramChannelStatsPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document.querySelector("html")!.classList.add("TelegramChannelStatsPage");
      document.title = `TeleWorks | Название канала`;
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
          {(id && isNumber(id)) || PortNow == "6007" ? (
            <>
              <TelegramChannelStats channelId={Number(id)} />
              <TelegramChannelStatsAllStatistics />
            </>
          ) : (
            <NotFoundContainer />
          )}
        </main>
      </TelegramChannelStatsPageContext.Provider>
    );
  }
);
