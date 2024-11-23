import { URL_PART } from "@/shared/const/app";
import styles from "./MainSection.module.scss";
import "@/shared/main.scss";
import { MainSection_items } from "../model/MainSection_data";
import { memo } from "react";
import { MainSection_item } from "./MainSection_item/ui/MainSection_item";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { MainSectionItemProps } from "./MainSection_item/model/MainSection_item_types";

export const MainSection: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.mainSection}>
      <h1 className={`${styles.mainSection__caption} Page__caption`}>
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
MainSection.displayName = "MainSection";
