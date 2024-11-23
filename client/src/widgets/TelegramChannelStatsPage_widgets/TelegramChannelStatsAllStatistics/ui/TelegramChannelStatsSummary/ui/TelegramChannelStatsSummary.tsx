import {
  telegramChannelStatsSummaryGraphics,
  telegramChannelStatsSummaryMenPercent,
  telegramChannelStatsSummaryWomenPercent,
} from "../model/TelegramChannelStatsSummary_data";
import styles from "./TelegramChannelStatsSummary.module.scss";
import { memo } from "react";
import { MenAndWomenPercentsProgressBarBlock } from "@/shared/ui-kit/MenAndWomenPercentsProgressBarBlock";
import {
  Stats__item,
  Stats__item__types,
} from "@/entities/Global_entities/Stats__item";

export const TelegramChannelStatsSummary: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <div className={styles.TelegramChannelStatsSummary}>
        <div className={styles.TelegramChannelStatsSummary__graphics}>
          {telegramChannelStatsSummaryGraphics.map((Stats__item__props) => (
            <Stats__item
              key={Stats__item__props.caption}
              {...Stats__item__props}
              type={Stats__item__types.SMALL}
            />
          ))}

          <MenAndWomenPercentsProgressBarBlock
            className={
              styles.TelegramChannelStatsSummary__wenAndWomenProgressbar
            }
            menPercent={telegramChannelStatsSummaryMenPercent}
            womenPercent={telegramChannelStatsSummaryWomenPercent}
            title="Пол подписчиков"
          />
        </div>
      </div>
    );
  },
);
TelegramChannelStatsSummary.displayName = "TelegramChannelStatsSummary";
