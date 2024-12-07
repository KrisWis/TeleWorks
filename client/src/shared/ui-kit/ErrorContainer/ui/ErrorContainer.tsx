import { URL_PART } from "@/shared/const/app";
import styles from "./ErrorContainer.module.scss";
import { memo } from "react";

export const ErrorContainer: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.ErrorContainer}>
      <img
        className={styles.ErrorContainer__img}
        src={`${URL_PART}/NotFoundPage/images/NotFound.png`}
        alt="Изображение того, как мужчина и женщина красят стену с ошибкой"
      />

      <span className={styles.ErrorContainer__title}>
        На сайте проводятся технические работы, просим прощения!
      </span>
    </div>
  );
});

ErrorContainer.displayName = "ErrorContainer";
