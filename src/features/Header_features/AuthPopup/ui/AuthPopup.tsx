import styles from "./AuthPopup.module.scss";
import { memo } from "react";

export const AuthPopup: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.authPopup}></div>;
});
