import styles from "./CreateOrderProgress.module.scss";
import { memo, useContext } from "react";
import { createOrderProgressSteps } from "../model/CreateOrderProgress_data";
import { CreateOrderPageContext } from "@/app/layouts/BaseLayout/ui/pageWrappers/CreateOrderContainer";

export const CreateOrderProgress: React.FC = memo((): React.JSX.Element => {
  const { CreateOrderCompletedSteps, CreateOrderActiveStep } = useContext(
    CreateOrderPageContext
  );

  return (
    <div className={styles.createOrderProgress}>
      {createOrderProgressSteps.map((step) => (
        <div
          key={step.step}
          className={`${styles.createOrderProgress__item} ${styles[`createOrderProgress__item__${step.postfix}`]} 
          ${CreateOrderCompletedSteps.includes(step.step) ? styles.createOrderProgress__item__completed : ""}
          ${!CreateOrderCompletedSteps.includes(step.step) && CreateOrderActiveStep != step.step ? styles.createOrderProgress__item__closed : ""}`}
        >
          <span className={styles.createOrderProgress__item__step}></span>

          <span className={styles.createOrderProgress__item__title}>
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
});
