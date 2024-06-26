import { Channel_reviews__item } from "@/entities";
import styles from "./Channel_reviews.module.scss";

export const Channel_reviews: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.channel_reviews}>
      <h2 className={styles.channel_reviews__caption}>Отзывы канала</h2>

      <div className={styles.channel_reviews__wrapper}>
        <div className={styles.channel_reviews__marks}>
          <span className={styles.channel_reviews__mark}>5.0</span>
          <span className={styles.channel_reviews__marks_amount}>
            484 оценки
          </span>
        </div>

        <div className={styles.channel_reviews__stars}>
          <Channel_reviews__item stars_amount={5} progress_amount={100} />
          <Channel_reviews__item stars_amount={4} progress_amount={80} />
          <Channel_reviews__item stars_amount={3} progress_amount={0} />
          <Channel_reviews__item stars_amount={2} progress_amount={0} />
          <Channel_reviews__item stars_amount={1} progress_amount={0} />
        </div>
      </div>
    </section>
  );
};
