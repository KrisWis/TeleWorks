import styles from "./Channel_reviews.module.scss";
import { memo } from "react";
import { Channel_reviews__item } from "./Channel_reviews__item/ui/Channel_reviews__item";
import { Channel_reviewsProps } from "../model/Channel_reviews_types";

export const Channel_reviews: React.FC<Channel_reviewsProps> = memo(
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
      <section className={styles.channel_reviews}>
        <div className={styles.channel_reviews__wrapper}>
          <div className={styles.channel_reviews__marks}>
            <span className={styles.channel_reviews__mark}>
              {mark.toFixed(1)}
            </span>
            <span className={styles.channel_reviews__marks_amount}>
              {reviewsAmount} оценки
            </span>
          </div>

          <div className={styles.channel_reviews__stars}>
            <Channel_reviews__item
              stars_amount={5}
              progress_amount={fiveStarsProgress}
            />
            <Channel_reviews__item
              stars_amount={4}
              progress_amount={fourStarsProgress}
            />
            <Channel_reviews__item
              stars_amount={3}
              progress_amount={threeStarsProgress}
            />
            <Channel_reviews__item
              stars_amount={2}
              progress_amount={twoStarsProgress}
            />
            <Channel_reviews__item
              stars_amount={1}
              progress_amount={oneStarsProgress}
            />
          </div>
        </div>
      </section>
    );
  }
);
