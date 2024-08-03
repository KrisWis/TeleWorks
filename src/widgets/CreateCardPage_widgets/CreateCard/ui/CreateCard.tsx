import { CreateCardForm } from "@/features/CreateCardPage_features/CreateCardForm";
import styles from "./CreateCard.module.scss";
import { memo, useState } from "react";
import { WhyNeedINNAndName } from "@/widgets/Global_widgets/WhyNeedINNAndName";

export const CreateCard: React.FC = memo((): React.JSX.Element => {
  const [ActiveSlide, setActiveSlide] = useState<number>(0);

  return (
    <section className={styles.createCard}>
      <h1 className={styles.createCard__caption}>
        Карточка организации/заказчика
      </h1>

      <div className={styles.createCard__wrapper}>
        <CreateCardForm setActiveSlide={setActiveSlide} />

        <WhyNeedINNAndName
          ActiveSlide={ActiveSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
    </section>
  );
});
