import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./LastDetailsModal.module.scss";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import ViewsSVG from "@/shared/assets/icons/Global/ViewsSVG.svg?react";
import DownloadSVG from "@/shared/assets/icons/Global/DownloadSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import {
  modalsTransitionDuration,
  transitionDuration,
} from "@/shared/const/global";
import { Input } from "@/shared/ui-kit/Input";
import { TagsInput } from "@/shared/ui-kit/TagsInput";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { closeModal } from "@/shared/utils/CloseModal";
import { UserEditPortfolioContext } from "../../../UserEditPortfolio";

export const LastDetailsModal: React.FC = memo((): React.JSX.Element => {
  // Стейты для модалок
  const {
    CaseLoadedImage,
    setLastDetailsModalAppear,
    setLastDetailsModalIsOpen,
    setCaseLoadingModalIsOpen,
    setDraftIsSavedModalIsOpen,
    setDraftIsSavedModalAppear,
    setProjectIsPublishedModalAppear,
    setProjectIsPublishedModalIsOpen,
    setCaseLoadedImage,
  } = useContext(UserEditPortfolioContext);

  // Возврат к предыдущей модалки
  const backOnClick = useCallback(() => {
    closeModal(setLastDetailsModalAppear, setLastDetailsModalIsOpen);

    const CaseLoadingModalOnOpenTimeOut = setTimeout(() => {
      setCaseLoadingModalIsOpen(true);
      clearTimeout(CaseLoadingModalOnOpenTimeOut);
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

  // Стейты для инпутов
  const [caseName, setCaseName] = useState<string>("");

  const [programmNames, setProgrammNames] = useState<string[]>([]);

  const [tryPublish, setTryPublish] = UseTryAction();

  // Нажатие на кнопку "Сохранить черновик"
  const onSaveDraft = useCallback(() => {
    if (caseName && programmNames.length) {
      closeModal(setLastDetailsModalAppear, setLastDetailsModalIsOpen);
      setDraftIsSavedModalIsOpen(true);

      const clearLoadedImageTimeout = setTimeout(() => {
        setCaseLoadedImage("");
        clearTimeout(clearLoadedImageTimeout);
      }, transitionDuration);

      const DraftIsSavedTimeout = setTimeout(() => {
        closeModal(setDraftIsSavedModalAppear, setDraftIsSavedModalIsOpen);
        clearTimeout(DraftIsSavedTimeout);
      }, modalsTransitionDuration);
    } else {
      setTryPublish(true);
    }
  }, [
    caseName,
    programmNames.length,
    setCaseLoadedImage,
    setDraftIsSavedModalAppear,
    setDraftIsSavedModalIsOpen,
    setLastDetailsModalAppear,
    setLastDetailsModalIsOpen,
    setTryPublish,
  ]);

  // Нажатие на кнопку "Опубликовать"
  const onPublishProject = useCallback(() => {
    if (caseName && programmNames.length) {
      closeModal(setLastDetailsModalAppear, setLastDetailsModalIsOpen);
      setProjectIsPublishedModalIsOpen(true);

      const clearLoadedImageTimeout = setTimeout(() => {
        setCaseLoadedImage("");
        clearTimeout(clearLoadedImageTimeout);
      }, transitionDuration);

      const ProjectIsPublishedTimeout = setTimeout(() => {
        closeModal(
          setProjectIsPublishedModalAppear,
          setProjectIsPublishedModalIsOpen
        );

        clearTimeout(ProjectIsPublishedTimeout);
      }, modalsTransitionDuration);
    } else {
      setTryPublish(true);
    }
  }, [
    caseName,
    programmNames.length,
    setCaseLoadedImage,
    setLastDetailsModalAppear,
    setLastDetailsModalIsOpen,
    setProjectIsPublishedModalAppear,
    setProjectIsPublishedModalIsOpen,
    setTryPublish,
  ]);

  return (
    <Flex className={styles.LastDetailsModal}>
      <Flex max gap="10" direction="column">
        <h2 className={styles.LastDetailsModal__caption}>Последшие штрихи</h2>

        <span className={styles.LastDetailsModal__subcaption}>
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
            <span className={styles.LastDetailsModal__imgViews__text}>300</span>
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

      <Flex max gap="10" direction="column">
        <Flex gap="5" direction="column" max>
          <span className={styles.LastDetailsModal__subcaption}>
            Название проекта
          </span>

          <Input
            type={"text"}
            placeholder="Введите название проекта..."
            value={caseName}
            onChange={(e) => setCaseName(e.target.value)}
            className={styles.LastDetailsModal__input}
            isWarn={tryPublish && !caseName}
          />
        </Flex>

        <Flex gap="5" direction="column" max>
          <span className={styles.LastDetailsModal__subcaption}>
            Инструменты
          </span>

          <TagsInput
            SelectedTags={programmNames}
            setSelectedTags={setProgrammNames}
            inputClassname={`${styles.LastDetailsModal__input} ${styles.LastDetailsModal__tagsInput}`}
            placeholder="Введите название программ которое использовали..."
            isWarn={tryPublish && !programmNames.length}
          />
        </Flex>

        <Flex gap="20" justify="end" align="center" max>
          <Button
            className={styles.LastDetailsModal__button}
            type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
            text="Сохранить черновик"
            onClick={onSaveDraft}
          />

          <Button
            className={styles.LastDetailsModal__button}
            type={ButtonTypes.RED}
            text="Cохранить"
            onClick={onPublishProject}
          />
        </Flex>
      </Flex>
    </Flex>
  );
});
