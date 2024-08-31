import styles from "./TipBlock.module.scss";
import { memo } from "react";
import { TipBlockProps } from "../model/TipBlock_types";
import { Flex } from "../../Stack";

export const TipBlock: React.FC<TipBlockProps> = memo(
  ({ text }): React.JSX.Element => {
    return (
      <Flex align="center" className={styles.TipBlock}>
        <div className={styles.TipBlock__icon}>?</div>

        <p className={styles.TipBlock__text}>{text}</p>
      </Flex>
    );
  }
);
