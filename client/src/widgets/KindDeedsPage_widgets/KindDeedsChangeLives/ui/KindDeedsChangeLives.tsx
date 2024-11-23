import { Flex } from "@/shared/lib/Stack";
import styles from "./KindDeedsChangeLives.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { mobile_mediaQuery } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";

export const KindDeedsChangeLives: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex isSection max align="center" justify="between">
      <Flex direction="column" gap={mobile_mediaQuery.matches ? "10" : "20"}>
        <h2 className="KindDeedsPage__caption">
          Ваше участие может
          <br />
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

        <Flex max align="center" gap={mobile_mediaQuery.matches ? "10" : "20"}>
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
        src={`${URL_PART}/KindDeeds${mobile_mediaQuery.matches ? "/Adaptive" : ""}/ParticipationChangeLives_img.png`}
        alt="Люди крутяться вокруг сердечка с TeleWorks"
      />
    </Flex>
  );
});
KindDeedsChangeLives.displayName = "KindDeedsChangeLives";
