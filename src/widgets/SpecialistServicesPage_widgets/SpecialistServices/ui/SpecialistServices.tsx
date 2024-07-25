import styles from "./SpecialistServices.module.scss";
import { memo } from "react";
import {
  categoriesItems,
  servicesFilters,
} from "../model/SpecialistServices_data";
import { Categories, Filter } from "@/features";
import { SpecialistServicesResults } from "../SpecialistServicesResults/ui/SpecialistServicesResults";

export const SpecialistServices: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.specialistServices}>
      <h1 className="page__caption">Услуги специалистов</h1>

      <Categories categories={categoriesItems} />

      <div className={styles.specialistServices__wrapper}>
        <Filter bonusFilters={servicesFilters} />
        <SpecialistServicesResults />
      </div>
    </section>
  );
});
