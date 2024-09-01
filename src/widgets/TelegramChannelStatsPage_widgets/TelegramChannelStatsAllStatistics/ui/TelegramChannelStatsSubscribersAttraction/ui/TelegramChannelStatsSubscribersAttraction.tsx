import { InterpolationLineChart } from "@/shared/ui-kit/InterpolationLineChart/ui/InterpolationLineChart";
import styles from "./TelegramChannelStatsSubscribersAttraction.module.scss";
import { memo, useMemo } from "react";
import {
  subscribersGrowthGraphic,
  telegramChannelStatsSubscribersAttractionOnDaysData,
  telegramChannelStatsSubscribersAttractionOnHoursData,
} from "../model/TelegramChannelStatsSubscribersAttraction_data";
import { Flex } from "@/shared/ui-kit/Stack";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";
import { TelegramChannelStatsSubscribersAttractionChangeType } from "../model/TelegramChannelStatsSubscribersAttraction_types";

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

    const changesAmountTypeData: TelegramChannelStatsSubscribersAttractionChangeType =
      useMemo(() => (changesAmountData > 0 ? "+" : "-"), [changesAmountData]);

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
            <h6 className="TelegramChannelStatsPage__caption">По дням</h6>

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
                      {item.date.getDate() < 10 ? "0" : ""}
                      {item.date.getDate()}.0{item.date.getMonth()}.
                      {item.date.getFullYear()}
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

              <span
                className={
                  styles.TelegramChannelStatsSubscribersAttraction__stats__more
                }
              >
                Показать больше
              </span>
            </Flex>
          </Flex>

          <Flex direction="column" gap="5">
            <h6 className="TelegramChannelStatsPage__caption">По часам</h6>

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
                    <div
                      key={item.hour + item.changesAmount}
                      className={
                        styles.TelegramChannelStatsSubscribersAttraction__stats__block__item
                      }
                    >
                      <span
                        className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__hour}`}
                      >
                        {item.hour < 10 ? "0" : ""}
                        {item.hour}:00
                      </span>

                      <Flex align="center" gap="10">
                        <Flex align="center" gap="3">
                          <span
                            className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__icon__small}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__icon}`}
                          >
                            @
                          </span>
                          <span
                            className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text}`}
                          >
                            {item.referencesAmount}
                          </span>
                        </Flex>

                        <Flex gap="3">
                          <ShareSVG
                            className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__icon__small}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__icon}`}
                          ></ShareSVG>
                          <span
                            className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text}`}
                          >
                            {item.repostsAmount}
                          </span>
                        </Flex>
                      </Flex>

                      <span
                        className={`${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text}
                      ${item.changeType == "+" ? styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__increase : ""}
                       ${item.changeType == "-" ? styles.TelegramChannelStatsSubscribersAttraction__stats__block__item__text__shrink : ""}`}
                      >
                        {item.changeType}
                        {item.changesAmount}
                      </span>
                    </div>
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
