import { ReviewsPanel__item__props } from "../model/ReviewsPanel__item__types";
import styles from "./ReviewsPanel__item.module.scss";
import { ProgressBar } from "primereact/progressbar";
import "./ReviewsPanel__item__progressbar.scss";
import { URL_PART } from "@/shared/const/app";
import { memo, useMemo } from "react";

export const ReviewsPanel__item: React.FC<ReviewsPanel__item__props> = memo(
  ({ stars_amount, progress_amount }): React.JSX.Element => {
    const active_stars__array: string[] = useMemo(
      () => Array(stars_amount).fill("active"),
      [stars_amount]
    );
    const disactive_stars__array: string[] = useMemo(
      () => Array(5 - stars_amount).fill("disactive"),
      [stars_amount]
    );

    return (
      <div className={styles.ReviewsPanel__starsWrapper}>
        <div className={styles.ReviewsPanel__starsWrapper__stars}>
          {active_stars__array.map((_, index) => (
            <img
              key={_ + index}
              className={styles.ReviewsPanel__starsWrapper__star}
              src={`${URL_PART}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`}
              alt="Изображение активной звезды"
            ></img>
          ))}
          {disactive_stars__array.map((_, index) => (
            <img
              key={_ + index}
              className={styles.ReviewsPanel__starsWrapper__star}
              src={`${URL_PART}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_disactive.png`}
              alt="Изображение пустой звезды"
            ></img>
          ))}
        </div>
        <ProgressBar
          aria-labelledby={`Рейтинг канала в ${stars_amount} звёздах`}
          className={styles.ReviewsPanel__starsWrapper__progressbar}
          value={progress_amount}
          showValue={false}
        ></ProgressBar>
      </div>
    );
  }
);
