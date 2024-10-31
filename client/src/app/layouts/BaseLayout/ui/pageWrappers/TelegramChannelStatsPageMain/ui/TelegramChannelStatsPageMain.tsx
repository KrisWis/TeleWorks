import { isNumber } from "@/shared/utils/IsNumber";
import styles from "./TelegramChannelStatsPageMain.module.scss";
import { memo, useState } from "react";
import { PortNow } from "@/shared/const/app";
import { useParams } from "react-router-dom";
import { TelegramChannelStatsAllStatistics } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics";
import { TelegramChannelStatsPageContext } from "../model/context/TelegramChannelStatsPageContext";
import { NotFoundContainer } from "@/shared/ui-kit/NotFoundContainer";
import { TelegramChannelStats } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats";

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
