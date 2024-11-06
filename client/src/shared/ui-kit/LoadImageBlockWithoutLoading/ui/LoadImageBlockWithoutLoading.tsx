import styles from "./loadImageBlockWithoutLoading.module.scss";
import { memo } from "react";
import { LoadImageBlockWithoutLoadingProps } from "../model/LoadImageBlockWithoutLoading_types";
import ImgSVG from "@/shared/assets/icons/Global/ImgSVG.svg?react";
import ImgSVGAdaptive from "@/shared/assets/icons/Global/ImgSVGAdaptiveSVG.svg?react";
import {
  LoadImageBlockMaxSize,
  LoadImageBlockMinHeight,
  LoadImageBlockMinSize,
  LoadImageBlockMinWidth,
} from "../../LoadImageBlock";
import { Flex } from "../../../lib/Stack";
import { mobile_mediaQuery } from "@/shared/const/global";

export const LoadImageBlockWithoutLoading: React.FC<LoadImageBlockWithoutLoadingProps> =
  memo(
    ({
      title,
      size,
      requirements = true,
      className,
      withBG = true,
      inputRef,
      isWarn = false,
      isHovered = false,
      bigViewInMobile = false,
      onClick,
    }): React.JSX.Element => {
      return (
        <Flex
          max
          direction="column"
          gap="10"
          className={`${styles[`loadImageBlockWithoutLoading__${size}`]} ${className ? className : ""} 
          ${!withBG ? "Page__GrayBorderWithWhiteBGWrapper" : ""}
          ${isWarn ? styles.loadImageBlockWithoutLoading__warning : ""} ${styles.loadImageBlockWithoutLoading}`}
          onClick={() => {
            inputRef?.current?.click();
            onClick && onClick();
          }}
        >
          <div
            className={`${styles.loadImageBlockWithoutLoading__wrapper} 
            ${withBG ? "Page__SirineWrapper" : ""}
            ${bigViewInMobile ? styles.loadImageBlockWithoutLoading__wrapper__bigViewInMobile : ""}`}
          >
            <label
              className={styles.loadImageBlockWithoutLoading__wrapperPadding}
            >
              {isHovered && (
                <div
                  className={`${styles.loadImageBlockWithoutLoading__wrapperWrapper}`}
                ></div>
              )}

              <div
                className={styles.loadImageBlockWithoutLoading__wrapper__info}
              >
                {!mobile_mediaQuery.matches || bigViewInMobile ? (
                  <ImgSVG />
                ) : (
                  <ImgSVGAdaptive />
                )}

                <h4
                  className={`${styles.loadImageBlockWithoutLoading__caption} 
                  ${bigViewInMobile ? styles.loadImageBlockWithoutLoading__caption__bigViewInMobile : ""}`}
                >
                  {title}
                </h4>

                {requirements && (
                  <div
                    className={
                      styles.loadImageBlockWithoutLoading__wrapper__requirements
                    }
                  >
                    <span
                      className={`${styles.loadImageBlockWithoutLoading__desc} ${bigViewInMobile ? styles.loadImageBlockWithoutLoading__desc__bigViewInMobile : ""}`}
                    >
                      Минимальный размер: {LoadImageBlockMinWidth} х{" "}
                      {LoadImageBlockMinHeight} px
                    </span>

                    <span
                      className={`${styles.loadImageBlockWithoutLoading__desc} ${bigViewInMobile ? styles.loadImageBlockWithoutLoading__desc__bigViewInMobile : ""}`}
                    >
                      Вес: {Math.round(LoadImageBlockMinSize / 1024)} кб —{" "}
                      {Math.round(LoadImageBlockMaxSize / 1048576)} Мб
                    </span>

                    <span
                      className={`${styles.loadImageBlockWithoutLoading__desc} ${bigViewInMobile ? styles.loadImageBlockWithoutLoading__desc__bigViewInMobile : ""}`}
                    >
                      Форматы: jpg, jpeg, png, gif
                    </span>
                  </div>
                )}
              </div>
            </label>
          </div>
        </Flex>
      );
    }
  );
