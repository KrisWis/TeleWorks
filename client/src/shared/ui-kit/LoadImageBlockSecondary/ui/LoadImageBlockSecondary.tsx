import { LoadingConst } from "@/shared/types";
import { DragDropWrapper } from "../../DragDropWrapper";
import { LoadImageBlockSecondaryProps } from "../model/types";
import styles from "./LoadImageBlockSecondary.module.scss";
import { memo, useRef } from "react";
import { LoadedImageOnLoad } from "../../LoadImageBlock";
import { PageLoadingComponent } from "../../PageLoadingComponent/PageLoadingComponent";
import { Flex } from "../../Stack";
import { URL_PART } from "@/app";
import { IncreaseScaleHover } from "../../IncreaseScaleHover";
import ChangeSVG from "@/shared/assets/icons/Global/ChangeSVG.svg?react";
import GarbageCanSVG from "@/shared/assets/icons/Global/GarbageCanSVG.svg?react";

// TODO: сделать проверку на наличие и делать класс с pointer-events: all, input убирать.

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

      return (
        <DragDropWrapper
          OnDragEnter={() =>
            LoadImageBlockSecondaryWrapperRef.current?.classList.add(
              styles.LoadImageBlockSecondary__wrapper__active
            )
          }
          OnDragLeave={() =>
            LoadImageBlockSecondaryWrapperRef.current?.classList.remove(
              styles.LoadImageBlockSecondary__wrapper__active
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
                  {!LoadedImage.startsWith("data:image") ? (
                    <video
                      controls
                      className={styles.LoadImageBlockSecondary__wrapper__img}
                      src={LoadedImage}
                      preload="none"
                    ></video>
                  ) : (
                    <img
                      className={styles.LoadImageBlockSecondary__wrapper__img}
                      src={LoadedImage}
                      alt="Изображение хедера"
                    ></img>
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
            ${LoadedImage && LoadedImage != LoadingConst ? styles.LoadImageBlockSecondary__wrapper__input__hasImage : ""}
            ${styles.LoadImageBlockSecondary__wrapper__input}`}
            type="file"
            onChange={(e) =>
              LoadedImageOnLoad(e, setLoadedImage, setLoadedImageErrors)
            }
            accept="image/png, image/gif, image/jpeg, image/jpg, video/*"
            onMouseEnter={() =>
              LoadedImage.startsWith("data:image") &&
              LoadImageBlockSecondaryWrapperRef.current?.classList.add(
                styles.LoadImageBlockSecondary__wrapper__active
              )
            }
            onMouseLeave={() => {
              LoadedImage.startsWith("data:image") &&
                LoadImageBlockSecondaryWrapperRef.current?.classList.remove(
                  styles.LoadImageBlockSecondary__wrapper__active
                );
            }}
            ref={loadImageBlockInputRef}
          />
        </DragDropWrapper>
      );
    }
  );
