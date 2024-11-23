import styles from "./MarketPlace.module.scss";
import { memo } from "react";
import { MarketPlaceSlider } from "./MarketPlaceSlider/ui/MarketPlaceSlider";

export const MarketPlace: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.marketPlace}>
      <h2 className={`InternalPage__caption ${styles.marketPlace__caption}`}>
        Маркетплейс нативных интеграций в Телеграм :{" "}
        <span>отзывы клиентов</span>
      </h2>

      <MarketPlaceSlider />
    </section>
  );
});
MarketPlace.displayName = "MarketPlace";
