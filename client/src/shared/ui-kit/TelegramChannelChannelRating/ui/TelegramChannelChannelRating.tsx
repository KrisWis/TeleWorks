import styles from "./TelegramChannelChannelRating.module.scss";
import { memo } from "react";
import { TelegramChannelChannelRatingProps } from "../model/TelegramChannelChannelRating_types";
import TelegramChannelChannelRatingSVG from "@/shared/assets/icons/Shared/TelegramChannelChannelRating/TelegramChannelChannelRating.svg?react";

export const TelegramChannelChannelRating: React.FC<TelegramChannelChannelRatingProps> =
  memo(({ backgroundIsVisible, rating }): React.JSX.Element => {
    return (
      <div
        className={`${styles.TelegramChannelChannelRating} ${backgroundIsVisible ? styles.TelegramChannelChannelRating__background : ""}`}
      >
        <TelegramChannelChannelRatingSVG
          className={styles.TelegramChannelChannelRating__svg}
        />

        <span className={styles.TelegramChannelChannelRating__text}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  });
TelegramChannelChannelRating.displayName = "TelegramChannelChannelRating";
