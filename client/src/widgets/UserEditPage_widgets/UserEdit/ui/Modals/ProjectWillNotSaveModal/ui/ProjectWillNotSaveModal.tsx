import { transitionDuration } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";
import styles from "./ProjectWillNotSaveModal.module.scss";
import { memo, useCallback, useContext } from "react";
import { Flex } from "@/shared/lib/Stack";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UserEditPortfolioContext } from "../../../UserEditPortfolio";
import { closeModal } from "@/shared/utils/CloseModal";

export const ProjectWillNotSaveModal: React.FC = memo((): React.JSX.Element => {
  // Нажатие кнопки "Отменить"
  const {
    setProjectWillNotSaveModalAppear,
    setProjectWillNotSaveModalIsOpen,
    setLastDetailsModalIsOpen,
  } = useContext(UserEditPortfolioContext);

  const onCancel = useCallback(() => {
    closeModal(
      setProjectWillNotSaveModalAppear,
      setProjectWillNotSaveModalIsOpen
    );

    const LastDetailsModalTimeout = setTimeout(() => {
      setLastDetailsModalIsOpen(true);
      clearTimeout(LastDetailsModalTimeout);
    }, transitionDuration);
  }, [
    setLastDetailsModalIsOpen,
    setProjectWillNotSaveModalAppear,
    setProjectWillNotSaveModalIsOpen,
  ]);

  // Нажатие кнопки "Закрыть"
  const onClose = useCallback(() => {
    closeModal(
      setProjectWillNotSaveModalAppear,
      setProjectWillNotSaveModalIsOpen
    );
  }, [setProjectWillNotSaveModalAppear, setProjectWillNotSaveModalIsOpen]);

  return (
    <Flex
      className={styles.ProjectWillNotSaveModal}
      direction="column"
      justify="center"
      align="center"
      gap="10"
    >
      <img
        src={`${URL_PART}/UserEditPage/ProjectWillNotSaveModal_img.png`}
        alt="Парень в очках сидит в компьютере"
      />

      <h2 className={styles.ProjectWillNotSaveModal__caption}>
        Проект не будет сохранен!
      </h2>

      <p className={styles.ProjectWillNotSaveModal__text}>
        Вы уверены что хотите закрыть не сохраненный проект? После его закрытия,
        все шаги публикации нужно повторит.
      </p>

      <Flex max justify="center" align="center">
        <Button
          className={styles.ProjectWillNotSaveModal__button}
          text="Отменить"
          type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
          onClick={onCancel}
        />
        <Button
          className={styles.ProjectWillNotSaveModal__button}
          text="Закрыть"
          type={ButtonTypes.RED}
          onClick={onClose}
        />
      </Flex>
    </Flex>
  );
});
