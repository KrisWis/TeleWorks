import { LoadedFile } from "../../../model/CreateOrderTechnicalInformationContainer_types";
import styles from "./CreateOrderTechnicalInformationLoadedFile.module.scss";
import { memo } from "react";
import ChangeFileSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/ChangeFileSVG.svg?react";
import DeleteFileSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/DeleteFileSVG.svg?react";

export const CreateOrderTechnicalInformationLoadedFile: React.FC<LoadedFile> =
  memo(({ FileData, FileName, FileSize }): React.JSX.Element => {
    return (
      <div className={styles.CreateOrderTechnicalInformationLoadedFile}>
        <div className={styles.CreateOrderTechnicalInformationLoadedFile__info}>
          <img
            className={styles.CreateOrderTechnicalInformationLoadedFile__img}
            src={FileData}
            alt={FileName}
          />

          <div
            className={
              styles.CreateOrderTechnicalInformationLoadedFile__infoWrapper
            }
          >
            <span className={`CreateOrderPage__caption`}>{FileName}</span>

            <span
              className={styles.CreateOrderTechnicalInformationLoadedFile__size}
            >
              {(FileSize / 1048576).toFixed(1)} Мб
            </span>
          </div>
        </div>

        <div
          className={styles.CreateOrderTechnicalInformationLoadedFile__buttons}
        >
          <ChangeFileSVG
            className={styles.CreateOrderTechnicalInformationLoadedFile__change}
          />
          <DeleteFileSVG
            className={styles.CreateOrderTechnicalInformationLoadedFile__delete}
          />
        </div>
      </div>
    );
  });
