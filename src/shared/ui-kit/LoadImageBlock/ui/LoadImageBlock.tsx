import { LoadingConst, LoadingType } from "@/shared/types";
import {
  LoadedImageErrorsTypes,
  LoadImageBlockProps,
} from "../model/LoadImageBlock_types";
import styles from "./LoadImageBlock.module.scss";
import { memo, useRef, useState } from "react";
import ImgSVG from "@/shared/assets/icons/Global/ImgSVG.svg?react";
import { SemipolarLoading } from "react-loadingg";

// Переменные для валидации
const LoadImageBlockMinWidth: number = 660;
const LoadImageBlockMinHeight: number = 440;
const LoadImageBlockMinSize: number = 30720;
const LoadImageBlockMaxSize: number = 10485760;

export const LoadImageBlock: React.FC<LoadImageBlockProps> = memo(
  ({ title, size }): React.JSX.Element => {
    // Загрузка/отображение и валидация изображения шапки
    const HeaderInputRef = useRef<HTMLInputElement>(null);

    const [LoadedImage, setLoadedImage] = useState<string | LoadingType>("");

    const [LoadedImageErrors, setLoadedImageErrors] = useState<
      LoadedImageErrorsTypes[]
    >([]);

    const LoadedImageOnLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoadedImage(LoadingConst);

      const UserInputFile = e.target.files;

      const LoadedImageErrorsCopy: LoadedImageErrorsTypes[] = [];

      setLoadedImageErrors([]);

      if (UserInputFile && UserInputFile.length) {
        const fileReader = new FileReader();

        const ImageSizeCheck: boolean =
          UserInputFile[0].size >= LoadImageBlockMinSize &&
          UserInputFile[0].size <= LoadImageBlockMaxSize;

        fileReader.onload = function () {
          const imageForCheck = new Image();
          imageForCheck.src = fileReader.result as string;

          imageForCheck.onload = function () {
            const ImageResolutionCheck: boolean =
              imageForCheck.naturalWidth >= LoadImageBlockMinWidth &&
              imageForCheck.naturalHeight >= LoadImageBlockMinHeight;

            if (ImageResolutionCheck && ImageSizeCheck) {
              setLoadedImage(fileReader.result as string);
            } else {
              if (!ImageResolutionCheck)
                LoadedImageErrorsCopy.push(
                  LoadedImageErrorsTypes.RESOLUTION_ERROR
                );

              if (!ImageSizeCheck)
                LoadedImageErrorsCopy.push(LoadedImageErrorsTypes.SIZE_ERROR);

              setLoadedImageErrors(LoadedImageErrorsCopy);
            }
          };
        };
        fileReader.readAsDataURL(UserInputFile[0]);
      }
    };

    return (
      <div
        className={`${styles.loadImageBlock} ${styles[`loadImageBlock__${size}`]}`}
      >
        <div
          className={`${styles.loadImageBlock__wrapper} Page__SirineWrapper 
        ${LoadedImage ? styles.loadImageBlock__wrapper__withImg : ""}`}
        >
          {!LoadedImage || LoadedImageErrors.length ? (
            <div className={styles.loadImageBlock__wrapperPadding}>
              <div className={`${styles.loadImageBlock__wrapperWrapper}`}></div>

              <input
                ref={HeaderInputRef}
                className={styles.loadImageBlock__wrapper__input}
                type="file"
                onChange={LoadedImageOnLoad}
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />

              <ImgSVG />

              <h4 className={styles.loadImageBlock__caption}>{title}</h4>

              <div
                className={styles.loadImageBlock__wrapper__requirements}
              ></div>

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
          ) : LoadedImage == LoadingConst ? (
            <SemipolarLoading
              style={{ margin: "auto", marginTop: "7%" }}
              color="var(--main-color)"
              size="small"
            />
          ) : (
            <div className={styles.loadImageBlock__wrapper__imgWrapper}>
              <img
                className={styles.loadImageBlock__wrapper__img}
                src={LoadedImage}
                alt="Изображение хедера"
              ></img>

              <input
                ref={HeaderInputRef}
                className={styles.loadImageBlock__wrapper__input}
                type="file"
                onChange={LoadedImageOnLoad}
                accept="image/png, image/gif, image/jpeg, image/jpg"
              />
            </div>
          )}
        </div>

        <div className={styles.loadImageBlock__wrapper__errors}>
          {LoadedImageErrors.map((error) => (
            <span key={error} className={styles.loadImageBlock__wrapper__error}>
              {error}
            </span>
          ))}
        </div>
      </div>
    );
  }
);
