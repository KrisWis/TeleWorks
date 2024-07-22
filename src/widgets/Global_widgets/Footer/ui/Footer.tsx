import styles from "./Footer.module.scss";

export const Footer: React.FC = (): React.JSX.Element => {
  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.footer__wrapper}>
        <h5 className={styles.footer__logo}>
          Tele<span>Works</span>
        </h5>

        <span className={styles.footer__text}>© 2024 TeleWork</span>
      </div>

      <div className={styles.footer__links}>
        <h6 className={styles.footer__text}>Продукты</h6>

        <ul className={styles.footer__links__items}>
          <li className={styles.footer__links__item}>
            <a href="https://telega.in/catalog">Каталог Telegram-каналов</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/package">Готовые предложения</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/hot_orders">Горящие предложения</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/catalog_bots">Каталог Telegram-ботов</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/analytics">Аналитика</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://t.me/telega_best_bot?start=lang-ru">
              Бот горящих предложений
            </a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://t.me/telega_best_bot?start=lang-ru">
              Бот нотификаций
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__links}>
        <h6 className={styles.footer__text}>Сообщество</h6>

        <ul className={styles.footer__links__items}>
          <li className={styles.footer__links__item}>
            <a href="https://telega.in/webmaster">Владельцам каналов</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/referral">Партнерская программа</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/blog">Блог</a>
          </li>

          <li className={styles.footer__links__item}>
            <a href="https://telega.in/blog/rynok-prodvijenia-v-telegram-za-2021-vyros-na-70-i-sostavil-21-7-mlrd-r">
              Исследование рынка
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__wrapper}>
        <div className={styles.footer__links}>
          <h6 className={styles.footer__text}>Помощь</h6>

          <ul className={styles.footer__links__items}>
            <li className={styles.footer__links__item}>
              <a href="https://telega.in/faq">FAQ</a>
            </li>

            <li className={styles.footer__links__item}>
              <a href="https://help.telega.in/hc/ru">База знаний</a>
            </li>

            <li className={styles.footer__links__item}>
              <a href="https://telega.in/feedback">Напишите нам</a>
            </li>
          </ul>
        </div>

        <span className={styles.footer__text}>Политика конфиденциальности</span>
      </div>
    </footer>
  );
};
