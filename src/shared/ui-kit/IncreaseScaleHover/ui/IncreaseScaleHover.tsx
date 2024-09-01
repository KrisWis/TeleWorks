import styles from "./IncreaseScaleHover.module.scss";
import { memo } from "react";
import { IncreaseScaleHoverProps } from "../model/IncreaseScaleHover_types";

export const IncreaseScaleHover: React.FC<IncreaseScaleHoverProps> = memo(
  ({ children, className }): React.JSX.Element => {
    return (
      <div className={`${styles.IncreaseScaleHover} ${className}`}>
        {children}
      </div>
    );
  }
);
