import { URL_PART } from "@/shared/const/app";
import styles from "./Reviews__item.module.scss";
import { memo } from "react";
import { Reviews__itemProps } from "@/shared/types/user";
import { Avatar, AvatarSizes } from "@/shared/ui-kit/Avatar";
import { ReportBug } from "@/shared/ui-kit/ReportBug";

export const Reviews__item: React.FC<Reviews__itemProps> = memo(
  ({
    author,
    extraInfo,
    imgURL,
    date,
    text,
    stars,
    project,
  }): React.JSX.Element => {
    const active_stars__array: string[] = Array(stars).fill("active");

    return (
      <div className={styles.reviews__item}>
        <div className={styles.reviews__item__firstCol}>
          <div className={styles.reviews__item__userInfo}>
            <Avatar imgURL={imgURL} imgSize={AvatarSizes.MEDIUM} />

            <div className={styles.reviews__item__bio}>
              <span className={styles.reviews__item__username}>@{author}</span>
              <span className={styles.reviews__item__seniority}>
                {extraInfo}
              </span>
            </div>
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
          </div>
        </div>

        <div className={styles.reviews__item__secondCol}>
          <time
            className={`${styles.reviews__item__date} ${project ? styles.reviews__item__date__small : ""}`}
          >
            {date}
          </time>

          {project && (
            <div className={styles.reviews__item__project}>
              <img
                className={styles.reviews__item__project__img}
                src={project.imgURL}
                alt={project.title}
              />

              <div className={styles.reviews__item__project__info}>
                <span className={styles.reviews__item__project__title}>
                  {project.title}
                </span>

                <span className={styles.reviews__item__project__price}>
                  {project.price} ₽
                </span>
              </div>
            </div>
          )}

          <ReportBug className={styles.reviews__item__reportBug} />
        </div>
      </div>
    );
  }
);
