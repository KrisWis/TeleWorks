import { memo } from "react";
import {
  Stats__item__props,
  Stats__item__types,
} from "../model/Stats__item__types";
import styles from "./Stats__item.module.scss";
import { Flex } from "@/shared/lib/Stack";
import { InterpolationLineChartSecondary } from "@/shared/ui-kit/InterpolationLineChartSecondary";

export const Stats__item: React.FC<Stats__item__props> = memo(
  ({
    amount,
    amounts__subscribers,
    amounts,
    stats,
    caption,
    graphicChart,
    type = Stats__item__types.MEDIUM,
  }): React.JSX.Element => {
    return (
      <div
        className={`${styles.stats__item} ${type == Stats__item__types.SMALL ? styles.stats__item__small : ""} Page__GrayBorderWrapper`}
      >
        <Flex align="start" justify="between">
          <span
            className={`${styles.stats__item__stats__caption} ${type == Stats__item__types.SMALL ? styles.stats__item__stats__caption__small : ""}`}
          >
            {amount}
          </span>

          <h4
            className={`${styles.stats__item__stats__graphics__caption} ${type == Stats__item__types.SMALL ? styles.stats__item__stats__graphics__caption__small : ""}`}
          >
            {caption}
          </h4>
        </Flex>

        <div className={styles.stats__item__stats__graphics}>
          <div className={styles.stats__item__stats__dates}>
            {amounts__subscribers
              ? amounts__subscribers.map((amount__subscribers, index) => (
                  <div key={index} className={styles.stats__item__stats__date}>
                    <span
                      className={`${styles.stats__item__stats__amount__subscribers} 
                      ${type == Stats__item__types.SMALL ? styles.stats__item__stats__amount__subscribers__small : ""} ${
                        amount__subscribers.prefix == "+"
                          ? styles.stats__item__stats__amount__subscribers__grow
                          : styles.stats__item__stats__amount__subscribers__shrink
                      }`}
                    >
                      {amount__subscribers.prefix +
                        String(amount__subscribers.number)}
                    </span>

                    <span
                      className={`${styles.stats__item__stats__date_text} ${type == Stats__item__types.SMALL ? styles.stats__item__stats__date_text__small : ""}`}
                    >
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
                    <span
                      className={`${styles.stats__item__stats__amount} ${type == Stats__item__types.SMALL ? styles.stats__item__stats__amount__small : ""}`}
                    >
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

          {graphicChart && (
            <InterpolationLineChartSecondary
              className={`${styles.stats__item__stats__chart} ${type == Stats__item__types.SMALL ? styles.stats__item__stats__chart__small : ""}`}
              chartDataSets={graphicChart}
            />
          )}
        </div>
      </div>
    );
  },
);
Stats__item.displayName = "Stats__item";
