import { Button } from "@/shared";
import styles from "./Catalog.module.scss";
import "@/shared/main.scss";
import { ButtonProps } from "@/shared/ui-kit/Button/model/Button__types";
import {
  catalog__categories,
  catalog__filters,
  catalog__items,
} from "../model/Catalog__data";
import { CatalogItemProps } from "@/entities/CatalogPage_entities/CatalogItem/model/CatalogItem__types";
import { CatalogItem } from "@/entities";
import { Filter } from "@/features";

console.log(1);

export const Catalog: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.catalog} data-testid="catalog">
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
        <Filter bonusFilters={catalog__filters} />

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
