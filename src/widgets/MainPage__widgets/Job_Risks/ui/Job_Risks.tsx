import { memo } from "react";
import styles from "./Job_Risks.module.scss";

export const Job_Risks: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={`mainPage__wrapper ${styles.job_Risks}`}>
      <h4 className={`mainPage__subcaption ${styles.job_Risks__caption}`}>
        <span>Риски работы</span> с гарантами, вне площадки teleworks
      </h4>

      <svg
        className={styles.job_Risks__svg}
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.5746 88.3111C81.9832 99.7166 99.7474 82.014 88.3087 70.575L63.7358 46L88.3087 21.4266C99.7156 10.0178 82.015 -7.74678 70.5746 3.69048L46 28.2639L21.4254 3.68885C10.0168 -7.71664 -7.7474 9.98602 3.69131 21.425L28.2642 46L3.69131 70.5734C-7.71563 81.9822 9.98503 99.7468 21.4254 88.3095L46 63.7361L70.5746 88.3111Z"
          fill="#E5E5E5"
        />
      </svg>

      <div className={styles.job_Risks__info}>
        <h6 className={styles.job_Risks__subcaption}>
          Попасть в руки фейкового гаранта
        </h6>

        <p className={styles.job_Risks__text}>
          Вы можете стать жертвой запланированного сговора между поддельным
          гарантом и покупателем
        </p>
      </div>

      <svg
        className={styles.job_Risks__svg}
        width="92"
        height="92"
        viewBox="0 0 92 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.5746 88.3111C81.9832 99.7166 99.7474 82.014 88.3087 70.575L63.7358 46L88.3087 21.4266C99.7156 10.0178 82.015 -7.74678 70.5746 3.69048L46 28.2639L21.4254 3.68885C10.0168 -7.71664 -7.7474 9.98602 3.69131 21.425L28.2642 46L3.69131 70.5734C-7.71563 81.9822 9.98503 99.7468 21.4254 88.3095L46 63.7361L70.5746 88.3111Z"
          fill="#E5E5E5"
        />
      </svg>

      <div className={styles.job_Risks__info}>
        <h6 className={styles.job_Risks__subcaption}>
          Покупка накрученного либо не прибыльного проекта
        </h6>

        <p className={styles.job_Risks__text}>
          Впустую потраченные и неоправданные денежные средства
        </p>
      </div>
    </section>
  );
});
