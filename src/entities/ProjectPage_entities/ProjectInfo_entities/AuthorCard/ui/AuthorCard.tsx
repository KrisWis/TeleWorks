import { AuthorCardProps } from "../model/AuthorCard_types";
import styles from "./AuthorCard.module.scss";
import { memo } from "react";
import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { CustomItemBadge } from "@/shared/ui-kit/CustomItemBadge";
import AuthorStatusOnlineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatusSVG.svg?react";
import AuthorStatReviewOnlineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatReviewSVG.svg?react";
import AuthorStatusOfflineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatusOfflineSVG.svg?react";
import AuthorStatReviewOfflineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatReviewOfflineSVG.svg?react";

export const AuthorCard: React.FC<AuthorCardProps> = memo(
  ({
    imgURL,
    authorName,
    online,
    TeleWorksChoice,
    reputation,
    ordersAmount,
    positiveReviews,
    negativeReviews,
  }): React.JSX.Element => {
    return (
      <div className={styles.authorCard}>
        <div className={styles.authorCard__header}>
          <div className={styles.authorCard__author}>
            <img
              className={styles.authorCard__author__img}
              src={imgURL}
              alt={authorName}
            />

            <div className={styles.authorCard__author__info}>
              <h6 className={styles.authorCard__author__name}>{authorName}</h6>

              {online ? (
                <div className={styles.authorCard__author__status}>
                  <AuthorStatusOnlineSVG />

                  <span className={styles.authorCard__author__status__span}>
                    Онлайн
                  </span>
                </div>
              ) : (
                <div className={styles.authorCard__author__status}>
                  <AuthorStatusOfflineSVG />

                  <span className={styles.authorCard__author__status__span}>
                    Оффлайн
                  </span>
                </div>
              )}
            </div>
          </div>

          {TeleWorksChoice && (
            <CustomItemBadge
              firstTitle="Выбор"
              secondTitle="TeleWorks"
              className={styles.authorCard__CustomItemBadge}
            />
          )}
        </div>

        <Button
          className={styles.authorCard__individualOffer}
          type={ButtonTypes.BLACK}
          text="Индивидуальный заказ"
        />

        <div className={styles.authorCard__stats}>
          <div className={styles.authorCard__stat}>
            <span className={styles.authorCard__stat__title}>Репутация</span>

            <div className={styles.authorCard__stat__reputation}>
              <img
                className={styles.authorCard__stat__star}
                src={`${URL_PART}/global/icons/star.png`}
                alt="Жёлтая звезда рейтинга"
              ></img>

              <span className={styles.authorCard__stat__value}>
                {reputation.toFixed(1)}
              </span>
            </div>
          </div>

          <span className={styles.authorCard__stats__separator}></span>

          <div className={styles.authorCard__stat}>
            <span className={styles.authorCard__stat__title}>
              Выполнено заказов
            </span>

            <span className={styles.authorCard__stat__value}>
              {ordersAmount}
            </span>
          </div>

          <span className={styles.authorCard__stats__separator}></span>

          <div className={styles.authorCard__stat}>
            <span className={styles.authorCard__stat__title}>Оценки</span>

            <div className={styles.authorCard__stat__reviews}>
              <div className={styles.authorCard__stat__review}>
                <AuthorStatReviewOnlineSVG />

                <span className={styles.authorCard__stat__value}>
                  {positiveReviews}
                </span>
              </div>

              <div className={styles.authorCard__stat__review}>
                <AuthorStatReviewOfflineSVG />

                <span className={styles.authorCard__stat__value}>
                  {negativeReviews}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
