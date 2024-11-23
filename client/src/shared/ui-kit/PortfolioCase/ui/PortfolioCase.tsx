import styles from "./PortfolioCase.module.scss";
import { memo } from "react";
import { PortfolioCaseProps } from "../model/PortfolioCase_types";
import ViewsSVG from "@/shared/assets/icons/Shared/PortfolioCase/ViewsSVG.svg?react";
import { ShowFullImage, ShowFullImageTypes } from "../../ShowFullImage";

export const PortfolioCase: React.FC<PortfolioCaseProps> = memo(
  ({ imgURL, views, caseName, className }): React.JSX.Element => {
    return (
      <div className={`${styles.PortfolioCaseImageWrapper} ${className}`}>
        <img
          className={styles.PortfolioCaseImage}
          src={imgURL}
          alt={caseName}
        />

        <ShowFullImage
          className={styles.PortfolioCaseImage__showFullImage}
          imgURLs={[imgURL]}
          type={ShowFullImageTypes.SHORT}
        />

        <div className={styles.PortfolioCaseNameWrapper}>
          <span className={styles.PortfolioCaseName}>{caseName}</span>

          <div className={styles.PortfolioCaseNameWrapper__views}>
            <ViewsSVG />

            <span className={styles.PortfolioCaseNameWrapper__views__text}>
              {views}
            </span>
          </div>
        </div>
      </div>
    );
  },
);
PortfolioCase.displayName = "PortfolioCase";
