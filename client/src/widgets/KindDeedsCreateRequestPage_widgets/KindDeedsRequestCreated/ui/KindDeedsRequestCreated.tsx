import { AppRoutes, URL_PART } from "@/app";
import styles from "./KindDeedsRequestCreated.module.scss";
import { memo } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const KindDeedsRequestCreated: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      className={`${styles.KindDeedsRequestCreated} Page__GrayBorderSecondaryWrapper`}
      align="center"
      justify="center"
      direction="column"
      gap="10"
      max
    >
      <img
        className={styles.KindDeedsRequestCreated__img}
        src={`${URL_PART}/KindDeeds/letterOfKindness_img.png`}
        alt="Письмо с сердечком и логотипов TeleWorks"
      />

      <h1 className={styles.KindDeedsRequestCreated__caption}>
        Запрос создан!
      </h1>

      <p className={styles.KindDeedsRequestCreated__desc}>
        Сейчас запрос проходит модерацию, после проверки мы пришлем вам
        уведомление или другая важна информация
      </p>

      <Button
        className={styles.KindDeedsRequestCreated__button}
        text="На главную"
        to={AppRoutes.KIND_DEEDS}
        type={ButtonTypes.RED}
      />
    </Flex>
  );
});
