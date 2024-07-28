import styles from "./Reviews.module.scss";
import { memo } from "react";
import { Reviews__item } from "../../../../entities/Global_entities/Reviews__item/ui/Reviews__item";
import { reviews_selectOptions } from "../model/Reviews_data";
import { ReviewsProps } from "../model/Reviews_types";
import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";
import { ReviewsSelect } from "@/shared";

export const Reviews: React.FC<ReviewsProps> = memo(
  ({ reviewsItems }): React.JSX.Element => {
    return (
      <section className={styles.reviews}>
        <ReviewsSelect reviews_selectOptions={reviews_selectOptions} />

        <div className={styles.reviews__wrapper}>
          {reviewsItems.map((reviewItem: Reviews__itemProps, index: number) => (
            <Reviews__item key={reviewItem.text + index} {...reviewItem} />
          ))}
          <button className={styles.reviews__more}>Загрузить ещё</button>
        </div>
      </section>
    );
  }
);
