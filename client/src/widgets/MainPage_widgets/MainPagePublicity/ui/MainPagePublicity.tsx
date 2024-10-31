import { URL_PART } from "@/shared/const/app";
import styles from "./MainPagePublicity.module.scss";
import { memo } from "react";

export const MainPagePublicity: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={`mainPage__wrapper ${styles.MainPagePublicity}`}>
      <div className={styles.MainPagePublicity__wrapper}>
        <h4
          className={`mainPage__subcaption ${styles.MainPagePublicity__subcaption}`}
        >
          <span>Грамотный закуп рекламы</span>, а не слив бюджета
        </h4>

        <div className={styles.MainPagePublicity__info}>
          <p className={styles.MainPagePublicity__info__text}>
            Подберём специалиста для Вашего проекта, который реализует рекламный
            бюджет с максимальной эффективностью
          </p>

          <p className={styles.MainPagePublicity__info__text}>
            Мы тщательно анализируем площадки для покупки рекламы: каждый проект
            детально обсуждается перед запуском рекламной кампании
          </p>

          <p className={styles.MainPagePublicity__info__text}>
            Такой подход обеспечивает целевого подписчика по цене ниже средней
            на рынке
          </p>
        </div>
      </div>

      <img
        className={styles.MainPagePublicity__img}
        src={`${URL_PART}/MainPage/images/MainPagePublicity/MainPagePublicity__img.png`}
        alt="Изображение рутера"
      />
    </section>
  );
});
