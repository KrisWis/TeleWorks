import { EditionsProps } from "../model/Editions_types";
import styles from "./Editions.module.scss";
import { memo } from "react";

export const Editions: React.FC<EditionsProps> = memo(
  ({ editionsAmount }): React.JSX.Element => {
    return (
      <div className={styles.editions}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.07639 16.2505C5.02532 15.841 4.99902 15.4239 4.99902 15.0005C4.99902 9.47764 9.47617 5.00049 14.999 5.00049C18.1248 5.00049 20.9155 6.43458 22.7493 8.68069M22.7493 8.68069V5.00049M22.7493 8.68069V8.7504L18.9993 8.75049M24.9216 13.7505C24.9728 14.16 24.999 14.5771 24.999 15.0005C24.999 20.5234 20.5219 25.0005 14.999 25.0005C12.0123 25.0005 9.33139 23.6911 7.49902 21.615M7.49902 21.615V21.2505H11.249M7.49902 21.615V25.0005"
            stroke="#FF5555"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className={styles.editions_text}>{editionsAmount} редакции</span>
      </div>
    );
  }
);
