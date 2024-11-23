import { Buy_ads_form } from "@/features/ProfilePage_features/Buy_ads_form";
import styles from "./Buy_ads.module.scss";
import { memo } from "react";
import { Buy_ads_calendar } from "@/features/ProfilePage_features/Buy_ads_calendar";

export const Buy_ads: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.buy_ads}>
      <Buy_ads_form />
      <Buy_ads_calendar />
    </section>
  );
});
Buy_ads.displayName = "Buy_ads";
