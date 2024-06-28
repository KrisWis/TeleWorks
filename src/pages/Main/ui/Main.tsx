import {
  Buy_ads,
  Channel_reviews,
  Channel_stats,
  Profile,
  Reviews,
  Similar_channels,
  Stats,
} from "@/widgets";
import styles from "./Main.module.scss";

export const Main: React.FC = (): React.JSX.Element => {
  return (
    <main className={styles.main}>
      <Profile />
      <Stats />
      <Buy_ads />
      <Channel_stats />
      <Channel_reviews />
      <Reviews />
      <Similar_channels />
    </main>
  );
};
