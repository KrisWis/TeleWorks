import styles from "./TelegramChannelStatsADSEffectivityStats.module.scss";
import { memo } from "react";
import { TelegramChannelStatsADSEffectivityStatsProps } from "../model/TelegramChannelStatsADSEffectivityStats_types";
import { Flex } from "@/shared/lib/Stack";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";
import ViewsSVG from "@/shared/assets/icons/Global/ViewsSVG.svg?react";
import SubscribersAddedSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ADSEffectivityBlock/subscribersAddedSVG.svg?react";
import ImgSmallSVG from "@/shared/assets/icons/Global/ImgSmallSVG.svg?react";

export const TelegramChannelStatsADSEffectivityStats: React.FC<TelegramChannelStatsADSEffectivityStatsProps> =
  memo(({ statItems }): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        className={`${styles.TelegramChannelStatsADSEffectivityStats} Page__GrayBorderWrapper`}
      >
        <div className={styles.TelegramChannelStatsADSEffectivityStats__header}>
          <span
            className={
              styles.TelegramChannelStatsADSEffectivityStats__header__text
            }
          >
            Канал
          </span>

          <span
            className={
              styles.TelegramChannelStatsADSEffectivityStats__header__text
            }
          >
            Дата и время
          </span>

          <span
            className={
              styles.TelegramChannelStatsADSEffectivityStats__header__text
            }
          >
            Статистика
          </span>
        </div>

        <Flex
          direction="column"
          className={styles.TelegramChannelStatsADSEffectivityStats__items}
        >
          {statItems.map((item) => (
            <div
              className={styles.TelegramChannelStatsADSEffectivityStats__item}
              key={item.channelName}
            >
              <Flex align="center" gap="15">
                <img
                  className={
                    styles.TelegramChannelStatsADSEffectivityStats__item__img
                  }
                  src={item.avatarImgURL}
                  alt={item.channelName}
                />

                <Flex direction="column" gap="3">
                  <span
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__name
                    }
                  >
                    {item.channelName}
                  </span>

                  <span
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__category
                    }
                  >
                    {item.channelCategory}
                  </span>
                </Flex>
              </Flex>

              <Flex direction="column" align="center" gap="3">
                <span
                  className={
                    styles.TelegramChannelStatsADSEffectivityStats__item__date
                  }
                >
                  {TransformDateToString(item.channelDate)}
                </span>

                <span
                  className={
                    styles.TelegramChannelStatsADSEffectivityStats__item__inTop
                  }
                >
                  В топе {item.hoursInTop}ч.
                </span>
              </Flex>

              <Flex
                className={
                  styles.TelegramChannelStatsADSEffectivityStats__item__stats
                }
                gap="5"
                align="center"
                justify="end"
              >
                <Flex
                  className={`Page__SirineWrapper ${styles.TelegramChannelStatsADSEffectivityStats__item__stat}`}
                  direction="column"
                  align="center"
                  justify="center"
                >
                  <ImgSmallSVG
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__stat__svg
                    }
                  />

                  <span
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__stat__text
                    }
                  >
                    Креатив
                  </span>
                </Flex>

                <Flex
                  className={`Page__SirineWrapper ${styles.TelegramChannelStatsADSEffectivityStats__item__stat}`}
                  direction="column"
                  align="center"
                  justify="center"
                  gap="5"
                >
                  <ViewsSVG
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__stat__svg
                    }
                  />

                  <span
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__stat__text
                    }
                  >
                    {item.viewsAmount.toLocaleString()}
                  </span>
                </Flex>

                <Flex
                  className={`Page__SirineWrapper ${styles.TelegramChannelStatsADSEffectivityStats__item__stat}`}
                  direction="column"
                  align="center"
                  justify="center"
                  gap="5"
                >
                  <SubscribersAddedSVG
                    className={
                      styles.TelegramChannelStatsADSEffectivityStats__item__stat__svg
                    }
                  />

                  <span
                    className={`${styles.TelegramChannelStatsADSEffectivityStats__item__stat__text}
                    ${item.changeType == "+" ? styles.TelegramChannelStatsADSEffectivityStats__item__stat__text__increase : ""}
                    ${item.changeType == "-" ? styles.TelegramChannelStatsADSEffectivityStats__item__stat__text__dicrease : ""}`}
                  >
                    {item.changeType}
                    {item.subscribersChangeAmount}
                  </span>
                </Flex>
              </Flex>
            </div>
          ))}
        </Flex>

        <Flex
          justify="center"
          align="center"
          className={styles.TelegramChannelStatsADSEffectivityStats__more}
        >
          <span
            className={
              styles.TelegramChannelStatsADSEffectivityStats__more__text
            }
          >
            Загрузить больше
          </span>
        </Flex>
      </Flex>
    );
  });
TelegramChannelStatsADSEffectivityStats.displayName =
  "TelegramChannelStatsADSEffectivityStats";
