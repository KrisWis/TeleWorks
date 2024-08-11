import { LoadingConst } from "@/shared/types";
import {
  LoadedImageErrorsTypes,
  LoadImageBlockProps,
} from "../model/LoadImageBlock_types";
import styles from "./LoadImageBlock.module.scss";
import { memo, useEffect, useRef } from "react";
import ImgSVG from "@/shared/assets/icons/Global/ImgSVG.svg?react";
import { SemipolarLoading } from "react-loadingg";
import {
  LoadImageBlockMinSize,
  LoadImageBlockMaxSize,
  LoadImageBlockMinWidth,
  LoadImageBlockMinHeight,
} from "../model/LoadImageIsValidCheck/LoadImageIsValidCheck";
import { LoadedImageOnLoad } from "..";

export const LoadImageBlock: React.FC<LoadImageBlockProps> = memo(
  ({
    title,
    size,
    requirements = true,
    className,
    LoadedImage,
    setLoadedImage,
    LoadedImageErrors,
    setLoadedImageErrors,
  }): React.JSX.Element => {
    // Реализация drag&drop
    const loadImageBlockWrapperRef = useRef<HTMLDivElement>(null);

    const defaultDragDropFunc = (e: Event) => {
      e.preventDefault();
      return false;
    };

    useEffect(() => {
      ["dragover", "drop"].forEach(function (event: string) {
        document.addEventListener(event, defaultDragDropFunc);
      });

      return () => {
        ["dragover", "drop"].forEach(function (event: string) {
          document.removeEventListener(event, defaultDragDropFunc);
        });
      };
    }, []);

    const LoadedFileOnDrop = (
      e: React.DragEvent<HTMLDivElement>
    ): void | boolean => {
      loadImageBlockWrapperRef.current?.classList.remove(
        styles.loadImageBlock__wrapper__active
      );

      const file = e.dataTransfer?.files[0];

      if (!file) {
        return;
      }

      if (file.type.startsWith("image/")) {
        LoadedImageOnLoad(e, setLoadedImage, setLoadedImageErrors);
      } else {
        setLoadedImageErrors([
          ...LoadedImageErrors,
          LoadedImageErrorsTypes.FORMAT_ERROR,
        ]);
        return false;
      }
    };

    return (
      <div
        className={`${styles.loadImageBlock} ${styles[`loadImageBlock__${size}`]} ${className ? className : ""}`}
        onDragEnter={() =>
          loadImageBlockWrapperRef.current?.classList.add(
            styles.loadImageBlock__wrapper__active
          )
        }
        onDragLeave={() =>
          loadImageBlockWrapperRef.current?.classList.remove(
            styles.loadImageBlock__wrapper__active
          )
        }
        onDrop={LoadedFileOnDrop}
      >
        <div
          className={`${styles.loadImageBlock__wrapper} Page__SirineWrapper 
        ${LoadedImage && LoadedImage != LoadingConst ? styles.loadImageBlock__wrapper__withImg : ""}`}
          ref={loadImageBlockWrapperRef}
        >
          {!LoadedImage || LoadedImageErrors.length ? (
            <label className={styles.loadImageBlock__wrapperPadding}>
              <div className={`${styles.loadImageBlock__wrapperWrapper}`}></div>

              <input
                className={styles.loadImageBlock__wrapper__input}
                type="file"
                onChange={(e) =>
                  LoadedImageOnLoad(e, setLoadedImage, setLoadedImageErrors)
                }
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />

              <div className={styles.loadImageBlock__wrapper__info}>
                <ImgSVG />

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
          ) : LoadedImage == LoadingConst ? (
            <div className={styles.loadImageBlock__wrapper__loadingWrapper}>
              <SemipolarLoading color="var(--main-color)" size="small" />
            </div>
          ) : (
            <label className={styles.loadImageBlock__wrapper__imgWrapper}>
              <img
                className={styles.loadImageBlock__wrapper__img}
                src={LoadedImage}
                alt="Изображение хедера"
              ></img>

              <input
                className={styles.loadImageBlock__wrapper__input}
                type="file"
                onChange={(e) =>
                  LoadedImageOnLoad(e, setLoadedImage, setLoadedImageErrors)
                }
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />
            </label>
          )}
        </div>

        {LoadedImageErrors.length > 0 && (
          <div className={styles.loadImageBlock__wrapper__errors}>
            {LoadedImageErrors.map((error) => (
              <span
                key={error}
                className={styles.loadImageBlock__wrapper__error}
              >
                {error}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
);
