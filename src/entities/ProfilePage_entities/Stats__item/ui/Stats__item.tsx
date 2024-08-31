import { memo } from "react";
import { Stats__item__props } from "../model/Stats__item__types";
import styles from "./Stats__item.module.scss";
import { Flex } from "@/shared/ui-kit/Stack";
import { InterpolationLineChartSecondary } from "@/shared/ui-kit/InterpolationLineChartSecondary";

export const Stats__item: React.FC<Stats__item__props> = memo(
  ({
    amount,
    amounts__subscribers,
    amounts,
    stats,
    caption,
    graphic_imgURL,
    graphicChart,
  }): React.JSX.Element => {
    return (
      <div className={styles.stats__item}>
        <Flex align="start" justify="between">
          <span className={styles.stats__item__stats__caption}>{amount}</span>

          <h4 className={styles.stats__item__stats__graphics__caption}>
            {caption}
          </h4>
        </Flex>

        <div className={styles.stats__item__stats__graphics}>
          <div className={styles.stats__item__stats__dates}>
            {amounts__subscribers
              ? amounts__subscribers.map((amount__subscribers, index) => (
                  <div key={index} className={styles.stats__item__stats__date}>
                    <span
                      className={`${styles.stats__item__stats__amount__subscribers} ${
                        amount__subscribers.prefix == "+"
                          ? styles.stats__item__stats__amount__subscribers__grow
                          : styles.stats__item__stats__amount__subscribers__shrink
                      }`}
                    >
                      {amount__subscribers.prefix +
                        String(amount__subscribers.number)}
                    </span>

                    <span className={styles.stats__item__stats__date_text}>
                      {stats[index].stat}

                      {stats[index].postfix && (
                        <span
                          className={
                            styles.stats__item__stats__date_text__postfix
                          }
                        >
                          {stats[index].postfix}
                        </span>
                      )}
                    </span>
                  </div>
                ))
              : amounts?.map((amount, index) => (
                  <div key={index} className={styles.stats__item__stats__date}>
                    <span className={styles.stats__item__stats__amount}>
                      {amount}
                    </span>

                    <span className={styles.stats__item__stats__date_text}>
                      {stats[index].stat}

                      {stats[index].postfix && (
                        <span
                          className={
                            styles.stats__item__stats__date_text__postfix
                          }
                        >
                          {stats[index].postfix}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
          </div>

          {graphic_imgURL ? (
            <img src={graphic_imgURL} alt="Изображение графика" />
          ) : (
            graphicChart && (
              <InterpolationLineChartSecondary
                className={styles.stats__item__stats__chart}
                chartDataSets={graphicChart}
              />
            )
          )}
        </div>
      </div>
    );
  }
);
