import {
  EarnInSteps__item_type,
  EarnInSteps_items,
} from "../model/EarnInSteps_data";
import styles from "./EarnInSteps.module.scss";
import { EarnInSteps__item } from "@/entities";

export const EarnInSteps: React.FC = (): React.JSX.Element => {
  return (
    <section className={styles.earnInSteps}>
      <h2 className={`InternalPage__caption`}>
        <span>Зарабатывайте</span>
        <br />в 3 простых шага:
      </h2>

      <div className={styles.earnInSteps__items}>
        {EarnInSteps_items.map(
          (item: EarnInSteps__item_type, index: number) => (
            <EarnInSteps__item key={index} index={index + 1} {...item} />
          )
        )}
      </div>
    </section>
  );
};
