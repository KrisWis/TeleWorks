import { URL_PART } from "@/shared/const/app";
import styles from "./NotFoundContainer.module.scss";
import { memo } from "react";

export const NotFoundContainer: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.NotFoundContainer}>
      <img
        className={styles.NotFoundContainer__img}
        src={`${URL_PART}/NotFoundPage/images/NotFound.png`}
        alt="Изображение того, как мужчина и женщина красят стену с ошибкой"
      />

      <span className={styles.NotFoundContainer__title}>
        Страница не найдена
      </span>
    </div>
  );
});
