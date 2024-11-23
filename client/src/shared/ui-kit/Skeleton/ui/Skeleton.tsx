import { CSSProperties, memo } from "react";
import cls from "./Skeleton.module.scss";
import { SkeletonProps } from "../model/types";

export const Skeleton: React.FC<SkeletonProps> = memo(
  ({ className, height, width, border }) => {
    const styles: CSSProperties = {
      width,
      height,
      borderRadius: border,
    };

    return <div className={`${cls.Skeleton} ${className}`} style={styles} />;
  },
);
Skeleton.displayName = "Skeleton";
