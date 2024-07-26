import { DeadlineProps } from "../model/Deadline_types";
import styles from "./Deadline.module.scss";
import { memo } from "react";

export const Deadline: React.FC<DeadlineProps> = memo(
  ({ deadline }): React.JSX.Element => {
    return (
      <div className={styles.deadlineWrapper}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8.75V15H18.75M26.25 15C26.25 21.2133 21.2133 26.25 15 26.25C8.7868 26.25 3.75 21.2133 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2133 3.75 26.25 8.7868 26.25 15Z"
            stroke="#FF5555"
            strokeWidth="2.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className={styles.deadline__text}>
          Срок выполнения: <span className={styles.deadline}>{deadline}</span>
        </span>
      </div>
    );
  }
);
