import { buy_placement_items } from "../model/Buy_placement__data";
import styles from "./Buy_placement.module.scss";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { memo } from "react";
import { Buy_placement__item } from "./Buy_placement__item/ui/Buy_placement__item";
import { Buy_placement__itemProps } from "./Buy_placement__item/model/Buy_placement__item__types";

export const Buy_placement: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.Buy_placement}>
      <h3 className={`${styles.Buy_placement__caption} mainPage__caption`}>
        Мы помогаем привлечь
        <span> качественную целевую аудиторию </span>
        на ваш Telegram-канал и найти надежных профессиональных исполнителей
        услуг
      </h3>

      <div className={styles.Buy_placement__items}>
        {buy_placement_items.map((item: Buy_placement__itemProps) => (
          <Buy_placement__item key={item.text} {...item} />
        ))}
      </div>

      <Button
        type={ButtonTypes.RED}
        className={styles.Buy_placement__buy}
        to="/"
        text="Купить размещение"
      />
    </section>
  );
});
