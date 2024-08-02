import { CreateCardForm } from "@/features/CreateCardPage_features/CreateCardForm";
import styles from "./CreateCard.module.scss";
import { memo } from "react";

export const CreateCard: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.createCard}>
      <h1 className={styles.createCard__caption}>
        Карточка организации/заказчика
      </h1>

      <div className={styles.createCard__wrapper}>
        <CreateCardForm />
      </div>
    </section>
  );
});
