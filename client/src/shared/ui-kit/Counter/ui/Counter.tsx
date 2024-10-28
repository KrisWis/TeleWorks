import { CounterProps } from "../model/types";
import styles from "./Counter.module.scss";
import { memo, useMemo } from "react";
import SmallCircleSVG from "@/shared/assets/icons/Shared/Counter/SmallCircleSVG.svg?react";
import MediumCircleSVG from "@/shared/assets/icons/Shared/Counter/MediumCircleSVG.svg?react";
import { Flex } from "../../Stack";

export const Counter: React.FC<CounterProps> = memo(
  ({
    amount,
    dicreaseAmount,
    increaseAmount,
    isDisabled = false,
    type = "medium",
    canAlwaysDicrease = false,
  }): React.JSX.Element => {
    const canNotDicreaseAmount: boolean = useMemo(
      () => (canAlwaysDicrease ? !canAlwaysDicrease : amount == 1),
      [amount, canAlwaysDicrease]
    );

    return (
      <Flex
        align="center"
        gap={type == "medium" ? "5" : "0"}
        className={`${styles.Counter} 
        ${isDisabled ? styles.Counter__disabled : ""}`}
      >
        <button
          disabled={canNotDicreaseAmount}
          onClick={() => (!canNotDicreaseAmount ? dicreaseAmount() : {})}
          className={`${styles.Counter__button} 
          ${type == "small" ? styles.Counter__button__small : ""}
          ${styles.Counter__dicrease} 
          ${canNotDicreaseAmount ? styles.Counter__button__disabled : ""}`}
        >
          {type == "medium" ? <MediumCircleSVG /> : <SmallCircleSVG />}
        </button>

        <span
          className={`${type == "medium" ? styles.Counter__text : styles.Counter__text__small}`}
        >
          {amount}
        </span>

        <button
          onClick={() => increaseAmount()}
          className={`${styles.Counter__button} 
          ${type == "small" ? styles.Counter__button__small : ""}
           ${styles.Counter__increase}`}
        >
          {type == "medium" ? <MediumCircleSVG /> : <SmallCircleSVG />}
        </button>
      </Flex>
    );
  }
);
