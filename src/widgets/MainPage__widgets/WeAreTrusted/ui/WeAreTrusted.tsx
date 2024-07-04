import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./WeAreTrusted.module.scss";
import { weAreTrusted__items } from "../model/WeAreTrusted__data";

export const WeAreTrusted: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.weAreTrusted}>
      <div className={styles.weAreTrusted__wrapper}>
        <img
          className={styles.weAreTrusted__img}
          src={`${URL_PART}/MainPage/images/WeAreTrusted/WeAreTrusted__img.png`}
          alt='Изображение для секции "Нам доверяют..."'
        />
        <h4 className={`${styles.weAreTrusted__caption} mainPage__caption`}>
          <span>Нам доверяют крупные компании: </span>
          Предоставляем счета и акты, работаем с ЭДО
        </h4>
      </div>

      <div className={styles.weAreTrusted__items}>
        {weAreTrusted__items.map((item) => (
          <img
            className={styles.weAreTrusted__item}
            src={item.src}
            alt={item.alt}
          ></img>
        ))}
      </div>
    </section>
  );
};
