import {
  UseLoadedImage,
  UseLoadedImageErrors,
} from "@/shared/ui-kit/LoadImageBlock";
import styles from "./HeaderLoadingModal.module.scss";
import { memo } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { LoadImageBlockSecondary } from "@/shared/ui-kit/LoadImageBlockSecondary";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const HeaderLoadingModal: React.FC = memo((): React.JSX.Element => {
  // Стейты для загрузки изображений
  const [HeaderLoadedImage, setHeaderLoadedImage] = UseLoadedImage();

  const [HeaderLoadedImageErrors, setHeaderLoadedImageErrors] =
    UseLoadedImageErrors();

  return (
    <Flex className={styles.HeaderLoadingModal} max gap="10" direction="column">
      <h2 className={styles.HeaderLoadingModal__caption}>
        Загрузите шапку профиля
      </h2>

      <LoadImageBlockSecondary
        size="small"
        LoadedImage={HeaderLoadedImage}
        setLoadedImage={setHeaderLoadedImage}
        LoadedImageErrors={HeaderLoadedImageErrors}
        setLoadedImageErrors={setHeaderLoadedImageErrors}
      />

      <Flex max align="center" justify="end">
        <Button
          className={styles.HeaderLoadingModal__button}
          text="Отменить"
          type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
        />
        <Button
          className={styles.HeaderLoadingModal__button}
          text="Сохранить"
          type={ButtonTypes.RED}
        />
      </Flex>
    </Flex>
  );
});
