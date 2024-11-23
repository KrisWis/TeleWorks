import styles from "./UserProjects.module.scss";
import { memo } from "react";
import { UserProjectsProps } from "../model/UserProjects_types";
import { ProjectItem } from "@/entities/Global_entities/ProjectItem";
import { ProjectItemViewTypes } from "@/shared/const/project";

export const UserProjects: React.FC<UserProjectsProps> = memo(
  ({ projects }): React.JSX.Element => {
    return (
      <section className={styles.UserProjects}>
        <h2 className="UserPage__caption">Проекты Исполнителя</h2>

        <div className={styles.UserProjects__items}>
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              servicesItem={project}
              viewType={ProjectItemViewTypes.COLUMN}
            />
          ))}
        </div>
      </section>
    );
  },
);
UserProjects.displayName = "UserProjects";
