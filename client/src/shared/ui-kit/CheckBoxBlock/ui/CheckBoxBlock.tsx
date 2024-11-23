import styles from "./CheckBoxBlock.module.scss";
import { memo } from "react";
import { CheckBoxBlockProps } from "../modal/CheckBoxBlock_types";

export const CheckBoxBlock: React.FC<CheckBoxBlockProps> = memo(
  ({ isActive, onClick, isWarn, className }): React.JSX.Element => {
    return (
      <div
        className={`${styles.CheckBoxBlock} 
                ${isActive ? styles.CheckBoxBlock__active : ""}
                ${isWarn ? styles.CheckBoxBlock__warn : ""}
                ${className}`}
        onClick={onClick}
      ></div>
    );
  },
);
CheckBoxBlock.displayName = "CheckBoxBlock";
