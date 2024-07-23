import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { Channel_stats_item_props } from "../model/Channel_stats_item__types";
import styles from "./Channel_stats_item.module.scss";
import { memo } from "react";

export const Channel_stats_item: React.FC<Channel_stats_item_props> = memo(
  ({ imgURL, caption, amount, stars }): React.JSX.Element => {
    return (
      <div className={styles.channel_stats_item}>
        <img
          className={styles.channel_stats_item__img}
          src={imgURL}
          alt="Изображение рейтинга"
        />
        <h5 className={styles.channel_stats_item__caption}>{caption}</h5>
        <span className={styles.channel_stats_item__amount}>
          {amount}
          {stars && (
            <img
              width={29}
              height={27}
              className={styles.channel_stats_item__star_icon}
              src={`${URL_PART}/ProfilePage/icons/channel_stats__item/Channel_stats__item_star_icon.png`}
              alt="Изображение рейтинга"
            />
          )}
        </span>
      </div>
    );
  }
);
