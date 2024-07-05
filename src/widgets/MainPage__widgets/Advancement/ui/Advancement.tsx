import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Advancement.module.scss";
import { Link } from "react-router-dom";
import { MainPage_button_red } from "@/shared/ui-kit/MainPage_button_red/ui/MainPage_button_red";

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
          <span className="mainPage__subcaption">
            С Tele
            <span>Works</span>
          </span>

          <p className={styles.advancement__subtext}>
            Сэкономит ваше : время, деньги и нервы. TeleWorks - доверьте ваши
            заботы профессионалам.
          </p>

          <div className={styles.advancement__buttons}>
            <MainPage_button_red
              className={styles.advancement__buttons__start}
              to="/"
              text="Начать"
            />
            <Link className={styles.advancement__buttons__help} to="/">
              Обратиться к специалисту
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
