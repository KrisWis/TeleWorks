import styles from "./PageLoading.module.scss";
import { memo } from "react";
import { SemipolarLoading } from "react-loadingg";

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.PageLoading}>
      <SemipolarLoading color="var(--main-color)" />
    </div>
  );
});
