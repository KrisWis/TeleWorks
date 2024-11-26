import { URL_PART } from "@/shared/const/app";
import styles from "./TelegramChannel__body.module.scss";
import { memo } from "react";
import { AvatarSizes } from "@/shared/ui-kit/Avatar";
import { TelegramChannelAvatar } from "@/shared/ui-kit/TelegramChannelAvatar";

export const TelegramChannel__body: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.TelegramChannel__body}>
      <TelegramChannelAvatar
        src={`${URL_PART}/TelegramChannelPage/images/other/default-user.png`}
        size={AvatarSizes.BIG}
      />

      <h2 className={styles.TelegramChannel__body__avatar__caption}>
        Квартира мечты!
      </h2>
      <span className={styles.TelegramChannel__body__avatar__category}>
        Интерьер и строительство
      </span>

      <div className={styles.TelegramChannel__body__channel_info}>
        <div className={styles.TelegramChannel__body__channel_link}>
          <img
            className={styles.TelegramChannel__body__channel_link__icon}
            src={`${URL_PART}/TelegramChannelPage/icons/TelegramChannel__body/channel_link.png`}
            alt="Изображение иконки ссылки"
          />
          <a
            className={styles.TelegramChannel__body__channel_link__text}
            href="#"
          >
            https://t.me/silka
          </a>
        </div>

        <p className={styles.TelegramChannel__body__channel_info_text}>
          Пример текста описания канала: поможем с поиском и покупкой квартиры!
          У нас только проверенные решения!
        </p>

        <img
          className={styles.TelegramChannel__body__channel_info_line}
          src={`${URL_PART}/TelegramChannelPage/icons/TelegramChannel__body/TelegramChannel__line_separator.png`}
          alt="Разделительная строка в профиле"
        />

        <div className={styles.TelegramChannel__body__channel_info__categories}>
          <div className={styles.TelegramChannel__body__channel_info__category}>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_caption
              }
            >
              Вид трафика
            </span>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_desc
              }
            >
              Telegram
            </span>
          </div>

          <div className={styles.TelegramChannel__body__channel_info__category}>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_caption
              }
            >
              Вид поста
            </span>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_desc
              }
            >
              Прямой
            </span>
          </div>

          <div className={styles.TelegramChannel__body__channel_info__category}>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_caption
              }
            >
              Целевая ауд.
            </span>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_desc
              }
            >
              МЦА
            </span>
          </div>

          <div className={styles.TelegramChannel__body__channel_info__category}>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_caption
              }
            >
              Вид ссылки
            </span>
            <span
              className={
                styles.TelegramChannel__body__channel_info__category_desc
              }
            >
              Публичный канал
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
TelegramChannel__body.displayName = "TelegramChannel__body";
