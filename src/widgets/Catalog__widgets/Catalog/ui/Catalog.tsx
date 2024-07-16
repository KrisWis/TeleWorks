import { Button } from "@/shared/ui-kit/Button/ui/Button";
import styles from "./Catalog.module.scss";
import "@/shared/main.scss";
import { ButtonProps } from "@/shared/ui-kit/Button/model/Button__types";
import { CatalogItem } from "@/entities";
import { catalog__categories, catalog__items } from "../model/Catalog__data";
import { CatalogItemProps } from "@/entities/CatalogPage__entities/Catalog__entities/CatalogItem/model/CatalogItem__types";
import { CatalogFilter } from "@/features";

export const Catalog: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.catalog}>
      <h1 className="page__caption">Каталог Telegram-каналов</h1>

      <div className={styles.catalog__categories}>
        {catalog__categories.map((category: ButtonProps) => (
          <Button
            key={category.text}
            text={category.text}
            type={category.type}
            className={`${styles.catalog__category}`}
            canSelected
          />
        ))}
      </div>

      <div className={styles.catalog__body}>
        <CatalogFilter />

        <div className={styles.catalog__items}>
          {catalog__items.map((item: CatalogItemProps) => (
            <CatalogItem key={item.title} {...item} />
          ))}
        </div>
      </div>

      <button className={styles.catalog__loadMore}>Загрузить еще</button>
    </section>
  );
};
