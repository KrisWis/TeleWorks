import { ChannelsExamples_items } from "../model/ChannelsExamples_data";
import styles from "./ChannelsExamples.module.scss";
import { memo } from "react";
import { ChannelsExamples_item } from "./ChannelsExamples_item/ui/ChannelsExamples_item";
import { ChannelsExamples_item_props } from "./ChannelsExamples_item/model/ChannelsExamples_item_types";

export const ChannelsExamples: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.ChannelsExamples}>
      <h2
        className={`${styles.ChannelsExamples__caption} InternalPage__caption`}
      >
        Тысячи владельцев каналов уже зарабатывают с нами —{" "}
        <span>станьте одним из них!</span>
      </h2>

      <div className={styles.ChannelsExamples__items}>
        {ChannelsExamples_items.map((item: ChannelsExamples_item_props) => (
          <ChannelsExamples_item key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
});
ChannelsExamples.displayName = "ChannelsExamples";
