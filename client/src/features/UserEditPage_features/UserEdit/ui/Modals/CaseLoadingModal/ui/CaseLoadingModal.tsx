import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./CaseLoadingModal.module.scss";
import { memo } from "react";
import { LoadImageBlockSecondary } from "@/shared/ui-kit/LoadImageBlockSecondary";
import {
  UseLoadedImage,
  UseLoadedImageErrors,
} from "@/shared/ui-kit/LoadImageBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const CaseLoadingModal: React.FC = memo((): React.JSX.Element => {
  const [CaseLoadedImage, setCaseLoadedImage] = UseLoadedImage();

  const [CaseLoadedImageErrors, setCaseLoadedImageErrors] =
    UseLoadedImageErrors();

  return (
    <Flex
      className={styles.CaseLoadingModal}
      align="center"
      direction="column"
      gap="30"
    >
      <h3 className={styles.CaseLoadingModal__caption}>Над чем вы работали?</h3>

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
        />
      </Flex>
    </Flex>
  );
});
