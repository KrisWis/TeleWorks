import { ActiveServicesProps } from "../model/ActiveServices_types";
import styles from "./ActiveServices.module.scss";
import { memo } from "react";

export const ActiveServices: React.FC<ActiveServicesProps> = memo(
  ({ activeServices }): React.JSX.Element => {
    return (
      <div className={styles.activeServices}>
        {activeServices.map((activeService: string) => (
          <div key={activeService} className="ProjectPage__service">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.8228 0.529734L9.34109 13.6329L3.1772 7.64215C2.4503 6.93581 1.27196 6.93581 0.545062 7.64215C-0.181687 8.34863 -0.181687 9.49387 0.545062 10.2004L8.02502 17.4702C8.38847 17.8233 8.86478 18 9.34109 18C9.8174 18 10.2937 17.8233 10.6572 17.4702L25.4549 3.08808C26.1817 2.3816 26.1817 1.23636 25.4549 0.529878C24.728 -0.176602 23.5495 -0.176602 22.8228 0.529734Z"
                fill="#FF5555"
              />
            </svg>

            <span className="ProjectPage__service_text">{activeService}</span>
          </div>
        ))}
      </div>
    );
  }
);
