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
import { Flex } from "../../Stack";
import { mobile_mediaQuery } from "@/app";

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
    }): React.JSX.Element => {
      return (
        <Flex
          max
          direction="column"
          gap="10"
          className={`${styles[`loadImageBlockWithoutLoading__${size}`]} ${className ? className : ""} 
          ${!withBG ? "Page__GrayBorderWithWhiteBGWrapper" : ""}
          ${isWarn ? styles.loadImageBlockWithoutLoading__warning : ""} ${styles.loadImageBlockWithoutLoading}`}
          onClick={() => inputRef?.current?.click()}
        >
          <div
            className={`${styles.loadImageBlockWithoutLoading__wrapper} ${withBG ? "Page__SirineWrapper" : ""}`}
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
                {!mobile_mediaQuery.matches ? <ImgSVG /> : <ImgSVGAdaptive />}

                <h4 className={styles.loadImageBlockWithoutLoading__caption}>
                  {title}
                </h4>

                {requirements && (
                  <div
                    className={
                      styles.loadImageBlockWithoutLoading__wrapper__requirements
                    }
                  >
                    <span className={styles.loadImageBlockWithoutLoading__desc}>
                      Минимальный размер: {LoadImageBlockMinWidth} х{" "}
                      {LoadImageBlockMinHeight} px
                    </span>

                    <span className={styles.loadImageBlockWithoutLoading__desc}>
                      Вес: {Math.round(LoadImageBlockMinSize / 1024)} кб —{" "}
                      {Math.round(LoadImageBlockMaxSize / 1048576)} Мб
                    </span>

                    <span className={styles.loadImageBlockWithoutLoading__desc}>
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
