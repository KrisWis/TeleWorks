import { AuthorCardProps } from "../model/AuthorCard_types";
import styles from "./AuthorCard.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { CustomItemBadge } from "@/shared/ui-kit/CustomItemBadge";
import AuthorStatusOnlineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatusSVG.svg?react";
import AuthorStatusOfflineSVG from "@/shared/assets/icons/ProjectPage/AuthorCard/AuthorStatusOfflineSVG.svg?react";
import { AuthorStats } from "@/shared/ui-kit/AuthorStats";

export const AuthorCard: React.FC<AuthorCardProps> = memo(
  ({
    authorImgURL,
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
              src={authorImgURL}
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

        <AuthorStats
          reputation={reputation}
          ordersAmount={ordersAmount}
          positiveReviewsAmount={positiveReviews}
          negativeReviewsAmount={negativeReviews}
        />
      </div>
    );
  }
);
