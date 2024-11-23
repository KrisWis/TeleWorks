import { memo } from "react";
import styles from "./MeetAdvantages.module.scss";
import MeetAdvantagesSvg from "@/shared/assets/icons/MainPage/MeetAdvantages/MeetAdvantagesSvg.svg?react";

export const MeetAdvantages: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.meetAdvantages}>
      <h3 className={`${styles.meetAdvantages__caption} mainPage__caption`}>
        <span>Познакомьтесь с преимуществами </span>
        работы в TeleWorks
      </h3>

      <div className={styles.meetAdvantages__wrapper}>
        <MeetAdvantagesSvg className={styles.meetAdvantages__svg} />

        <div className={`mainPage__wrapper ${styles.meetAdvantages__text}`}>
          <h4
            className={`mainPage__subcaption ${styles.meetAdvantages__text__caption}`}
          >
            <span>Недостатки </span>
            работы вне площадки TeleWorks
          </h4>

          <ul className={styles.meetAdvantages__text__disadvantages}>
            <li className={styles.meetAdvantages__text__disadvantage}>
              Купить рекламу в накрученном канале.
            </li>
            <li className={styles.meetAdvantages__text__disadvantage}>
              Привлечь на свой канал не целевую и не платежеспособную аудиторию.
            </li>
            <li className={styles.meetAdvantages__text__disadvantage}>
              Потерять и не вернуть денежные средства.
            </li>
            <li className={styles.meetAdvantages__text__disadvantage}>
              Найти безответственного и непрофессионального исполнителя.
            </li>
            <li className={styles.meetAdvantages__text__disadvantage}>
              Заботы с электронным документооборотом
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
MeetAdvantages.displayName = "MeetAdvantages";
