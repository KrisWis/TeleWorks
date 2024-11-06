import styles from "./MenAndWomenPercentsProgressBarBlock.module.scss";
import { memo } from "react";
import { MenAndWomenPercentsProgressBarBlockProps } from "../model/MenAndWomenPercentsProgressBarBlock_types";
import { Flex } from "../../../lib/Stack";
import { ProgressBar } from "primereact/progressbar";
import SubscribersMen from "@/shared/assets/icons/Global/SubscribersMen.svg?react";
import SubscribersWomen from "@/shared/assets/icons/Global/SubscribersWomen.svg?react";

export const MenAndWomenPercentsProgressBarBlock: React.FC<MenAndWomenPercentsProgressBarBlockProps> =
  memo(({ className, title, menPercent, womenPercent }): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        className={`${styles.MenAndWomenPercentsProgressBarBlock} ${className} Page__GrayBorderWrapper`}
      >
        <h6 className={styles.MenAndWomenPercentsProgressBarBlock__title}>
          {title}
        </h6>

        <Flex
          className={styles.MenAndWomenPercentsProgressBarBlock__percents}
          justify="around"
        >
          <Flex align="center" direction="column">
            <span
              className={styles.MenAndWomenPercentsProgressBarBlock__percent}
            >
              {menPercent}%
            </span>

            <span
              className={
                styles.MenAndWomenPercentsProgressBarBlock__percentTitle
              }
            >
              Мужчины
            </span>
          </Flex>

          <Flex align="center" direction="column">
            <span
              className={styles.MenAndWomenPercentsProgressBarBlock__percent}
            >
              {womenPercent}%
            </span>

            <span
              className={
                styles.MenAndWomenPercentsProgressBarBlock__percentTitle
              }
            >
              Женщины
            </span>
          </Flex>
        </Flex>

        <div className={styles.MenAndWomenPercentsProgressBarBlock__genders}>
          <div
            className={styles.MenAndWomenPercentsProgressBarBlock__gender}
            style={{ width: `${menPercent}%` }}
          >
            <SubscribersMen />

            <ProgressBar
              aria-labelledby={`Соотношение мужчин в канале`}
              className={`${styles.MenAndWomenPercentsProgressBarBlock__gender__progressbar} ${styles.MenAndWomenPercentsProgressBarBlock__gender__progressbar__men}`}
              value={menPercent}
              showValue={false}
            />
          </div>

          <div
            className={`${styles.MenAndWomenPercentsProgressBarBlock__gender} ${styles.MenAndWomenPercentsProgressBarBlock__gender__women}`}
            style={{ width: `${womenPercent}%` }}
          >
            <SubscribersWomen />

            <ProgressBar
              aria-labelledby={`Соотношение женщин в канале`}
              className={`${styles.MenAndWomenPercentsProgressBarBlock__gender__progressbar} ${styles.MenAndWomenPercentsProgressBarBlock__gender__progressbar__women}`}
              value={womenPercent}
              showValue={false}
            />
          </div>
        </div>
      </Flex>
    );
  });
