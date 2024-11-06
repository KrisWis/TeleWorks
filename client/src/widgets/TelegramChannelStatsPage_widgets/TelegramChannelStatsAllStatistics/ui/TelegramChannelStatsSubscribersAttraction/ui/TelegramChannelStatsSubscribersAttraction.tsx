import { InterpolationLineChart } from "@/shared/ui-kit/InterpolationLineChart/ui/InterpolationLineChart";
import styles from "./TelegramChannelStatsSubscribersAttraction.module.scss";
import { memo, useMemo } from "react";
import {
  subscribersGrowthGraphic,
  telegramChannelStatsSubscribersAttractionOnDaysData,
  telegramChannelStatsSubscribersAttractionOnHoursData,
} from "../model/TelegramChannelStatsSubscribersAttraction_data";
import { Flex } from "@/shared/lib/Stack";
import { TelegramChannelStatsSubscribersAttractionOnHoursItem } from "./TelegramChannelStatsSubscribersAttractionOnHoursItem";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import { TelegramChannelStatsChangeType } from "@/shared/types/project";

export const TelegramChannelStatsSubscribersAttraction: React.FC = memo(
  (): React.JSX.Element => {
    // Нормализация данных
    const dateWeekDay: string = useMemo(
      () =>
        telegramChannelStatsSubscribersAttractionOnHoursData.date.toLocaleDateString(
          "ru-RU",
          { weekday: "short" }
        ),
      []
    );

    const dateMonth: string = useMemo(
      () =>
        telegramChannelStatsSubscribersAttractionOnHoursData.date
          .toLocaleDateString("ru-RU", { month: "short" })
          .slice(0, -1),
      []
    );

    const changesAmountData: number = useMemo(
      () =>
        telegramChannelStatsSubscribersAttractionOnHoursData.items.reduce(
          (sum, item) =>
            sum +
            (item.changeType == "+" ? item.changesAmount : -item.changesAmount),
          0
        ),
      []
    );

    const changesAmountTypeData: TelegramChannelStatsChangeType = useMemo(
      () => (changesAmountData > 0 ? "+" : "-"),
      [changesAmountData]
    );

    return (
      <div className={styles.TelegramChannelStatsSubscribersAttraction}>
        <h5 className="TelegramChannelStatsPage__caption">
          Рост количества подписчиков
        </h5>

        <InterpolationLineChart
          className={styles.TelegramChannelStatsSubscribersAttraction__chart}
          charts={subscribersGrowthGraphic}
        />

        <div
          className={styles.TelegramChannelStatsSubscribersAttraction__stats}
        >
          <Flex direction="column" gap="5">
            <h6
              className={`TelegramChannelStatsPage__caption ${styles.TelegramChannelStatsSubscribersAttraction__stats__caption}`}
            >
              По дням
            </h6>

            <Flex
              className={`Page__GrayBorderWrapper ${styles.TelegramChannelStatsSubscribersAttraction__stats__block}`}
              direction="column"
            >
              <div
                className={
                  styles.TelegramChannelStatsSubscribersAttraction__stats__block__categories
                }
              >
                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__block__category
                  }
                >
                  День
                </span>

                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__block__category
                  }
                >
                  Кол-во подписчиков
                </span>

                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__block__category
                  }
                >
                  Изменения
                </span>
              </div>

              {telegramChannelStatsSubscribersAttractionOnDaysData.map(
                (item) => (
                  <div
                    className={
                      styles.TelegramChannelStatsSubscribersAttraction__stats__block__item
                    }
                    key={item.date.getUTCDate()}
                  >
                    <span
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text
                      }
                    >
                      {TransformDateToString(item.date, false)}
                    </span>

                    <span
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text
                      }
                    >
                      {item.subscribersAmount}
                    </span>

                    <span
                      className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text} 
                      ${item.changeType == "+" ? styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__increase : ""}
                       ${item.changeType == "-" ? styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__shrink : ""}`}
                    >
                      {item.changeType}
                      {item.changesAmount}
                    </span>
                  </div>
                )
              )}

              <Flex
                justify="center"
                align="center"
                className={
                  styles.TelegramChannelStatsSubscribersAttraction__stats__more
                }
              >
                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__more__text
                  }
                >
                  Показать больше
                </span>
              </Flex>
            </Flex>
          </Flex>

          <Flex direction="column" gap="5">
            <h6
              className={`TelegramChannelStatsPage__caption ${styles.TelegramChannelStatsSubscribersAttraction__stats__caption}`}
            >
              По часам
            </h6>

            <Flex
              className={`Page__GrayBorderWrapper ${styles.TelegramChannelStatsSubscribersAttraction__stats__block}`}
              direction="column"
            >
              <div
                className={
                  styles.TelegramChannelStatsSubscribersAttraction__stats__block__categories
                }
              >
                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__block__category
                  }
                >
                  Час
                </span>

                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__block__category
                  }
                >
                  Упоминания/репосты
                </span>

                <span
                  className={
                    styles.TelegramChannelStatsSubscribersAttraction__stats__block__category
                  }
                >
                  Изменения
                </span>
              </div>

              <div
                className={
                  styles.TelegramChannelStatsSubscribersAttraction__stats__block__item
                }
              >
                <Flex gap="5" align="center">
                  <span
                    className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__big} 
                    ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text}`}
                  >
                    {dateWeekDay},{" "}
                    {telegramChannelStatsSubscribersAttractionOnHoursData.date.getDate()}{" "}
                  </span>
                  <span
                    className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__big} 
                    ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text}`}
                  >
                    {dateMonth}
                  </span>
                </Flex>

                <Flex align="center" gap="10">
                  <Flex gap="3">
                    <span
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__icon
                      }
                    >
                      @
                    </span>
                    <span
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text
                      }
                    >
                      {telegramChannelStatsSubscribersAttractionOnHoursData.items.reduce(
                        (sum, item) => sum + item.referencesAmount,
                        0
                      )}
                    </span>
                  </Flex>

                  <Flex gap="3">
                    <ShareSVG
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__icon
                      }
                    ></ShareSVG>
                    <span
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text
                      }
                    >
                      {telegramChannelStatsSubscribersAttractionOnHoursData.items.reduce(
                        (sum, item) => sum + item.repostsAmount,
                        0
                      )}
                    </span>
                  </Flex>
                </Flex>

                <span
                  className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text} 
                      ${changesAmountTypeData == "+" ? styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__increase : ""}
                       ${changesAmountTypeData == "-" ? styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__shrink : ""}`}
                >
                  {changesAmountData > 0 ? changesAmountTypeData : ""}
                  {changesAmountData}
                </span>
              </div>

              <Flex
                direction="column"
                className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__hours}`}
              >
                {telegramChannelStatsSubscribersAttractionOnHoursData.items.map(
                  (item) => (
                    <TelegramChannelStatsSubscribersAttractionOnHoursItem
                      key={item.hour + item.changesAmount}
                      item={item}
                    />
                  )
                )}
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    );
  }
);
