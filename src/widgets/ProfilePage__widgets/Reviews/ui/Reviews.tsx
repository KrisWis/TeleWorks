import { Reviews__item, Reviews_select } from "@/entities";
import styles from "./Reviews.module.scss";

export const Reviews: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.reviews}>
      <Reviews_select />
      <div className={styles.reviews__wrapper}>
        <Reviews__item />
        <Reviews__item />
        <button className={styles.reviews__more}>Загрузить ещё</button>
      </div>
    </section>
  );
};
