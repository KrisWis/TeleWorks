import styles from "./TelegramChannelStatsViewsAnalyzeStats.module.scss";
import { memo } from "react";
import { TelegramChannelStatsViewsAnalyzeStatsProps } from "../model/TelegramChannelStatsViewsAnalyzeStats_types";
import { Flex } from "@/shared/ui-kit/Stack";
import SirineSeparatorLineSVG from "@/shared/assets/icons/Global/SirineSeparatorLineSVG.svg?react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TransformDateToString } from "@/shared/utils/TransformDateToString/TransformDateToString";

export const TelegramChannelStatsViewsAnalyzeStats: React.FC<TelegramChannelStatsViewsAnalyzeStatsProps> =
  memo(({ formatsData, currentFormat }): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        className={`${styles.TelegramChannelStatsViewsAnalyzeStats} Page__GrayBorderWrapper`}
      >
        {formatsData[currentFormat].map((item) => (
          <Swiper
            slidesPerView={0.9}
            slidesPerGroup={0.9}
            className={
              styles.TelegramChannelStatsViewsAnalyzeStats__post__swiper
            }
            key={item.postID}
          >
            <SwiperSlide>
              <Flex
                className={styles.TelegramChannelStatsViewsAnalyzeStats__post}
                gap="20"
                align="center"
              >
                <Flex
                  gap="3"
                  className={
                    styles.TelegramChannelStatsViewsAnalyzeStats__post__info
                  }
                  direction="column"
                >
                  <span
                    className={
                      styles.TelegramChannelStatsViewsAnalyzeStats__post__id
                    }
                  >
                    Пост #{item.postID}
                  </span>

                  <span
                    className={
                      styles.TelegramChannelStatsViewsAnalyzeStats__post__date
                    }
                  >
                    {TransformDateToString(item.postDate)}
                  </span>
                </Flex>

                <SirineSeparatorLineSVG />

                <Flex direction="column" gap="3">
                  <span
                    className={
                      styles.TelegramChannelStatsViewsAnalyzeStats__post__amount
                    }
                  >
                    {item.viewsInThousandsAmount}k
                  </span>

                  <span
                    className={
                      styles.TelegramChannelStatsViewsAnalyzeStats__post__amount
                    }
                  >
                    {item.subscribersIncreaseAmount}
                  </span>
                </Flex>

                <SirineSeparatorLineSVG />

                <img
                  className={
                    styles.TelegramChannelStatsViewsAnalyzeStats__post__graphic
                  }
                  src={item.graphicImgURL}
                  alt={"График подписчиков"}
                />

                <SirineSeparatorLineSVG />

                <Flex align="center" gap="20">
                  {item.hoursStats.map((hour) => (
                    <Flex
                      className={`${styles.TelegramChannelStatsViewsAnalyzeStats__post__hour} Page__SirineWrapper`}
                      direction="column"
                      justify="between"
                      align="center"
                      key={hour.hour}
                    >
                      <span
                        className={
                          styles.TelegramChannelStatsViewsAnalyzeStats__post__hour__hour
                        }
                      >
                        {hour.hour}ч
                      </span>

                      <span
                        className={
                          styles.TelegramChannelStatsViewsAnalyzeStats__post__hour__percent
                        }
                      >
                        {hour.percentIncrease}%
                      </span>

                      <span
                        className={
                          styles.TelegramChannelStatsViewsAnalyzeStats__post__hour__views
                        }
                      >
                        {hour.viewsIncrease}
                      </span>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </SwiperSlide>
          </Swiper>
        ))}

        <Flex
          justify="center"
          align="center"
          className={styles.TelegramChannelStatsViewsAnalyzeStats__more}
        >
          <span
            className={styles.TelegramChannelStatsViewsAnalyzeStats__more__text}
          >
            Показать больше
          </span>
        </Flex>
      </Flex>
    );
  });
