import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./KindDeedsMainSection.module.scss";
import { memo } from "react";
import { URL_PART } from "@/app";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const KindDeedsMainSection: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.KindDeedsMainSection}>
      <Flex direction="column" gap="20">
        <h1 className="KindDeedsPage__caption">
          <span className="KindDeedsPage__caption__red">Добрые дела</span> для
          <span className="KindDeedsPage__caption__bg"> лучшего будущего </span>
        </h1>

        <p className="KindDeedsPage__desc">
          Мы объединяем усилия неравнодушных людей, чтобы реализовать проекты,
          направленные на поддержку детей, семей в трудной жизненной ситуации и
          защиту окружающей среды.
        </p>

        <Flex max align="center" gap="20">
          <Button
            className={styles.KindDeedsMainSection__button}
            type={ButtonTypes.RED}
            text="Присоединиться"
          />

          <Button
            className={styles.KindDeedsMainSection__button}
            type={ButtonTypes.WHITE}
            text="Подробнее"
          />
        </Flex>
      </Flex>

      <Flex justify="end">
        <img
          className={styles.KindDeedsMainSection__img}
          src={`${URL_PART}/KindDeeds/MainSection_img.png`}
          alt="Красное сердце"
        />
      </Flex>
    </div>
  );
});
