import styles from "./MeetAdvantages.module.scss";

export const MeetAdvantages: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.meetAdvantages}>
      <h3 className={`${styles.meetAdvantages__caption} mainPage__caption`}>
        <span>Познакомьтесь с преимуществами </span>
        работы в TeleWorks
      </h3>

      <div className={styles.meetAdvantages__wrapper}>
        <svg
          className={styles.meetAdvantages__svg}
          width="196"
          height="196"
          viewBox="0 0 196 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150.355 188.141C174.66 212.44 212.505 174.725 188.136 150.356L135.785 98L188.136 45.6479C212.438 21.3422 174.728 -16.504 150.355 7.86233L98 60.2144L45.6455 7.85885C21.3401 -16.4398 -16.5053 21.2746 7.86409 45.6445L60.2151 98L7.86409 150.352C-16.4377 174.658 21.2725 212.504 45.6455 188.138L98 135.786L150.355 188.141Z"
            fill="#E5E5E5"
          />
        </svg>

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
};
