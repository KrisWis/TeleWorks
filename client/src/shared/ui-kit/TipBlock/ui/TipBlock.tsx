import styles from "./TipBlock.module.scss";
import { memo } from "react";
import { TipBlockProps } from "../model/TipBlock_types";
import { Flex } from "../../../lib/Stack";

export const TipBlock: React.FC<TipBlockProps> = memo(
  ({ text, className }): React.JSX.Element => {
    return (
      <Flex className={`${styles.TipBlock} ${className}`}>
        <div className={styles.TipBlock__icon}>?</div>

        <Flex
          className={styles.TipBlock__textWrapper}
          direction="column"
          gap="20"
        >
          {text.map((textPart) => (
            <p key={textPart} className={styles.TipBlock__text}>
              {textPart}
            </p>
          ))}
        </Flex>
      </Flex>
    );
  },
);
TipBlock.displayName = "TipBlock";
