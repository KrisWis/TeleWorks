import { LoadingConst } from "@/shared/types/global";
import { LoadImageBlockSecondaryProps } from "../model/types";
import styles from "./LoadImageBlockSecondary.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { LoadedImageOnLoad } from "../../LoadImageBlock";
import { PageLoadingComponent } from "../../../lib/PageLoading/PageLoadingComponent/PageLoadingComponent";
import { Flex } from "../../../lib/Stack";
import { URL_PART } from "@/shared/const/app";
import { IncreaseScaleHover } from "../../../lib/IncreaseScaleHover";
import ChangeSVG from "@/shared/assets/icons/Global/ChangeSVG.svg?react";
import GarbageCanSVG from "@/shared/assets/icons/Global/GarbageCanSVG.svg?react";
import ReactCrop, { PixelCrop, type Crop } from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";
import { imgPreview } from "../model/cropPreview/imgPreview";
import { DragDropWrapper } from "@/shared/lib/DragDropWrapper";

export const LoadImageBlockSecondary: React.FC<LoadImageBlockSecondaryProps> =
  memo(
    ({
      className,
      LoadedImageErrors,
      setLoadedImage,
      setLoadedImageErrors,
      LoadedImage,
      size,
      isWarn,
    }): React.JSX.Element => {
      // Реализация drag&drop
      const LoadImageBlockSecondaryWrapperRef = useRef<HTMLDivElement>(null);

      // Hover эффект при наведении
      const loadImageBlockInputRef = useRef<HTMLInputElement>(null);

      // Функционал обрезания изображения
      const [crop, setCrop] = useState<Crop>();

      const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

      const imgRef = useRef<HTMLImageElement>(null);

      const [croppedImage, setCroppedImage] = useState<string>();

      // Сохранение изображения по нажатию на Enter
      const CropImageOnEnter = useCallback(
        async (e: KeyboardEvent) => {
          if (e.key == "Enter" && crop) {
            if (
              completedCrop?.width &&
              completedCrop?.height &&
              imgRef.current
            ) {
              const croppedFinalImage = await imgPreview(
                imgRef.current,
                completedCrop,
              );
              setCroppedImage(croppedFinalImage);
              setLoadedImage(croppedFinalImage);
              setCrop(undefined);
            }
          }
        },
        [completedCrop, crop, setLoadedImage],
      );

      // Привязка событий
      useEffect(() => {
        document.addEventListener("keydown", CropImageOnEnter);

        return () => {
          document.removeEventListener("keydown", CropImageOnEnter);
        };
      }, [CropImageOnEnter]);

      // Проверка на видео
      const [isVideo, setIsVideo] = useState<boolean>(false);

      // Сброс стейта при загрузке нового изображения
      const VideoIsCheckedRef = useRef<boolean>(false);

      useEffect(() => {
        setCroppedImage(undefined);

        (async () => {
          VideoIsCheckedRef.current = false;
          const blob = await fetch(LoadedImage).then((r) => r.blob());

          if (!VideoIsCheckedRef.current) {
            setIsVideo(blob.type.startsWith("video"));
            VideoIsCheckedRef.current = true;
          }
        })();
      }, [LoadedImage]);

      return (
        <DragDropWrapper
          OnDragEnter={() =>
            LoadImageBlockSecondaryWrapperRef.current?.classList.add(
              styles.LoadImageBlockSecondary__wrapper__active,
            )
          }
          OnDragLeave={() =>
            LoadImageBlockSecondaryWrapperRef.current?.classList.remove(
              styles.LoadImageBlockSecondary__wrapper__active,
            )
          }
          setLoadedImage={setLoadedImage}
          setLoadedImageErrors={setLoadedImageErrors}
          LoadedImageErrors={LoadedImageErrors}
        >
          <div
            className={`${styles.LoadImageBlockSecondary} 
            ${styles[`LoadImageBlockSecondary__${size}`]} 
            ${
              !LoadedImage.startsWith("data:image") &&
              LoadedImage &&
              LoadedImage != LoadingConst
                ? styles.LoadImageBlockSecondary__video
                : ""
            } 
            ${
              LoadedImage && LoadedImage != LoadingConst
                ? styles.LoadImageBlockSecondary__hasImage
                : ""
            } 
            ${className}`}
          >
            <div
              ref={LoadImageBlockSecondaryWrapperRef}
              className={`${styles.LoadImageBlockSecondary__wrapper}
              ${
                LoadedImage && LoadedImage != LoadingConst
                  ? styles.LoadImageBlockSecondary__wrapper__withImg
                  : ""
              }
              ${isWarn ? styles.LoadImageBlockSecondary__wrapper__warn : ""} 
            `}
            >
              {!LoadedImage || LoadedImageErrors.length ? (
                <label
                  className={styles.LoadImageBlockSecondary__wrapperPadding}
                >
                  <div
                    className={`${styles.LoadImageBlockSecondary__wrapperWrapper}`}
                  ></div>

                  <Flex max direction="column" align="center" justify="center">
                    <img
                      src={
                        size == "small"
                          ? `${URL_PART}/global/images/LoadImageBlockSecondary_img.png`
                          : `${URL_PART}/global/images/LoadImageBlockSecondaryMedium_img.png`
                      }
                      alt="Изображение того, как мужчина упоковывает в папку изображения"
                    />

                    <span
                      className={
                        styles.LoadImageBlockSecondary__wrapper__caption
                      }
                    >
                      Перетащите изображение или загрузите его.
                    </span>

                    <span
                      className={styles.LoadImageBlockSecondary__wrapper__desc}
                    >
                      Рекомендуемая ширина не менее 1600px. Не более 10 МБ
                      каждое (20 МБ для видео)
                    </span>

                    <span
                      className={styles.LoadImageBlockSecondary__wrapper__desc}
                    >
                      Используйте высокое разрешение и файлы формата (pdf, jpeg,
                      png)
                    </span>
                  </Flex>
                </label>
              ) : LoadedImage == LoadingConst ? (
                <div
                  className={
                    styles.LoadImageBlockSecondary__wrapper__loadingWrapper
                  }
                >
                  <PageLoadingComponent size="small" />
                </div>
              ) : (
                <label
                  className={
                    styles.LoadImageBlockSecondary__wrapper__imgWrapper
                  }
                >
                  {isVideo ? (
                    <video
                      controls
                      className={styles.LoadImageBlockSecondary__wrapper__img}
                      src={LoadedImage}
                      preload="none"
                    ></video>
                  ) : (
                    <ReactCrop
                      onComplete={(c) => {
                        setCompletedCrop(c);
                      }}
                      crop={crop}
                      onChange={(c: Crop) => setCrop(c)}
                      style={{ width: "100%" }}
                    >
                      <img
                        className={styles.LoadImageBlockSecondary__wrapper__img}
                        src={croppedImage ? croppedImage : LoadedImage}
                        alt="Изображение, загруженное пользователем"
                        ref={imgRef}
                      ></img>
                    </ReactCrop>
                  )}

                  <Flex
                    className={
                      styles.LoadImageBlockSecondary__wrapper__imgWrapper__icons
                    }
                    gap="10"
                    align="center"
                  >
                    <IncreaseScaleHover
                      onClick={() => {
                        loadImageBlockInputRef.current!.click();
                        loadImageBlockInputRef.current!.value = "";
                      }}
                    >
                      <Flex
                        className={
                          styles.LoadImageBlockSecondary__wrapper__imgWrapper__icons__circle
                        }
                        align="center"
                        justify="center"
                      >
                        <ChangeSVG />
                      </Flex>
                    </IncreaseScaleHover>

                    <IncreaseScaleHover onClick={() => setLoadedImage("")}>
                      <Flex
                        className={
                          styles.LoadImageBlockSecondary__wrapper__imgWrapper__icons__circle
                        }
                        align="center"
                        justify="center"
                      >
                        <GarbageCanSVG />
                      </Flex>
                    </IncreaseScaleHover>
                  </Flex>
                </label>
              )}
            </div>

            {LoadedImageErrors.length > 0 && (
              <div className={styles.LoadImageBlockSecondary__wrapper__errors}>
                {LoadedImageErrors.map((error) => (
                  <span
                    key={error}
                    className={styles.LoadImageBlockSecondary__wrapper__error}
                  >
                    {error}
                  </span>
                ))}
              </div>
            )}
          </div>

          <input
            className={`${
              !LoadedImage.startsWith("data:image") &&
              LoadedImage &&
              LoadedImage != LoadingConst
                ? styles.LoadImageBlockSecondary__wrapper__input__video
                : ""
            } 
            ${
              (LoadedImage && LoadedImage != LoadingConst) || croppedImage
                ? styles.LoadImageBlockSecondary__wrapper__input__hasImage
                : ""
            }
            ${styles.LoadImageBlockSecondary__wrapper__input}`}
            type="file"
            onChange={(e) =>
              LoadedImageOnLoad(e, setLoadedImage, setLoadedImageErrors)
            }
            accept="image/png, image/gif, image/jpeg, image/jpg, video/*"
            onMouseEnter={() =>
              LoadedImage.startsWith("data:image") &&
              LoadImageBlockSecondaryWrapperRef.current?.classList.add(
                styles.LoadImageBlockSecondary__wrapper__active,
              )
            }
            onMouseLeave={() => {
              LoadedImage.startsWith("data:image") &&
                LoadImageBlockSecondaryWrapperRef.current?.classList.remove(
                  styles.LoadImageBlockSecondary__wrapper__active,
                );
            }}
            ref={loadImageBlockInputRef}
          />
        </DragDropWrapper>
      );
    },
  );
LoadImageBlockSecondary.displayName = "LoadImageBlockSecondary";
