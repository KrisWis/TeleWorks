import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Advancement.module.scss";
import { Button } from "@/shared";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";
import { memo } from "react";

export const Advancement: React.FC = memo((): React.JSX.Element => {
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
            <Button
              type={ButtonTypes.RED}
              className={styles.advancement__buttons__start}
              to="/"
              text="Начать"
            />

            <Button
              type={ButtonTypes.GRAY}
              className={styles.advancement__buttons__help}
              to="/"
              text="Обратиться к специалисту"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
