import { MainPage_button_red } from "@/shared/ui-kit/MainPage_button_red/ui/MainPage_button_red";
import { HowItWorksItem } from "../model/HowItWorks__types";
import styles from "./HowItWorks__item.module.scss";

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
        <MainPage_button_red
          className={styles.howItWorks__item__button}
          to="/"
          text="Создать аккаунт"
        />
      )}

      {list && (
        <ul className={styles.howItWorks__item__list}>
          {list.map((item: string) => (
            <li className={styles.howItWorks__item__list_item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
