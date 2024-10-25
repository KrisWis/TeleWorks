import {
  UseLoadedImage,
  UseLoadedImageErrors,
} from "@/shared/ui-kit/LoadImageBlock";
import styles from "./HeaderLoadingModal.module.scss";
import { memo, useCallback, useEffect, useRef } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { LoadImageBlockSecondary } from "@/shared/ui-kit/LoadImageBlockSecondary";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { HeaderLoadingModalProps } from "../model/types";
import { transitionDuration } from "@/app";

export const HeaderLoadingModal: React.FC<HeaderLoadingModalProps> = memo(
  ({
    setHeaderLoadedImageFinish,
    CustomSetModalAppear,
    setModalOpen,
    HeaderLoadedImageFinish,
  }): React.JSX.Element => {
    // Стейты для загрузки изображения/файла
    const [HeaderLoadedImage, setHeaderLoadedImage] = UseLoadedImage();

    useEffect(() => {
      setHeaderLoadedImage(HeaderLoadedImageFinish);
    }, [HeaderLoadedImageFinish, setHeaderLoadedImage]);

    const [HeaderLoadedImageErrors, setHeaderLoadedImageErrors] =
      UseLoadedImageErrors();

    const [trySave, setTrySave] = UseTryAction();

    // Закрытие модалки
    const ModalOnOpenTimeOutRef = useRef<NodeJS.Timeout>();

    const CloseModal = useCallback(() => {
      CustomSetModalAppear(false);

      ModalOnOpenTimeOutRef.current = setTimeout(() => {
        setModalOpen(false);
      }, transitionDuration);
    }, [CustomSetModalAppear, setModalOpen]);

    useEffect(() => {
      return () => {
        clearTimeout(ModalOnOpenTimeOutRef.current);
      };
    }, []);

    // Нажатие на кнопку "Сохранить"
    const onClickSave = useCallback(() => {
      if (!HeaderLoadedImage) {
        setTrySave(true);
      } else {
        setHeaderLoadedImageFinish(HeaderLoadedImage);
        CloseModal();
      }
    }, [CloseModal, HeaderLoadedImage, setHeaderLoadedImageFinish, setTrySave]);

    return (
      <Flex
        className={styles.HeaderLoadingModal}
        max
        gap="10"
        direction="column"
      >
        <h2 className={styles.HeaderLoadingModal__caption}>
          Загрузите шапку профиля
        </h2>

        <LoadImageBlockSecondary
          size="small"
          LoadedImage={HeaderLoadedImage}
          setLoadedImage={setHeaderLoadedImage}
          LoadedImageErrors={HeaderLoadedImageErrors}
          setLoadedImageErrors={setHeaderLoadedImageErrors}
          isWarn={!HeaderLoadedImage && trySave}
        />

        <Flex max align="center" justify="end">
          <Button
            className={styles.HeaderLoadingModal__button}
            text="Отменить"
            type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
            onClick={CloseModal}
          />
          <Button
            className={styles.HeaderLoadingModal__button}
            text="Сохранить"
            type={ButtonTypes.RED}
            onClick={onClickSave}
          />
        </Flex>
      </Flex>
    );
  }
);
