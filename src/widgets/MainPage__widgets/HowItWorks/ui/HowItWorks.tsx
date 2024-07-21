import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./HowItWorks.module.scss";
import { HowItWorksItems } from "../model/HowItWorks__data";
import { HowItWorksItem } from "@/entities/MainPage__entities/HowItWorks__entities/HowItWorks__item/model/HowItWorks__types";
import { HowItWorks__item } from "@/entities";
import { memo } from "react";

export const HowItWorks: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.howItWorks}>
      <h2 className="mainPage__caption">Как работает платформа?</h2>

      <div className={styles.howItWorks__wrapper}>
        <img
          className={styles.howItWorks__img}
          src={`${URL_PART}/MainPage/images/HowItWorks/HowItWorks__img.png`}
          alt='Изображение для секции "Как работает платформа"'
        />

        <div className={styles.howItWorks__items}>
          {HowItWorksItems.map((item: HowItWorksItem) => (
            <HowItWorks__item key={item.index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
});
