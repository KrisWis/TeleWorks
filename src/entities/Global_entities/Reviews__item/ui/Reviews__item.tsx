import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Reviews__item.module.scss";
import { memo } from "react";
import { Reviews__itemProps } from "../model/Reviews__item_types";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { ReportBug } from "@/shared/ui-kit/ReportBug";

export const Reviews__item: React.FC<Reviews__itemProps> = memo(
  ({ author, extraInfo, imgURL, date, text, stars }): React.JSX.Element => {
    const active_stars__array: string[] = Array(stars).fill("active");

    return (
      <div className={styles.reviews__item}>
        <div className={styles.reviews__item__header}>
          <div className={styles.reviews__item__userInfo}>
            <Avatar imgURL={imgURL} imgSize={AvatarSizes.MEDIUM} />

            <div className={styles.reviews__item__bio}>
              <span className={styles.reviews__item__username}>@{author}</span>
              <span className={styles.reviews__item__seniority}>
                {extraInfo}
              </span>
            </div>
          </div>
          <time className={styles.reviews__item__date}>{date}</time>
        </div>
        <p className={styles.reviews__item__text}>{text}</p>
        <div className={styles.reviews__item__starsWrapper}>
          <div className={styles.reviews__item__stars}>
            {active_stars__array.map((_, index) => (
              <img
                key={_ + index}
                className={styles.reviews__item__star}
                src={`${URL_PART}/ProfilePage/icons/ReviewsPanel__item/ReviewsPanel__item_star_active.png`}
                alt="Изображение звезды"
              ></img>
            ))}
            <span className={styles.reviews__item__rating}>
              {stars.toFixed(1)}
            </span>
          </div>

          <ReportBug />
        </div>
      </div>
    );
  }
);
