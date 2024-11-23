import styles from "./AgeBlock.module.scss";
import { memo } from "react";
import { AgeBlockProps } from "../model/AgeBlock_types";
import { URL_PART } from "@/shared/const/app";

export const AgeBlock: React.FC<AgeBlockProps> = memo(
  ({ age }): React.JSX.Element => {
    return (
      <div className={styles.AgeBlock}>
        <img
          className={styles.AgeBlock__img}
          src={`${URL_PART}/ProfilePage/icons/profile__footer/age.png`}
          alt="Иконка возраста"
        />
        <h3 className={styles.AgeBlock__caption}>Возраст</h3>
        <span className={styles.AgeBlock__desc}>{age}</span>
      </div>
    );
  },
);
AgeBlock.displayName = "AgeBlock";
