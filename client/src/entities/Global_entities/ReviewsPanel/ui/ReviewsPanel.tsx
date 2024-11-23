import styles from "./ReviewsPanel.module.scss";
import { memo } from "react";
import { ReviewsPanel__item } from "./ReviewsPanel__item/ui/ReviewsPanel__item";
import { ReviewsPanelProps } from "@/shared/types/user";

export const ReviewsPanel: React.FC<ReviewsPanelProps> = memo(
  ({
    mark,
    reviewsAmount,
    fiveStarsProgress,
    fourStarsProgress,
    threeStarsProgress,
    twoStarsProgress,
    oneStarsProgress,
  }): React.JSX.Element => {
    return (
      <section className={styles.ReviewsPanel}>
        <div className={styles.ReviewsPanel__wrapper}>
          <div className={styles.ReviewsPanel__marks}>
            <span className={styles.ReviewsPanel__mark}>{mark.toFixed(1)}</span>
            <span className={styles.ReviewsPanel__marks_amount}>
              {reviewsAmount} оценки
            </span>
          </div>

          <div className={styles.ReviewsPanel__stars}>
            <ReviewsPanel__item
              stars_amount={5}
              progress_amount={fiveStarsProgress}
            />
            <ReviewsPanel__item
              stars_amount={4}
              progress_amount={fourStarsProgress}
            />
            <ReviewsPanel__item
              stars_amount={3}
              progress_amount={threeStarsProgress}
            />
            <ReviewsPanel__item
              stars_amount={2}
              progress_amount={twoStarsProgress}
            />
            <ReviewsPanel__item
              stars_amount={1}
              progress_amount={oneStarsProgress}
            />
          </div>
        </div>
      </section>
    );
  },
);
ReviewsPanel.displayName = "ReviewsPanel";
