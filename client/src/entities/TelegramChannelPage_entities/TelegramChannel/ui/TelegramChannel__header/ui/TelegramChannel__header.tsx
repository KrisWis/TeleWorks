import { URL_PART } from "@/shared/const/app";
import styles from "./TelegramChannel__header.module.scss";
import { memo } from "react";
import TelegramChannelHeaderIconCircle1 from "@/shared/assets/icons/TelegramChannelPage/TelegramChannel/TelegramChannelHeaderIconCircle1.svg?react";
import TelegramChannelHeaderIconCircle2 from "@/shared/assets/icons/TelegramChannelPage/TelegramChannel/TelegramChannelHeaderIconCircle2.svg?react";
import TelegramChannelHeaderIconCircle3 from "@/shared/assets/icons/TelegramChannelPage/TelegramChannel/TelegramChannelHeaderIconCircle3.svg?react";
import TelegramChannelHeaderStat from "@/shared/assets/icons/TelegramChannelPage/TelegramChannel/TelegramChannelHeaderStat.svg?react";
import { TelegramChannelChannelRating } from "@/shared/ui-kit/TelegramChannelChannelRating";

export const TelegramChannel__header: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.TelegramChannel__header}>
      <div className={styles.TelegramChannel__header__left}>
        <TelegramChannelChannelRating
          rating={509.2}
          backgroundIsVisible={true}
        />

        <div className={styles.TelegramChannel__header__icons}>
          <div className={styles.TelegramChannel__header__icon__circle}>
            <TelegramChannelHeaderIconCircle1 />
          </div>

          <div className={styles.TelegramChannel__header__icon__circle}>
            <TelegramChannelHeaderIconCircle2 />
          </div>

          <div className={styles.TelegramChannel__header__icon__circle}>
            <TelegramChannelHeaderIconCircle3 />
          </div>
        </div>
      </div>

      <div className={styles.TelegramChannel__header__right}>
        <div className={styles.TelegramChannel__header__stat}>
          <TelegramChannelHeaderStat />

          <span className={styles.TelegramChannel__header__stat__text}>
            5.0
          </span>
        </div>

        <div className={styles.TelegramChannel__header__stat}>
          <img
            src={`${URL_PART}/TelegramChannelPage/icons/TelegramChannel__header/stat__views.jpg`}
            alt="Иконка просмотров"
          />

          <span className={styles.TelegramChannel__header__stat__text}>
            5.2K
          </span>
        </div>

        <div className={styles.TelegramChannel__header__stat}>
          <img
            src={`${URL_PART}/TelegramChannelPage/icons/TelegramChannel__header/stat__likes.svg`}
            alt="Иконка лайков"
          />

          <span className={styles.TelegramChannel__header__stat__text}>
            134
          </span>
        </div>

        <img
          className={styles.TelegramChannel__header__share}
          src={`${URL_PART}/TelegramChannelPage/icons/TelegramChannel__header/stat__share.svg`}
          alt='Иконка "Поделиться"'
        />
      </div>
    </div>
  );
});
TelegramChannel__header.displayName = "TelegramChannel__header";
