import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./SupportService.module.scss";
import { MainPage_button_red } from "@/shared/ui-kit/MainPage_button_red/ui/MainPage_button_red";

export const SupportService: React.FC = (): React.JSX.Element => {
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
        <MainPage_button_red
          className={styles.supportService__support__button}
          to="/"
          text="Тех поддержка"
        />
      </div>
    </section>
  );
};
