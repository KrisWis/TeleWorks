import { Buy_placement__itemProps } from "../model/Buy_placement__item__types";
import styles from "./Buy_placement__item.module.scss";

export const Buy_placement__item: React.FC<Buy_placement__itemProps> = ({
  amount,
  text,
}): React.JSX.Element => {
  return (
    <div className={styles.Buy_placement__item}>
      <span className={styles.Buy_placement__item__amount}>{amount}</span>
      <span className={styles.Buy_placement__item__text}>{text}</span>
    </div>
  );
};
