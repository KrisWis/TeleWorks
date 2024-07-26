import { URL_PART } from "@/app/ui/layouts/model/BaseLayout__data";
import styles from "./Transaction_Advantage.module.scss";
import { memo } from "react";

export const Transaction_Advantage: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.transaction_Advantage}>
      <div className={styles.transaction_Advantage__wrapper}>
        <h4
          className={`mainPage__caption ${styles.transaction_Advantage__caption}`}
        >
          <span>Преимущество сделок</span> гарантов с teleworks
        </h4>

        <div
          className={`mainPage__wrapper ${styles.transaction_Advantage__block__1}`}
        >
          <img
            className={styles.transaction_Advantage__imgFire}
            src={`${URL_PART}/MainPage/images/Transaction_Advantage/Transaction_Advantage__fire.png`}
            alt="Изображение огня"
          />
          <h6
            className={`mainPage__caption ${styles.transaction_Advantage__subcaption}`}
          >
            Горящие предложения от владельцев каналов и исполнителей{" "}
            <span>со скидками от 20%</span>
          </h6>
        </div>
      </div>

      <div className={styles.transaction_Advantage__wrapper}>
        <div
          className={`mainPage__wrapper ${styles.transaction_Advantage__block__2}`}
        >
          <ul className={styles.transaction_Advantage__ul}>
            <li className={styles.transaction_Advantage__li}>
              Проверенные гаранты, давно работающие на площадке{" "}
              <span>telegram</span>
            </li>

            <li className={styles.transaction_Advantage__li}>
              Прозрачные сделки внутри площадки
            </li>

            <li className={styles.transaction_Advantage__li}>
              Ответственность площадки за выполнение всех{" "}
              <span>обязательств гарантов предоставляемые teleworks</span>
            </li>

            <li className={styles.transaction_Advantage__li}>
              Возможность выбора подходящего гаранта
            </li>
          </ul>
        </div>

        <div
          className={`mainPage__wrapper ${styles.transaction_Advantage__block__3}`}
        >
          <img
            className={styles.transaction_Advantage__imgLike}
            src={`${URL_PART}/MainPage/images/Transaction_Advantage/Transaction_Advantage__like.png`}
            alt="Изображение огня"
          />
          <h6
            className={`mainPage__caption ${styles.transaction_Advantage__subcaption} ${styles.transaction_Advantage__subcaption__block3}`}
          >
            Ваша площадка нативных интеграций в Telegram и услуг TeleWorks:
            <span> реальные отзывы наших клиентов</span>
          </h6>
        </div>
      </div>
    </section>
  );
});
