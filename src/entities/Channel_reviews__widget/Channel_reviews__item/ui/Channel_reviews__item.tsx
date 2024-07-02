import { Channel_reviews__item__props } from "../model/Channel_reviews__item__types";
import styles from "./Channel_reviews__item.module.scss";
import { ProgressBar } from "primereact/progressbar";
import "./Channel_reviews__item__progressbar.scss";
import { URL_PART } from "@/app/layouts/model/BaseLayout__data";

export const Channel_reviews__item: React.FC<Channel_reviews__item__props> = ({
  stars_amount,
  progress_amount,
}): React.JSX.Element => {
  const active_stars__array: string[] = Array(stars_amount).fill("active");
  const disactive_stars__array: string[] = Array(5 - stars_amount).fill(
    "disactive"
  );

  return (
    <div className={styles.channel_reviews__starsWrapper}>
      <div className={styles.channel_reviews__starsWrapper__stars}>
        {active_stars__array.map((_, index) => (
          <img
            key={_ + index}
            className={styles.channel_reviews__starsWrapper__star}
            src={`${URL_PART}/icons/channel_reviews__item/channel_reviews__item_star_active.png`}
            alt="Изображение активной звезды"
          ></img>
        ))}
        {disactive_stars__array.map((_, index) => (
          <img
            key={_ + index}
            className={styles.channel_reviews__starsWrapper__star}
            src={`${URL_PART}/icons/channel_reviews__item/channel_reviews__item_star_disactive.png`}
            alt="Изображение пустой звезды"
          ></img>
        ))}
      </div>
      <ProgressBar
        aria-labelledby={`Рейтинг канала в ${stars_amount} звёздах`}
        className={styles.channel_reviews__starsWrapper__progressbar}
        value={progress_amount}
        showValue={false}
      ></ProgressBar>
    </div>
  );
};
