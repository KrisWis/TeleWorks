import { CustomItemBadgeProps } from "../model/CustomItemBadge_types";
import styles from "./CustomItemBadge.module.scss";
import { memo } from "react";

export const CustomItemBadge: React.FC<CustomItemBadgeProps> = memo(
  ({ className, firstTitle, secondTitle }): React.JSX.Element => {
    return (
      <span className={`${styles.CustomItemBadge} ${className}`}>
        {firstTitle} <span>{secondTitle}</span>
      </span>
    );
  }
);
