import { Button } from "@/shared/ui-kit/Button/ui/Button";
import styles from "./Catalog.module.scss";
import "@/shared/main.scss";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";
import { CatalogFilter, CatalogItem } from "@/entities";
import { catalog__items } from "../model/Catalog__data";
import { CatalogItemProps } from "@/entities/CatalogPage__entities/Catalog__entities/CatalogItem/model/CatalogItem__types";

export const Catalog: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.catalog}>
      <h1 className="page__caption">Каталог Telegram-каналов</h1>

      <div className={styles.catalog__categories}>
        <Button
          text="Реклама"
          type={ButtonTypes.RED}
          className={styles.catalog__category}
        />

        <Button
          text="Услуги"
          type={ButtonTypes.WHITE}
          className={styles.catalog__category}
        />

        <Button
          text="Каналы"
          type={ButtonTypes.BLUE}
          className={styles.catalog__category}
        />

        <Button
          text="Готовые предложения"
          type={ButtonTypes.BLACK}
          className={styles.catalog__category}
        />
      </div>

      <div className={styles.catalog__body}>
        <CatalogFilter />

        <div className={styles.catalog__items}>
          {catalog__items.map((item: CatalogItemProps) => (
            <CatalogItem {...item} />
          ))}
        </div>
      </div>

      <button className={styles.catalog__loadMore}>Загрузить еще</button>
    </section>
  );
};
