import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Reviews__item.module.scss";

export const Reviews__item: React.FC = (): React.JSX.Element => {
  const active_stars__array: string[] = Array(5).fill("active");
  return (
    <div className={styles.reviews__item}>
      <div className={styles.reviews__item__header}>
        <div className={styles.reviews__item__userInfo}>
          <img
            className={styles.reviews__item__avatar}
            src={`${URL_PART}/images/other/default-user.png`}
            alt="Аватарка пользователя"
          />
          <div className={styles.reviews__item__bio}>
            <span className={styles.reviews__item__username}>@inan_ivanov</span>
            <span className={styles.reviews__item__seniority}>
              Доп. информация в виде стажа
            </span>
          </div>
        </div>
        <time className={styles.reviews__item__date}>16.07.2024</time>
      </div>
      <p className={styles.reviews__item__text}>
        Быстрое и удобно, сервис рекомендую👍!
      </p>
      <div className={styles.reviews__item__starsWrapper}>
        <div className={styles.reviews__item__stars}>
          {active_stars__array.map((_, index) => (
            <img
              key={_ + index}
              className={styles.reviews__item__star}
              src={`${URL_PART}/icons/channel_reviews__item/channel_reviews__item_star_active.png`}
              alt="Изображение звезды"
            ></img>
          ))}
          <span className={styles.reviews__item__rating}>5.0</span>
        </div>

        <div className={styles.reviews__item__report}>
          <span className={styles.reviews__item__report_text}>
            Сообщить об ошибке
          </span>
          <div className={styles.reviews__item__report__svg}>
            <svg
              width="42"
              height="36"
              viewBox="0 0 42 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.268 0.999999C20.0378 -0.333334 21.9622 -0.333333 22.732 1L40.9186 32.5C41.6884 33.8333 40.7261 35.5 39.1865 35.5H2.81347C1.27387 35.5 0.311615 33.8333 1.08142 32.5L19.268 0.999999Z"
                fill="#D9D9D9"
              />
            </svg>
            <span className={styles.reviews__item__report__sign}>!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
