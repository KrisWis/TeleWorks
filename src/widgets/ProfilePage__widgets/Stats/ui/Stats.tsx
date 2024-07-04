import { Stats__item } from "@/entities";
import { Stats__items } from "../model/Stats";
import styles from "./Stats.module.scss";

export const Stats: React.FC = (): React.JSX.Element => {
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
};
