import styles from "./VioletBorderContainer.module.scss";
import { memo } from "react";
import { VioletBorderContainerProps } from "../model/VioletBorderContainer_types";

export const VioletBorderContainer: React.FC<VioletBorderContainerProps> = memo(
  ({ className, children }): React.JSX.Element => {
    return (
      <div className={`${styles.VioletBorderContainer} ${className}`}>
        {children}
      </div>
    );
  }
);
