import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./KindDeedsChangeLives.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { URL_PART } from "@/app";

export const KindDeedsChangeLives: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex isSection max align="center" justify="between">
      <Flex direction="column" gap="20">
        <h2 className="KindDeedsPage__caption">
          Ваше участие может
          <span
            className={`KindDeedsPage__caption__bg ${styles.KindDeedsChangeLives__caption__bg}`}
          >
            {" "}
            изменить жизни!{" "}
          </span>
        </h2>

        <p className={styles.KindDeedsChangeLives__text}>
          Присоединяйтесь к нашей благотворительной инициативе и помогите тем,
          кто в этом остро нуждается.
        </p>

        <Flex max align="center" gap="20">
          <Button
            className={styles.KindDeedsChangeLives__button}
            type={ButtonTypes.RED}
            text="Присоединиться"
          />

          <Button
            className={styles.KindDeedsChangeLives__button}
            type={ButtonTypes.WHITE}
            text="Подробнее"
          />
        </Flex>
      </Flex>

      <img
        className={styles.KindDeedsChangeLives__img}
        src={`${URL_PART}/KindDeeds/ParticipationChangeLives_img.png`}
        alt="Люди крутяться вокруг сердечка с TeleWorks"
      />
    </Flex>
  );
});
