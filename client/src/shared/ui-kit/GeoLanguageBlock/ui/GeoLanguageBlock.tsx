import styles from "./GeoLanguageBlock.module.scss";
import { memo } from "react";
import { GeoLanguageBlockProps } from "../model/GeoLanguageBlock_types";
import { URL_PART } from "@/shared/const/app";

export const GeoLanguageBlock: React.FC<GeoLanguageBlockProps> = memo(
  ({ geoLanguage }): React.JSX.Element => {
    return (
      <div className={styles.GeoLanguageBlock}>
        <img
          className={styles.GeoLanguageBlock__img}
          src={`${URL_PART}/ProfilePage/icons/profile__footer/geo.png`}
          alt="Иконка гео"
        />
        <h3 className={styles.GeoLanguageBlock__caption}>Гео / Язык</h3>
        <span className={styles.GeoLanguageBlock__desc}>{geoLanguage}</span>
      </div>
    );
  },
);
GeoLanguageBlock.displayName = "GeoLanguageBlock";
