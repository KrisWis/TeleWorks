import { memo } from "react";
import styles from "./Similar_channels.module.scss";
import { Similar_channels__header, Similar_channels__slider } from "@/entities";

export const Similar_channels: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.similar_channels}>
      <Similar_channels__header />

      <Similar_channels__slider />
    </section>
  );
});
