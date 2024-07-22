import { Buy_ads_calendar, Buy_ads_form } from "@/features";
import styles from "./Buy_ads.module.scss";
import { memo } from "react";

export const Buy_ads: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.buy_ads}>
      <Buy_ads_form />
      <Buy_ads_calendar />
    </section>
  );
});
