import { URL_PART } from "@/shared/const/app";
import styles from "./MyProjectsPage__withoutProjects.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const MyProjectsPage__withoutProjects: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <div className={styles.myProjects__withoutProjects}>
        <img
          className={styles.myProjects__withoutProjects__img}
          src={`${URL_PART}/MyProjectsPage/images/MyProjectsPage__withoutProjects.png`}
          alt="Лайки"
        />

        <span className={styles.myProjects__withoutProjects__caption}>
          Проектов пока нет
        </span>

        <span className={styles.myProjects__withoutProjects__text}>
          Как только вы создадите проект, он появится здесь
        </span>

        <Button
          className={styles.myProjects__withoutProjects__buttonNew}
          text="+ Новый проект"
          type={ButtonTypes.RED}
        />

        <span className={styles.myProjects__withoutProjects__text}>или</span>

        <Button
          className={styles.myProjects__withoutProjects__buttonOffer}
          text="Заказать готовое решение"
          type={ButtonTypes.BLUE}
        />
      </div>
    );
  }
);
