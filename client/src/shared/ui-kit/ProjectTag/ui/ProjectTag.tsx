import { ProjectTagProps } from "../model/ProjectTag_types";
import styles from "./ProjectTag.module.scss";
import { memo } from "react";

export const ProjectTag: React.FC<ProjectTagProps> = memo(
  ({ title }): React.JSX.Element => {
    return (
      <div className={styles.projectTag}>
        <span className={styles.projectTag__title}>{title}</span>
      </div>
    );
  },
);
ProjectTag.displayName = "ProjectTag";
