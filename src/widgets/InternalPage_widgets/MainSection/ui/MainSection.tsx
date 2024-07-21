import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./MainSection.module.scss";
import "@/shared/main.scss";
import { MainSection_items } from "../model/MainSection_data";
import { MainSectionItemProps } from "@/entities/InternalPage__entities/MainSection__entities/MainSection_item/model/MainSection_item_types";
import { MainSection_item } from "@/entities";
import { Button } from "@/shared";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";
import { memo } from "react";

export const MainSection: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.mainSection}>
      <h1 className={`${styles.mainSection__caption} page__caption`}>
        <span>Зарабатывайте</span> на своем Телеграм-канале или боте:
      </h1>

      <div className={styles.mainSection__wrapper}>
        <div className={styles.mainSection__info}>
          <span className={styles.mainSection__logo}>
            С Tele<span>Works</span>
          </span>
          <p className={styles.mainSection__desc}>
            стабильный приток заказов и автоматические выплаты!
          </p>
        </div>

        <img
          className={styles.mainSection__img}
          src={`${URL_PART}/InternalPage/images/mainSection_img.png`}
          alt="Изображение телефона из которого вылетает Telegram"
        />
      </div>

      <div className={styles.mainSection__items}>
        {MainSection_items.map((item: MainSectionItemProps) => (
          <MainSection_item key={item.title} {...item} />
        ))}
      </div>

      <Button
        text="Добавить канал или бота"
        type={ButtonTypes.RED}
        className={styles.mainSection__button}
        to="https://telega.in/channels"
      />
    </section>
  );
});
