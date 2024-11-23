import { Flex } from "@/shared/lib/Stack";
import styles from "./TelegramChannelStatsInvolvement.module.scss";
import { memo } from "react";
import { InterpolationLineChart } from "@/shared/ui-kit/InterpolationLineChart/ui/InterpolationLineChart";
import {
  telegramChannelStatsInvolvementAverageAmountGraphic,
  telegramChannelStatsInvolvementERGraphic,
} from "@/shared/mockData";
import { TipBlock } from "@/shared/ui-kit/TipBlock";

export const TelegramChannelStatsInvolvement: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        className={styles.TelegramChannelStatsInvolvement}
      >
        <h5 className="TelegramChannelStatsPage__caption">
          ER% — вовлеченность по взаимодействиям
        </h5>

        <InterpolationLineChart
          className={styles.TelegramChannelStatsInvolvement__chart}
          charts={telegramChannelStatsInvolvementERGraphic}
        />

        <TipBlock
          className={styles.TelegramChannelStatsInvolvement__tip}
          text={[
            "Процент читателей, совершивших любое из действий (пересылка, комментарий, реакция). Считается как отношение количества всех взаимодействий читателей к количеству просмотров публикации.",
          ]}
        />

        <h5 className="TelegramChannelStatsPage__caption">
          Среднее количество взаимодействий
        </h5>

        <InterpolationLineChart
          className={styles.TelegramChannelStatsInvolvement__chart}
          charts={telegramChannelStatsInvolvementAverageAmountGraphic}
        />

        <TipBlock
          className={styles.TelegramChannelStatsInvolvement__tip__second}
          text={[
            "Среднее количество взаимодействий читателя (пересылка / комментарий / реакция) с постами, опубликованными за выбранный период",
          ]}
        />
      </Flex>
    );
  },
);
TelegramChannelStatsInvolvement.displayName = "TelegramChannelStatsInvolvement";
