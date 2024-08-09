import { СhangeablePortfolioCaseProps } from "../model/СhangeablePortfolioCase_types";
import styles from "./СhangeablePortfolioCase.module.scss";
import { memo } from "react";
import RedCrossSVG from "@/shared/assets/icons/UserEditPage/UserEdit/RedCrossSVG.svg?react";
import {
  LoadImageBlock,
  LoadImageBlockSizes,
} from "@/shared/ui-kit/LoadImageBlock";

export const СhangeablePortfolioCase: React.FC<СhangeablePortfolioCaseProps> =
  memo(({ Case, setExistedCases }): React.JSX.Element => {
    // TODO: использовать это для реализации "Заменить отображение"
    // const [CaseLoadedImage, setCaseLoadedImage] = UseLoadedImage();

    return (
      <div className={styles.changeablePortfolioCase}>
        {!Case.caseImgURL ? (
          <LoadImageBlock
            requirements={false}
            size={LoadImageBlockSizes.MEDIUM}
          />
        ) : (
          <img
            className={styles.changeablePortfolioCase__img}
            src={Case.caseImgURL}
            alt={Case.caseName}
          ></img>
        )}

        <div className={styles.changeablePortfolioCase__wrapper}>
          <div className={styles.changeablePortfolioCase__wrapper__header}>
            <span className={styles.changeablePortfolioCase__wrapper__title}>
              Название проекта
            </span>

            <div
              onClick={() =>
                setExistedCases((prev) =>
                  prev.filter((caseItem) => caseItem.caseName !== Case.caseName)
                )
              }
            >
              <RedCrossSVG className={styles.changeablePortfolioCase__delete} />
            </div>
          </div>
        </div>
      </div>
    );
  });
