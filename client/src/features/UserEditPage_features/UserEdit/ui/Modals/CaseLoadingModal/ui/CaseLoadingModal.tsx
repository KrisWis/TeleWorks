import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./CaseLoadingModal.module.scss";
import { memo, useCallback, useEffect, useRef } from "react";
import { LoadImageBlockSecondary } from "@/shared/ui-kit/LoadImageBlockSecondary";
import { UseLoadedImageErrors } from "@/shared/ui-kit/LoadImageBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { CaseLoadingModalProps } from "../model/types";
import { transitionDuration } from "@/app";

export const CaseLoadingModal: React.FC<CaseLoadingModalProps> = memo(
  ({
    setLastDetailsModalIsOpen,
    setCaseLoadingModalIsOpen,
    setCaseLoadingModalAppear,
    CaseLoadedImage,
    setCaseLoadedImage,
  }): React.JSX.Element => {
    // Стейты для загрузки изображений
    const [CaseLoadedImageErrors, setCaseLoadedImageErrors] =
      UseLoadedImageErrors();

    // Закрытие модалки
    const ModalOnOpenTimeOutRef = useRef<NodeJS.Timeout>();

    const CloseModal = useCallback(() => {
      setCaseLoadingModalAppear(false);

      ModalOnOpenTimeOutRef.current = setTimeout(() => {
        setCaseLoadingModalIsOpen(false);
      }, transitionDuration);
    }, [setCaseLoadingModalAppear, setCaseLoadingModalIsOpen]);

    useEffect(() => {
      return () => {
        clearTimeout(ModalOnOpenTimeOutRef.current);
      };
    }, []);

    // Нажатие на кнопку "Продолжить"
    const continueOnClick = useCallback(() => {
      CloseModal();

      setTimeout(() => {
        setLastDetailsModalIsOpen(true);
      }, transitionDuration);
    }, [CloseModal, setLastDetailsModalIsOpen]);

    return (
      <Flex
        className={styles.CaseLoadingModal}
        align="center"
        direction="column"
        gap="30"
      >
        <h3 className={styles.CaseLoadingModal__caption}>
          Над чем вы работали?
        </h3>

        <LoadImageBlockSecondary
          size={"medium"}
          LoadedImage={CaseLoadedImage}
          setLoadedImage={setCaseLoadedImage}
          LoadedImageErrors={CaseLoadedImageErrors}
          setLoadedImageErrors={setCaseLoadedImageErrors}
        />

        <Flex max justify="end">
          {CaseLoadedImage && (
            <Button
              className={styles.CaseLoadingModal__button}
              type={ButtonTypes.RED_WITHOUT_OUTLINE}
              text="+Добавить блок"
            />
          )}

          <Button
            className={styles.CaseLoadingModal__button}
            type={ButtonTypes.RED}
            text="Продолжить"
            onClick={continueOnClick}
          />
        </Flex>
      </Flex>
    );
  }
);
