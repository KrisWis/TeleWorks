import styles from "./ProjectReviews.module.scss";
import { memo } from "react";
import { ProjectReviewsProps } from "../model/ProjectReviews_types";
import { ReviewsPanel } from "@/widgets";
import { reviews_selectOptions } from "../model/ProjectReviews_data";
import { Button, ButtonTypes, ReviewsSelect } from "@/shared";
import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";
import { ReviewsItem } from "@/entities";

export const ProjectReviews: React.FC<ProjectReviewsProps> = memo(
  ({ channelReviewsProps, reviewsItems }): React.JSX.Element => {
    return (
      <div className={styles.projectReviews}>
        <div className={styles.projectReviews__header}>
          <h2 className="ProjectPage__caption">Отзывы проекта</h2>

          <ReviewsSelect reviews_selectOptions={reviews_selectOptions} />
        </div>

        <ReviewsPanel {...channelReviewsProps} />

        <div className={styles.projectReviews__reviews}>
          {reviewsItems.map((reviewsItem: Reviews__itemProps) => (
            <ReviewsItem
              key={reviewsItem.author + reviewsItem.date + reviewsItem.text}
              {...reviewsItem}
            />
          ))}
        </div>

        <Button
          className={styles.projectReviews__reviews__more}
          type={ButtonTypes.RED}
          text="Загрузить ещё"
        />
      </div>
    );
  }
);
