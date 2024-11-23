import { memo } from "react";
import styles from "./ItemsSlider__header.module.scss";
import { ItemsSlider__headerProps } from "../model/ItemsSlider__header_types";

export const ItemsSlider__header: React.FC<ItemsSlider__headerProps> = memo(
  ({ title, prevArrowId, nextArrowId }): React.JSX.Element => {
    return (
      <div className={styles.ItemsSlider__header}>
        <h2 className={styles.ItemsSlider__caption}>{title}</h2>

        <div className={styles.ItemsSlider__arrows}>
          <div className={styles.ItemsSlider__arrow} id={prevArrowId}>
            <svg
              width="25"
              height="18"
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.654293 9.85766C0.18062 9.38399 0.18062 8.61601 0.654293 8.14234L8.37325 0.423379C8.84693 -0.0502939 9.6149 -0.0502939 10.0886 0.423379C10.5622 0.897053 10.5622 1.66503 10.0886 2.1387L3.22728 9L10.0886 15.8613C10.5622 16.335 10.5622 17.1029 10.0886 17.5766C9.6149 18.0503 8.84693 18.0503 8.37325 17.5766L0.654293 9.85766ZM25 10.2129H1.51196V7.78708H25V10.2129Z"
                fill="var(--violet-color)"
              />
            </svg>
          </div>

          <div className={styles.ItemsSlider__arrow} id={nextArrowId}>
            <svg
              width="25"
              height="18"
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3457 9.85766C24.8194 9.38399 24.8194 8.61601 24.3457 8.14234L16.6267 0.423379C16.1531 -0.0502939 15.3851 -0.0502939 14.9114 0.423379C14.4378 0.897053 14.4378 1.66503 14.9114 2.1387L21.7727 9L14.9114 15.8613C14.4378 16.335 14.4378 17.1029 14.9114 17.5766C15.3851 18.0503 16.1531 18.0503 16.6267 17.5766L24.3457 9.85766ZM0 10.2129H23.488V7.78708H0V10.2129Z"
                fill="var(--violet-color)"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  },
);
ItemsSlider__header.displayName = "ItemsSlider__header";
