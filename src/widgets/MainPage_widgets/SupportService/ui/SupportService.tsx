import { URL_PART } from "@/app/ui/layouts/model/BaseLayout__data";
import styles from "./SupportService.module.scss";
import { Button, ButtonTypes } from "@/shared";
import { memo } from "react";

export const SupportService: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.supportService}>
      <h5 className={`mainPage__caption ${styles.supportService__caption}`}>
        Наша служба поддержки <span>24/7 с вами</span>
      </h5>

      <p className={styles.supportService__text}>
        Возникли вопросы? Мы их решим! Свяжитесь с нами:
      </p>

      <div className={styles.supportService__support}>
        <img
          className={styles.supportService__support__img}
          src={`${URL_PART}/MainPage/images/other/TelegramNew__img.png`}
          alt="Изображение Telegram"
        />
        <Button
          className={styles.supportService__support__button}
          to="/"
          text="Тех поддержка"
          type={ButtonTypes.RED}
        />
      </div>
    </section>
  );
});
