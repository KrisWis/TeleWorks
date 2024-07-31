import styles from "./ReportBug.module.scss";
import { memo } from "react";
import ReviewsItemReport from "@/shared/assets/icons/Global/ReviewsItemReport.svg?react";
import { ReportBugProps } from "../model/ReportBug_types";

export const ReportBug: React.FC<ReportBugProps> = memo(
  ({ className }): React.JSX.Element => {
    return (
      <div className={`${styles.ReportBug} ${className}`}>
        <span className={styles.ReportBug_text}>Сообщить об ошибке</span>
        <div className={styles.ReportBug__svg}>
          <ReviewsItemReport />
          <span className={styles.ReportBug__sign}>!</span>
        </div>
      </div>
    );
  }
);
