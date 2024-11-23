import { memo } from "react";
import { ChannelsExamples_item_props } from "../model/ChannelsExamples_item_types";
import styles from "./ChannelsExamples_item.module.scss";

export const ChannelsExamples_item: React.FC<ChannelsExamples_item_props> =
  memo(({ imgURL, name }): React.JSX.Element => {
    return (
      <div className={styles.channelsExamples_item}>
        <img
          className={styles.channelsExamples_item__img}
          src={imgURL}
          alt={name}
        />

        <h5 className={styles.channelsExamples_item__name}>Название канала</h5>
      </div>
    );
  });
ChannelsExamples_item.displayName = "ChannelsExamples_item";
