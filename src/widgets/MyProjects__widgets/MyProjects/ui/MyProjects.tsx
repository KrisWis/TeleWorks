import { Button } from "@/shared/ui-kit/Button/ui/Button";
import styles from "./MyProjects.module.scss";
import "@/shared/main.scss";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";

export const MyProjects: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.myProjects}>
      <h1 className="page__caption">Мои проекты</h1>

      <div className={styles.myProjects__tabs}>
        <Button
          text="Реклама"
          className={styles.myProjects__tab}
          type={ButtonTypes.RED}
        />
        <Button
          text="Услуги"
          className={styles.myProjects__tab}
          type={ButtonTypes.BLUE}
        />
        <Button
          text="Готовые предложения"
          className={styles.myProjects__tab}
          type={ButtonTypes.WHITE}
        />
      </div>
    </section>
  );
};
