import { Button } from "@/shared/ui-kit/Button/ui/Button";
import styles from "./Catalog.module.scss";
import "@/shared/main.scss";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";

export const Catalog: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.catalog}>
      <h1 className="page__caption">Каталог Telegram-каналов</h1>

      <div className={styles.catalog__categories}>
        <Button
          text="Каналы"
          type={ButtonTypes.RED}
          className={styles.catalog__category}
        />
        <Button
          text="Тарифные пакеты"
          type={ButtonTypes.WHITE}
          className={styles.catalog__category}
        />
      </div>
    </section>
  );
};
