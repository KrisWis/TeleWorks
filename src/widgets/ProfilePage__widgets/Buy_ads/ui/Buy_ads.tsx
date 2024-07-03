import { Buy_ads_calendar } from "@/entities/ProfilePage__entities/Buy_ads__entities/Buy_ads_calendar/ui/Buy_ads_calendar";
import styles from "./Buy_ads.module.scss";
import { Buy_ads_form } from "@/entities/ProfilePage__entities/Buy_ads__entities/Buy_ads_form/ui/Buy_ads_form";

export const Buy_ads: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.buy_ads}>
      <Buy_ads_form />
      <Buy_ads_calendar />
    </section>
  );
};
