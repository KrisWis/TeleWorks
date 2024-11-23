import { URL_PART } from "@/shared/const/app";
import styles from "./ReceiveNotifications.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

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
ReceiveNotifications.displayName = "ReceiveNotifications";
