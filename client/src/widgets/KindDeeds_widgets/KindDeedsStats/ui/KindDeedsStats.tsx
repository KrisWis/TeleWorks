import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./KindDeedsStats.module.scss";
import { memo } from "react";

export const KindDeedsStats: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex justify="evenly" max>
      <Flex align="center" direction="column">
        <span className={styles.KindDeedsStats__title}>Собрали средств</span>
        <span className={styles.KindDeedsStats__value}>100.000₽+</span>
      </Flex>

      <Flex align="center" direction="column">
        <span className={styles.KindDeedsStats__title}>Уже помогли</span>
        <span className={styles.KindDeedsStats__value}>2103</span>
      </Flex>
    </Flex>
  );
});
