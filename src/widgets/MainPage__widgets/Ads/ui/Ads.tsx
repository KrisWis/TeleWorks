import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Ads.module.scss";

export const Ads: React.FC = (): React.JSX.Element => {
  return (
    <section className={`mainPage__wrapper ${styles.ads}`}>
      <div className={styles.ads__wrapper}>
        <h4 className={`mainPage__subcaption ${styles.ads__subcaption}`}>
          <span>Грамотный закуп рекламы</span>, а не слив бюджета
        </h4>

        <div className={styles.ads__info}>
          <p className={styles.ads__info__text}>
            Подберём специалиста для Вашего проекта, который реализует рекламный
            бюджет с максимальной эффективностью
          </p>

          <p className={styles.ads__info__text}>
            Мы тщательно анализируем площадки для покупки рекламы: каждый проект
            детально обсуждается перед запуском рекламной кампании
          </p>

          <p className={styles.ads__info__text}>
            Такой подход обеспечивает целевого подписчика по цене ниже средней
            на рынке
          </p>
        </div>
      </div>

      <img
        className={styles.ads__img}
        src={`${URL_PART}/MainPage/images/Ads/Ads__img.png`}
        alt="Изображение рутера"
      />
    </section>
  );
};
