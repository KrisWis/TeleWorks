import styles from "./TextUnderlineHover.module.scss";
import { memo } from "react";
import { TextUnderlineHoverProps } from "../model/TextUnderlineHover_types";

export const TextUnderlineHover: React.FC<TextUnderlineHoverProps> = memo(
  ({ className, children, onClick }): React.JSX.Element => {
    return (
      <div
        onClick={onClick}
        className={`${styles.TextUnderlineHover} ${className}`}
      >
        {children}
      </div>
    );
  }
);
