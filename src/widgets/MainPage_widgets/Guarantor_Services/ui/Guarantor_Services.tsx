import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Guarantor_Services.module.scss";
import { memo } from "react";

export const Guarantor_Services: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={`mainPage__wrapper ${styles.guarantor_Services}`}>
      <img
        className={styles.guarantor_Services__img}
        src={`${URL_PART}/MainPage/images/Guarantor_Services/Guarantor_Services__img.png`}
        alt="Изображение медали"
      />

      <div className={styles.guarantor_Services__info}>
        <h4 className="mainPage__subcaption">
          Услуги<span> гаранта</span>
        </h4>

        <h6 className={styles.guarantor_Services__subtitle}>
          Обеспечим безопасное проведение сделки
        </h6>

        <p className={styles.guarantor_Services__text}>
          При покупке-продаже канала важно помнить о том, что вас могут
          обмануть. Но если сделку будут проводить наши специалисты нашей
          компании, вы можете не переживать, и доверить дело профессионалам
        </p>
      </div>
    </section>
  );
});
