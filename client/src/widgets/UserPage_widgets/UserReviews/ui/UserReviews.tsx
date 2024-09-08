import styles from "./UserReviews.module.scss";
import { memo } from "react";
import { UserReviewsProps } from "../model/UserReviews_types";
import { ReviewsSelect } from "@/shared/ui-kit/ReviewsSelect";
import { ReviewsPanel } from "@/widgets/Global_widgets/ReviewsPanel";
import { ReviewsItem } from "@/entities/Global_entities/Reviews__item";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import { userReviewsSelectOptions } from "../model/UserReviews_data";

export const UserReviews: React.FC<UserReviewsProps> = memo(
  ({ ReviewsPanelProps, reviewsItems }): React.JSX.Element => {
    return (
      <div className={styles.UserReviews}>
        <div className={styles.UserReviews__header}>
          <h2 className="UserPage__caption">Отзывы Исполнителя</h2>

          <ReviewsSelect reviews_selectOptions={userReviewsSelectOptions} />
        </div>

        <ReviewsPanel {...ReviewsPanelProps} />

        <div className={styles.UserReviews__reviews}>
          {reviewsItems.map((reviewsItem) => (
            <ReviewsItem
              key={reviewsItem.author + reviewsItem.date + reviewsItem.text}
              {...reviewsItem}
            />
          ))}
        </div>

        <LoadMore
          className={styles.UserReviews__reviews__more}
          type={ButtonTypes.RED}
        />
      </div>
    );
  }
);
