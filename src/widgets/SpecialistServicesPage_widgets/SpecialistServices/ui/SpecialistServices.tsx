import styles from "./SpecialistServices.module.scss";
import { memo } from "react";
import {
  categoriesItems,
  servicesFilters,
} from "../model/SpecialistServices_data";
import { Categories, Filter } from "@/features";

export const SpecialistServices: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.specialistServices}>
      <h1 className="page__caption">Услуги специалистов</h1>

      <Categories categories={categoriesItems} />

      <div className={styles.specialistServices__wrapper}>
        <Filter bonusFilters={servicesFilters} />
      </div>
    </section>
  );
});
