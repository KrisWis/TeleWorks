import styles from "./TelegramChannel.module.scss";
import { memo } from "react";
import { TelegramChannel__body } from "./TelegramChannel__body/ui/TelegramChannel__body";
import { TelegramChannel__header } from "./TelegramChannel__header/ui/TelegramChannel__header";
import { TelegramChannel__footer } from "./TelegramChannel__footer/ui/TelegramChannel__footer";

export const TelegramChannel: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.TelegramChannel}>
      <TelegramChannel__header />
      <TelegramChannel__body />
      <TelegramChannel__footer />
    </section>
  );
});
TelegramChannel.displayName = "TelegramChannel";
