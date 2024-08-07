import { memo } from "react";
import styles from "./MainPageFooter.module.scss";

export const MainPageFooter: React.FC = memo((): React.JSX.Element => {
  return (
    <footer className={styles.mainPageFooter}>
      <h2 className={styles.mainPageFooter__caption}>
        Tele<span>Works</span>
      </h2>
    </footer>
  );
});
