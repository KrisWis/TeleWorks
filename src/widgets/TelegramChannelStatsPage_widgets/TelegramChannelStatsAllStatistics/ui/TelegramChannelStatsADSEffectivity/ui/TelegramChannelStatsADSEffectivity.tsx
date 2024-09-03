import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./TelegramChannelStatsADSEffectivity.module.scss";
import { memo } from "react";

export const TelegramChannelStatsADSEffectivity: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <Flex
        direction="column"
        className={styles.TelegramChannelStatsADSEffectivity}
      >
        <h5 className="TelegramChannelStatsPage__caption">
          Эффективность рекламы
        </h5>
      </Flex>
    );
  }
);
