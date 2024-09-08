import styles from "./AuthorStats.module.scss";
import { memo } from "react";
import { AuthorStatsProps } from "../model/AuthorStats_types";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import AuthorStatReviewOnlineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatReviewSVG.svg?react";
import AuthorStatReviewOfflineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatReviewOfflineSVG.svg?react";

export const AuthorStats: React.FC<AuthorStatsProps> = memo(
  ({
    reputation,
    ordersAmount,
    positiveReviewsAmount,
    negativeReviewsAmount,
    className,
  }): React.JSX.Element => {
    return (
      <div className={`${styles.AuthorStats} ${className}`}>
        <div className={styles.AuthorStat}>
          <span className={styles.AuthorStat__title}>Репутация</span>

          <div className={styles.AuthorStat__reputation}>
            <img
              className={styles.AuthorStat__star}
              src={`${URL_PART}/global/icons/star.png`}
              alt="Жёлтая звезда рейтинга"
            ></img>

            <span className={styles.AuthorStat__value}>
              {reputation.toFixed(1)}
            </span>
          </div>
        </div>

        <span className={styles.AuthorStats__separator}></span>

        <div className={styles.AuthorStat}>
          <span className={styles.AuthorStat__title}>Выполнено заказов</span>

          <span className={styles.AuthorStat__value}>{ordersAmount}</span>
        </div>

        <span className={styles.AuthorStats__separator}></span>

        <div className={styles.AuthorStat}>
          <span className={styles.AuthorStat__title}>Оценки</span>

          <div className={styles.AuthorStat__reviews}>
            <div className={styles.AuthorStat__review}>
              <AuthorStatReviewOnlineSVG />

              <span className={styles.AuthorStat__value}>
                {positiveReviewsAmount}
              </span>
            </div>

            <div className={styles.AuthorStat__review}>
              <AuthorStatReviewOfflineSVG />

              <span className={styles.AuthorStat__value}>
                {negativeReviewsAmount}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
