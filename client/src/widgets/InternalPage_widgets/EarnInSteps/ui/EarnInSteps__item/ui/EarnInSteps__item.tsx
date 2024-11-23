import { memo } from "react";
import { EarnInSteps__item_props } from "../model/EarnInSteps__item_types";
import styles from "./EarnInSteps__item.module.scss";

export const EarnInSteps__item: React.FC<EarnInSteps__item_props> = memo(
  ({ index, title, desc }): React.JSX.Element => {
    return (
      <div className={styles.earnInSteps__item}>
        <span className={styles.earnInSteps__item__index}>0{index}</span>
        <h6 className={styles.earnInSteps__item__title}>{title}</h6>
        <p className={`InternalPage__text`}>{desc}</p>
      </div>
    );
  },
);
EarnInSteps__item.displayName = "EarnInSteps__item";
