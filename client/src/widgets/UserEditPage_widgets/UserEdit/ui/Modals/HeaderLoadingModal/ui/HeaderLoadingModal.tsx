import {
  UseLoadedImage,
  UseLoadedImageErrors,
} from "@/shared/ui-kit/LoadImageBlock";
import styles from "./HeaderLoadingModal.module.scss";
import { memo, useCallback, useEffect } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { LoadImageBlockSecondary } from "@/shared/ui-kit/LoadImageBlockSecondary";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { HeaderLoadingModalProps } from "../model/types";
import { closeModal } from "@/shared/utils/CloseModal";

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

    // Нажатие на кнопку "Сохранить"
    const onClickSave = useCallback(() => {
      if (!HeaderLoadedImage) {
        setTrySave(true);
      } else {
        setHeaderLoadedImageFinish(HeaderLoadedImage);
        closeModal(CustomSetModalAppear, setModalOpen);
      }
    }, [
      CustomSetModalAppear,
      HeaderLoadedImage,
      setHeaderLoadedImageFinish,
      setModalOpen,
      setTrySave,
    ]);

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
            onClick={() => closeModal(CustomSetModalAppear, setModalOpen)}
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
