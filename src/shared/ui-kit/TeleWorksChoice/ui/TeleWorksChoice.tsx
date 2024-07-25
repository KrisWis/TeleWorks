import { TeleWorksChoiceProps } from "../model/TeleWorksChoice_types";
import styles from "./TeleWorksChoice.module.scss";
import { memo } from "react";

export const TeleWorksChoice: React.FC<TeleWorksChoiceProps> = memo(
  ({ className }): React.JSX.Element => {
    return (
      <span className={`${styles.TeleWorksChoice} ${className}`}>
        Выбор <span>TeleWorks</span>
      </span>
    );
  }
);
