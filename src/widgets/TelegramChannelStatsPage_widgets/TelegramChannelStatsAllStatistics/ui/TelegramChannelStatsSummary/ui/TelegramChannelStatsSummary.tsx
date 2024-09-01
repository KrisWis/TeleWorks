import styles from "./TelegramChannelStatsSummary.module.scss";
import { memo } from "react";

export const TelegramChannelStatsSummary: React.FC = memo(
  (): React.JSX.Element => {
    return <div className={styles.TelegramChannelStatsSummary}></div>;
  }
);
