import { Advancement, Buy_placement, WeAreTrusted } from "@/widgets";
import styles from "./MainPage.module.scss";
import "../../../shared/MainPage.scss";

export const MainPage: React.FC = (): React.JSX.Element => {
  return (
    <main className={styles.main}>
      <Advancement />
      <Buy_placement />
      <WeAreTrusted />
    </main>
  );
};
