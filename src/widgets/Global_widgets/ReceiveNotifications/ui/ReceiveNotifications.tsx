import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./ReceiveNotifications.module.scss";
import "@/pages/MyProjectsPage/ui/MyProjectsPage.scss";
import { Button, ButtonTypes } from "@/shared";
import { memo } from "react";

export const ReceiveNotifications: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.receiveNotifications__wrapper}>
      <div className={`MyProjectsPage__wrapper ${styles.receiveNotifications}`}>
        <div className={styles.receiveNotifications__text}>
          <h4 className={styles.receiveNotifications__caption}>
            Получайте уведомления в Telegram
          </h4>

          <p className={styles.receiveNotifications__desc}>
            Подписывайтесь на чат-бота в Telegram, чтобы оперативно получать
            оповещения о новых заявках
          </p>
        </div>

        <img
          className={styles.receiveNotifications__img}
          src={`${URL_PART}/global/images/TelegramNotifications.png`}
          alt="Telegram"
        />

        <form className={styles.receiveNotifications__form}>
          <input
            className={styles.receiveNotifications__form_input}
            type="text"
            placeholder="@name"
          />

          <Button
            className={styles.receiveNotifications__form_button}
            type={ButtonTypes.RED}
            text="Подписаться"
          />
        </form>
      </div>
    </section>
  );
});
