import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import styles from "./HowItWorks.module.scss";
import { HowItWorksItems } from "../model/HowItWorks__data";
import { HowItWorksItem } from "@/widgets/MainPage_widgets/HowItWorks/ui/HowItWorks__item/model/HowItWorks__types";
import { memo } from "react";
import { HowItWorks__item } from "./HowItWorks__item/ui/HowItWorks__item";

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
