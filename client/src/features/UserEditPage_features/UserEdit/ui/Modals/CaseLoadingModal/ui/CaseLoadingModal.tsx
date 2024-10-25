import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./CaseLoadingModal.module.scss";
import { memo, useCallback } from "react";
import { LoadImageBlockSecondary } from "@/shared/ui-kit/LoadImageBlockSecondary";
import { UseLoadedImageErrors } from "@/shared/ui-kit/LoadImageBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { CaseLoadingModalProps } from "../model/types";
import { transitionDuration } from "@/app";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";

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
    const CloseModal = useCallback(() => {
      setCaseLoadingModalAppear(false);

      const ModalOnOpenTimeOutRef = setTimeout(() => {
        setCaseLoadingModalIsOpen(false);
        clearTimeout(ModalOnOpenTimeOutRef);
      }, transitionDuration);
    }, [setCaseLoadingModalAppear, setCaseLoadingModalIsOpen]);

    // Если изображение не загружено, то на следующую модалку попасть не выйдет
    const [tryContinue, setTryContinue] = UseTryAction();

    // Нажатие на кнопку "Продолжить"
    const continueOnClick = useCallback(() => {
      if (CaseLoadedImage) {
        CloseModal();

        setTimeout(() => {
          setLastDetailsModalIsOpen(true);
        }, transitionDuration);
      } else {
        setTryContinue(true);
      }
    }, [
      CaseLoadedImage,
      CloseModal,
      setLastDetailsModalIsOpen,
      setTryContinue,
    ]);

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
          isWarn={!CaseLoadedImage && tryContinue}
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
