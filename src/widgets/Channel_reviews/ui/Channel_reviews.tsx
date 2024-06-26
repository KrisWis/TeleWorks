import styles from "./Channel_reviews.module.scss";

export const Channel_reviews: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.channel_reviews}>
      <h2 className={styles.channel_reviews__caption}>Отзывы канала</h2>
    </section>
  );
};
