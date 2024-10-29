import styles from "./ProjectReviews.module.scss";
import { memo } from "react";
import { ProjectReviewsProps } from "../model/ProjectReviews_types";
import { reviews_selectOptions } from "../model/ProjectReviews_data";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import { ReviewsPanel } from "@/widgets/Global_widgets/ReviewsPanel";
import { ReviewsSelect } from "@/shared/ui-kit/ReviewsSelect";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import {
  Reviews__item,
  Reviews__itemProps,
} from "@/entities/Global_entities/Reviews__item";

export const ProjectReviews: React.FC<ProjectReviewsProps> = memo(
  ({ ReviewsPanelProps, reviewsItems }): React.JSX.Element => {
    return (
      <div className={styles.projectReviews}>
        <div className={styles.projectReviews__header}>
          <h2 className="ProjectPage__caption">Отзывы проекта</h2>

          <ReviewsSelect reviews_selectOptions={reviews_selectOptions} />
        </div>

        <ReviewsPanel {...ReviewsPanelProps} />

        <div className={styles.projectReviews__reviews}>
          {reviewsItems.map((reviewsItem: Reviews__itemProps) => (
            <Reviews__item
              key={reviewsItem.author + reviewsItem.date + reviewsItem.text}
              {...reviewsItem}
            />
          ))}
        </div>

        <LoadMore
          className={styles.projectReviews__reviews__more}
          type={ButtonTypes.RED}
        />
      </div>
    );
  }
);
