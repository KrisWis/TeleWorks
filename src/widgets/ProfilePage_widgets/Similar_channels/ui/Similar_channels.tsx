import { memo } from "react";
import styles from "./Similar_channels.module.scss";
import { Similar_channels__header } from "./Similar_channels__header/ui/Similar_channels__header";
import { Similar_channels__slider } from "./Similar_channels__slider/ui/Similar_channels__slider";

export const Similar_channels: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.similar_channels}>
      <Similar_channels__header />

      <Similar_channels__slider />
    </section>
  );
});
