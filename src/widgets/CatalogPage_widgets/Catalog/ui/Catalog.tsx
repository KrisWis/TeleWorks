import styles from "./Catalog.module.scss";
import "@/shared/main.scss";
import {
  ButtonProps,
  ButtonTypes,
} from "@/shared/ui-kit/Button/model/Button__types";
import {
  catalog__categories,
  catalog__filters,
  catalog__items,
} from "../model/Catalog__data";
import { CatalogItemProps } from "@/entities/CatalogPage_entities/CatalogItem/model/CatalogItem__types";
import { Button } from "@/shared/ui-kit/Button";
import { CatalogItem } from "@/entities/CatalogPage_entities/CatalogItem";
import { Filter } from "@/features/Global_features/Filter";
import { LoadMore } from "@/shared/ui-kit/LoadMore";

export const Catalog: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.catalog} data-testid="catalog">
      <h1 className="Page__caption">Каталог Telegram-каналов</h1>

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
            <CatalogItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      <LoadMore type={ButtonTypes.CYAN} className={styles.catalog__loadMore} />
    </section>
  );
};
