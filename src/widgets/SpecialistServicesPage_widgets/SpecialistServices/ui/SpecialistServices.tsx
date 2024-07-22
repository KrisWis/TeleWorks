import { Categories } from "@/widgets";
import styles from "./SpecialistServices.module.scss";
import { memo } from "react";
import { categoriesItems } from "../model/SpecialistServices_data";

export const SpecialistServices: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.specialistServices}>
      <h1 className="page__caption">Услуги специалистов</h1>

      <Categories categories={categoriesItems} />
    </section>
  );
});
