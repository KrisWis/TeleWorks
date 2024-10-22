import { LoadingConst } from "@/shared/types";
import { LoadImageBlockProps } from "../model/LoadImageBlock_types";
import styles from "./LoadImageBlock.module.scss";
import { useRef } from "react";
import ImgSVG from "@/shared/assets/icons/Global/ImgSVG.svg?react";
import {
  LoadImageBlockMinSize,
  LoadImageBlockMaxSize,
  LoadImageBlockMinWidth,
  LoadImageBlockMinHeight,
} from "../model/LoadImageIsValidCheck/LoadImageIsValidCheck";
import { LoadedImageOnLoad } from "..";
import { PageLoadingComponent } from "../../PageLoadingComponent/PageLoadingComponent";
import { mockFileName } from "..";
import { DragDropWrapper } from "../../DragDropWrapper";

export const LoadImageBlock: React.FC<LoadImageBlockProps> = ({
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

  // Hover эффект при наведении
  const loadImageBlockInputRef = useRef<HTMLInputElement>(null);

  return (
    <DragDropWrapper
      OnDragEnter={() =>
        loadImageBlockWrapperRef.current?.classList.add(
          styles.loadImageBlock__wrapper__active
        )
      }
      OnDragLeave={() => {
        loadImageBlockWrapperRef.current?.classList.remove(
          styles.loadImageBlock__wrapper__active
        );
      }}
      setLoadedImage={setLoadedImage}
      setLoadedImageErrors={setLoadedImageErrors}
      LoadedImageErrors={LoadedImageErrors}
      onlyImages={true}
    >
      <div
        className={`${styles.loadImageBlock} ${styles[`loadImageBlock__${size}`]} 
        ${className ? className : ""}`}
        data-testid="LoadImageBlock.Drag&Drop"
      >
        <div
          ref={loadImageBlockWrapperRef}
          className={`${styles.loadImageBlock__wrapper} Page__SirineWrapper 
        ${LoadedImage && LoadedImage != LoadingConst ? styles.loadImageBlock__wrapper__withImg : ""}`}
        >
          {!LoadedImage || LoadedImageErrors.length ? (
            <label className={styles.loadImageBlock__wrapperPadding}>
              <div className={`${styles.loadImageBlock__wrapperWrapper}`}></div>
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
              <PageLoadingComponent size="small" />
            </div>
          ) : (
            <label className={styles.loadImageBlock__wrapper__imgWrapper}>
              <img
                className={styles.loadImageBlock__wrapper__img}
                src={LoadedImage}
                alt="Изображение хедера"
                data-testid="LoadImageBlock.Image"
              ></img>
            </label>
          )}
        </div>

        {LoadedImageErrors.length > 0 && (
          <div className={styles.loadImageBlock__wrapper__errors}>
            {LoadedImageErrors.map((error) => (
              <span
                data-testid={`LoadImageBlock.Error.${error}`}
                key={error}
                className={styles.loadImageBlock__wrapper__error}
              >
                {error}
              </span>
            ))}
          </div>
        )}
      </div>

      <input
        className={styles.loadImageBlock__wrapper__input}
        type="file"
        onChange={(e) =>
          LoadedImageOnLoad(
            e,
            setLoadedImage,
            setLoadedImageErrors,
            mockFileName
          )
        }
        accept="image/png, image/gif, image/jpeg, image/jpg"
        data-testid="LoadImageBlock.Input"
        ref={loadImageBlockInputRef}
        onMouseEnter={() =>
          loadImageBlockWrapperRef.current?.classList.add(
            styles.loadImageBlock__wrapper__active
          )
        }
        onMouseLeave={() => {
          loadImageBlockWrapperRef.current?.classList.remove(
            styles.loadImageBlock__wrapper__active
          );
        }}
      />
    </DragDropWrapper>
  );
};
