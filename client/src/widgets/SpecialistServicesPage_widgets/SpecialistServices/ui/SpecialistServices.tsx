import styles from "./SpecialistServices.module.scss";
import { memo, useState } from "react";
import {
  categoriesItems,
  servicesFilters,
} from "../model/SpecialistServices_data";
import { SpecialistServicesResults } from "../SpecialistServicesResults/ui/SpecialistServicesResults";
import { Categories } from "@/shared/ui-kit/Categories";
import { tablet_small_mediaQuery } from "@/shared/const/global";
import { Filter } from "@/features/Global_features/Filter";

export const SpecialistServices: React.FC = memo((): React.JSX.Element => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <section className={styles.specialistServices}>
      {!tablet_small_mediaQuery.matches && (
        <h1 className="Page__caption">Услуги специалистов</h1>
      )}

      {!tablet_small_mediaQuery.matches ? (
        <>
          <Categories
            SliderPrevArrowID="SpecialistServices__sliderPrevArrow"
            SliderNextArrowID="SpecialistServices__sliderNextArrow"
            categories={categoriesItems}
            activeCategoryIndex={activeCategoryIndex}
            setActiveCategoryIndex={setActiveCategoryIndex}
          />

          <div className={styles.specialistServices__wrapper}>
            <Filter bonusFilters={servicesFilters} />
            <SpecialistServicesResults />
          </div>
        </>
      ) : (
        <>
          <Filter bonusFilters={servicesFilters} />
          <Categories
            SliderPrevArrowID="SpecialistServices__sliderPrevArrow"
            SliderNextArrowID="SpecialistServices__sliderNextArrow"
            categories={categoriesItems}
            activeCategoryIndex={activeCategoryIndex}
            setActiveCategoryIndex={setActiveCategoryIndex}
          />
          <SpecialistServicesResults />
        </>
      )}
    </section>
  );
});
SpecialistServices.displayName = "SpecialistServices";
