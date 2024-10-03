import styles from "./LoadImageBlockWithoutLoading.module.scss";
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
    }): React.JSX.Element => {
      return (
        <Flex
          direction="column"
          gap="10"
          className={`${styles[`loadImageBlock__${size}`]} ${className ? className : ""} ${!withBG ? "Page__GrayBorderWithWhiteBGWrapper" : ""}`}
          onClick={() => inputRef?.current?.click()}
        >
          <div
            className={`${styles.loadImageBlock__wrapper} ${withBG ? "Page__SirineWrapper" : ""}`}
          >
            <label className={styles.loadImageBlock__wrapperPadding}>
              <div className={`${styles.loadImageBlock__wrapperWrapper}`}></div>

              <div className={styles.loadImageBlock__wrapper__info}>
                {!mobile_mediaQuery.matches ? <ImgSVG /> : <ImgSVGAdaptive />}

                <h4 className={styles.loadImageBlock__caption}>{title}</h4>

                {requirements && (
                  <div className={styles.loadImageBlock__wrapper__requirements}>
                    <span className={styles.loadImageBlock__desc}>
                      Минимальный размер: {LoadImageBlockMinWidth} х{" "}
                      {LoadImageBlockMinHeight} px
                    </span>

                    <span className={styles.loadImageBlock__desc}>
                      Вес: {Math.round(LoadImageBlockMinSize / 1024)} кб —{" "}
                      {Math.round(LoadImageBlockMaxSize / 1048576)} Мб
                    </span>

                    <span className={styles.loadImageBlock__desc}>
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
