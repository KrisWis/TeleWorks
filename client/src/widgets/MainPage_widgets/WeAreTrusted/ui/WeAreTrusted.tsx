import { URL_PART } from "@/shared/const/app";
import styles from "./WeAreTrusted.module.scss";
import { weAreTrusted__items } from "../model/WeAreTrusted__data";
import { memo } from "react";

export const WeAreTrusted: React.FC = memo((): React.JSX.Element => {
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
        {weAreTrusted__items.map((item, index) => (
          <img
            key={index}
            className={styles.weAreTrusted__item}
            src={item.src}
            alt={item.alt}
          ></img>
        ))}
      </div>
    </section>
  );
});
WeAreTrusted.displayName = "WeAreTrusted";
