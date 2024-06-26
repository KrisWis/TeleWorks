import { Channel_reviews__item__props } from "../model/Channel_reviews__item__types";
import styles from "./Channel_reviews__item.module.scss";
import { ProgressBar } from "primereact/progressbar";
import "./Channel_reviews__item__progressbar.scss";

export const Channel_reviews__item: React.FC<Channel_reviews__item__props> = ({
  stars_amount,
  progress_amount,
}): React.JSX.Element => {
  return (
    <div className={styles.channel_reviews__starsWrapper}>
      <div className={styles.channel_reviews__starsWrapper__stars}>
        {Array(stars_amount).fill(
          <img
            className={styles.channel_reviews__starsWrapper__star}
            src="icons/channel_reviews__item/channel_reviews__item_star_active.png"
            alt="Изображение активной звезды"
          ></img>
        )}
        {Array(5 - stars_amount).fill(
          <img
            className={styles.channel_reviews__starsWrapper__star}
            src="icons/channel_reviews__item/channel_reviews__item_star_disactive.png"
            alt="Изображение пустой звезды"
          ></img>
        )}
      </div>
      <ProgressBar
        className={styles.channel_reviews__starsWrapper__progressbar}
        value={progress_amount}
        showValue={false}
      ></ProgressBar>
    </div>
  );
};
