import { isNumber } from "@/shared/utils/IsNumber";
import styles from "./TelegramChannelStatsPageMain.module.scss";
import { memo, useState } from "react";
import { PortNow } from "@/shared/const/app";
import { NotFoundContainer } from "@/widgets/NotFound_widgets/NotFoundContainer";
import { useParams } from "react-router-dom";
import { TelegramChannelStats } from "../../TelegramChannelStats/ui/TelegramChannelStats";
import { TelegramChannelStatsAllStatistics } from "../../TelegramChannelStatsAllStatistics";
import { TelegramChannelStatsPageContext } from "../model/context/TelegramChannelStatsPageContext";

export const TelegramChannelStatsPageMain: React.FC = memo(
  (): React.JSX.Element => {
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
        <main className={styles.TelegramChannelStatsPageMain}>
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
