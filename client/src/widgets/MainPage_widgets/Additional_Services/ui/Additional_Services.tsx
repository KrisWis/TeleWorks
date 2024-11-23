import { URL_PART } from "@/shared/const/app";
import styles from "./Additional_Services.module.scss";
import { memo } from "react";

export const Additional_Services: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.additionalServices}>
      <h2 className={`${styles.additionalServices__caption} mainPage__caption`}>
        <span>Дополнительные услуги</span> от наших специалистов
      </h2>

      <div
        className={`mainPage__wrapper ${styles.additionalServices__wrapper}`}
      >
        <img
          className={`${styles.additionalServices__img}`}
          src={`${URL_PART}/MainPage/images/other/TelegramNew__img.png`}
          alt="Изображение Telegram"
        />

        <div className={styles.additionalServices__info}>
          <h4 className="mainPage__subcaption">
            Создаем каналы
            <span> под ключ</span>
          </h4>

          <h6 className={styles.additionalServices__info__subcaption}>
            Хотите свой бизнес в Telegram, но не знаете, как?
          </h6>

          <p className={styles.additionalServices__info__text}>
            Мы поможем вам создать свой собственный бизнес в Telegram с нуля.
          </p>

          <p className={styles.additionalServices__info__text}>
            Вам нужно лишь предоставить бюджет и участие, а мы возьмем на себя
            всю остальную работу:
          </p>

          <ul className={styles.additionalServices__info__list}>
            <li className={styles.additionalServices__info__text}>
              1. Мы проведем анализ рынка, подберем прибыльную тематику.
            </li>

            <li className={styles.additionalServices__info__text}>
              2. Разработаем уникальную концепцию.
            </li>

            <li className={styles.additionalServices__info__text}>
              3. Создадим айдентику и наполним канал увлекательным контентом.
            </li>

            <li className={styles.additionalServices__info__text}>
              4. Также запустим рекламную кампанию и поможем обеспечить ваш
              канал продажами.
            </li>
          </ul>

          <h6 className={styles.additionalServices__info__subcaption}>
            Вам останется только смотреть, как деньги поступают на ваш счет.
          </h6>
        </div>
      </div>
    </section>
  );
});
Additional_Services.displayName = "Additional_Services";
