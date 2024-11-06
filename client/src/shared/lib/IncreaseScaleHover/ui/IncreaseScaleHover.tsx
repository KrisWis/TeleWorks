import styles from "./IncreaseScaleHover.module.scss";
import { memo } from "react";
import { IncreaseScaleHoverProps } from "../model/IncreaseScaleHover_types";

export const IncreaseScaleHover: React.FC<IncreaseScaleHoverProps> = memo(
  ({ children, className, onClick }): React.JSX.Element => {
    return (
      <div
        onClick={onClick}
        className={`${styles.IncreaseScaleHover} ${className}`}
      >
        {children}
      </div>
    );
  }
);
