import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Advancement.module.scss";
import { Link } from "react-router-dom";

export const Advancement: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.advancement}>
      <img
        className={styles.advancement__img}
        src={`${URL_PART}/MainPage/images/Advancement/Advancement__img.webp`}
        alt='Фоновое изображение для секции "Продвижение'
      />

      <div className={styles.advancement__information}>
        <h2 className={styles.advancement__caption}>Продвижение</h2>

        <div className={styles.advancement__info}>
          <span className={styles.advancement__subtitle}>
            С Tele
            <span className={styles.advancement__subtitle__sub}>Works</span>
          </span>

          <p className={styles.advancement__subtext}>
            Сэкономит ваше : время, деньги и нервы. TeleWorks - доверьте ваши
            заботы профессионалам.
          </p>

          <div className={styles.advancement__buttons}>
            <Link className={styles.advancement__buttons__start} to="/">
              Начать
            </Link>
            <Link className={styles.advancement__buttons__help} to="/">
              Обратиться к специалисту
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
