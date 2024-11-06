import { PageLoadingComponent } from "../PageLoadingComponent/PageLoadingComponent";
import styles from "./PageLoading.module.scss";
import { memo } from "react";

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.PageLoading}>
      <PageLoadingComponent />
    </div>
  );
});
