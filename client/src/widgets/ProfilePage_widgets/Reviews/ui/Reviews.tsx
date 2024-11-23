import styles from "./Reviews.module.scss";
import { memo } from "react";

import { reviews_selectOptions } from "../model/Reviews_data";
import { ReviewsProps } from "../model/Reviews_types";
import { ReviewsSelect } from "@/shared/ui-kit/ReviewsSelect";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import { LoadMore } from "@/shared/ui-kit/LoadMore";
import {
  Reviews__item,
  Reviews__itemProps,
} from "@/entities/Global_entities/Reviews__item";

export const Reviews: React.FC<ReviewsProps> = memo(
  ({ reviewsItems }): React.JSX.Element => {
    return (
      <section className={styles.reviews}>
        <ReviewsSelect reviews_selectOptions={reviews_selectOptions} />

        <div className={styles.reviews__wrapper}>
          {reviewsItems.map((reviewItem: Reviews__itemProps, index: number) => (
            <Reviews__item key={reviewItem.text + index} {...reviewItem} />
          ))}
          <LoadMore type={ButtonTypes.RED} className={styles.reviews__more} />
        </div>
      </section>
    );
  },
);
Reviews.displayName = "Reviews";
