import { Stats__item } from "@/entities/Global_entities/Stats__item";
import { Stats__items } from "../model/Stats_types";
import styles from "./Stats.module.scss";
import { memo } from "react";

export const Stats: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.stats}>
      <div className={styles.stats__items}>
        {Stats__items.map((Stats__item__props) => (
          <Stats__item
            key={Stats__item__props.caption}
            {...Stats__item__props}
          />
        ))}
      </div>
    </section>
  );
});
Stats.displayName = "Stats";
