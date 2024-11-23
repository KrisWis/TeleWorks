import styles from "./MyProjects.module.scss";
import { memo } from "react";
import { MyProjectsPage__withoutProjects } from "./MyProjectsPage__withoutProjects/ui/MyProjectsPage__withoutProjects";
import { Button } from "@/shared/ui-kit/Button/ui/Button";
import { ButtonTypes } from "@/shared/ui-kit/Button";
import { MyProjectsStats } from "./myProjectsStats/ui/myProjectsStats";
import { MyProjectsProps } from "../model/myProjects_types";
import { Search } from "@/features/Global_features/Search";

export const MyProjects: React.FC<MyProjectsProps> = memo(
  ({ myProjectsStats }): React.JSX.Element => {
    return (
      <section className={styles.myProjects}>
        <h1 className="Page__caption">Мои проекты</h1>

        <div className={styles.myProjects__categories}>
          <Button
            text="Реклама"
            className={styles.myProjects__category}
            type={ButtonTypes.RED}
          />
          <Button
            text="Услуги"
            className={styles.myProjects__category}
            type={ButtonTypes.BLUE}
          />
          <Button
            text="Готовые предложения"
            className={styles.myProjects__category}
            type={ButtonTypes.WHITE}
          />
        </div>

        <div className={styles.myProjects__body}>
          <MyProjectsStats {...myProjectsStats} />

          <div className={styles.myProjects__interface}>
            <Search
              placeholder="Поиск кампании по названию, id заявки"
              ButtonType={ButtonTypes.RED}
              ButtonText="Найти"
            />

            <MyProjectsPage__withoutProjects />
          </div>
        </div>
      </section>
    );
  },
);
MyProjects.displayName = "MyProjects";
