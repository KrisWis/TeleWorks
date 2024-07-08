import { Button } from "@/shared/ui-kit/Button/ui/Button";
import { HowItWorksItem } from "../model/HowItWorks__types";
import styles from "./HowItWorks__item.module.scss";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";

export const HowItWorks__item: React.FC<HowItWorksItem> = ({
  index,
  text,
  button,
  list,
}): React.JSX.Element => {
  return (
    <div className={`mainPage__wrapper ${styles.howItWorks__item}`}>
      <span className={styles.howItWorks__item__index}>{index}</span>

      <h5 className={styles.howItWorks__item__text}>{text}</h5>

      {button && (
        <Button
          type={ButtonTypes.RED}
          className={styles.howItWorks__item__button}
          to="/"
          text="Создать аккаунт"
        />
      )}

      {list && (
        <ul className={styles.howItWorks__item__list}>
          {list.map((item: string) => (
            <li key={item} className={styles.howItWorks__item__list_item}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
