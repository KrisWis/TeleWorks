import { MarketPlaceSlider } from "@/features";
import styles from "./MarketPlace.module.scss";

export const MarketPlace: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.marketPlace}>
      <h2 className={`InternalPage__caption ${styles.marketPlace__caption}`}>
        Маркетплейс нативных интеграций в Телеграм :{" "}
        <span>отзывы клиентов</span>
      </h2>

      <MarketPlaceSlider />
    </section>
  );
};
