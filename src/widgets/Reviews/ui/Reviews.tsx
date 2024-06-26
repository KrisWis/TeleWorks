import { Reviews_select } from "@/entities";
import styles from "./Reviews.module.scss";

export const Reviews: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.reviews}>
      <Reviews_select />
    </section>
  );
};
