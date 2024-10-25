import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./LastDetailsModal.module.scss";
import { memo, useCallback, useEffect, useState } from "react";
import { LastDetailsModalProps } from "../model/types";
import ViewsSVG from "@/shared/assets/icons/Global/ViewsSVG.svg?react";
import DownloadSVG from "@/shared/assets/icons/Global/DownloadSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { transitionDuration } from "@/app";

export const LastDetailsModal: React.FC<LastDetailsModalProps> = memo(
  ({
    CaseLoadedImage,
    setLastDetailsModalAppear,
    setLastDetailsModalIsOpen,
    setCaseLoadingModalIsOpen,
  }): React.JSX.Element => {
    // Возврат к предыдущей модалки
    const backOnClick = useCallback(() => {
      setLastDetailsModalAppear(false);

      const ModalOnOpenTimeOut = setTimeout(() => {
        setLastDetailsModalIsOpen(false);
        clearTimeout(ModalOnOpenTimeOut);

        const CaseLoadingModalOnOpenTimeOut = setTimeout(() => {
          setCaseLoadingModalIsOpen(true);
          clearTimeout(CaseLoadingModalOnOpenTimeOut);
        }, transitionDuration);
      }, transitionDuration);
    }, [
      setCaseLoadingModalIsOpen,
      setLastDetailsModalAppear,
      setLastDetailsModalIsOpen,
    ]);

    // Проверка на видео
    const [isVideo, setIsVideo] = useState<boolean>(false);

    useEffect(() => {
      (async () => {
        const blob = await fetch(CaseLoadedImage).then((r) => r.blob());
        setIsVideo(blob.type.startsWith("video"));
      })();
    }, [CaseLoadedImage]);

    return (
      <Flex align="center" gap="15" max className={styles.LastDetailsModal}>
        <Flex gap="10" direction="column">
          <h2 className={styles.LastDetailsModal__caption}>Последшие штрихи</h2>

          <span className={styles.LastDetailsModal__chooseImage}>
            Выберите обложку
          </span>

          <div className={styles.LastDetailsModal__imgWrapper}>
            {isVideo ? (
              <video
                controls
                className={styles.LastDetailsModal__img}
                src={CaseLoadedImage}
                preload="none"
              ></video>
            ) : (
              <img
                className={styles.LastDetailsModal__img}
                src={CaseLoadedImage}
                alt="Обложка кейса"
              ></img>
            )}

            <Flex
              align="center"
              gap="3"
              className={styles.LastDetailsModal__imgViews}
            >
              <ViewsSVG className={styles.LastDetailsModal__imgViews__svg} />
              <span className={styles.LastDetailsModal__imgViews__text}>
                300
              </span>
            </Flex>
          </div>

          <IncreaseScaleHover
            onClick={backOnClick}
            className={styles.LastDetailsModal__download}
          >
            <Flex gap="10" align="center">
              <DownloadSVG />

              <span className={styles.LastDetailsModal__download__text}>
                Обрезать/выбрать обложку
              </span>
            </Flex>
          </IncreaseScaleHover>
        </Flex>
      </Flex>
    );
  }
);
