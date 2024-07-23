import { memo } from "react";
import { Stats__item__props } from "../model/Stats__item__types";
import styles from "./Stats__item.module.scss";

export const Stats__item: React.FC<Stats__item__props> = memo(
  ({
    amount,
    amounts__subscribers,
    amounts,
    stats,
    caption,
    graphic_imgURL,
  }): React.JSX.Element => {
    return (
      <div className={styles.stats__item}>
        <div className={styles.stats__item__stats}>
          <span className={styles.stats__item__stats__caption}>{amount}</span>

          <div className={styles.stats__item__stats__dates}>
            <div className={styles.stats__item__stats__amounts}>
              {amounts__subscribers
                ? amounts__subscribers.map((amount__subscribers, index) => (
                    <span
                      key={index}
                      className={`${styles.stats__item__stats__amount__subscribers} ${
                        amount__subscribers.prefix == "+"
                          ? styles.stats__item__stats__amount__subscribers__grow
                          : styles.stats__item__stats__amount__subscribers__shrink
                      }`}
                    >
                      {amount__subscribers.prefix +
                        String(amount__subscribers.number)}
                    </span>
                  ))
                : amounts?.map((amount, index) => (
                    <span
                      key={index}
                      className={styles.stats__item__stats__amount}
                    >
                      {amount}
                    </span>
                  ))}
            </div>

            <div className={styles.stats__item__stats__dates_text}>
              {stats.map((stat, index) => (
                <span
                  key={index}
                  className={styles.stats__item__stats__date_text}
                >
                  {stat.stat}

                  {stat.postfix && (
                    <span
                      className={styles.stats__item__stats__date_text__postfix}
                    >
                      {stat.postfix}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.stats__item__stats__graphics}>
          <h4 className={styles.stats__item__stats__graphics__caption}>
            {caption}
          </h4>

          <img
            className={styles.stats__item__stats__graphics__img}
            src={graphic_imgURL}
            alt="Изображение графика"
          />
        </div>
      </div>
    );
  }
);
