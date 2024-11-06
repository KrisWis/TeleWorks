import { Flex } from "@/shared/lib/Stack";
import styles from "./BlogADSBlock.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { URL_PART } from "@/shared/const/app";

export const BlogADSBlock: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      align="center"
      className={`${styles.BlogADSBlock} Page__GrayBorderWithWhiteBGWrapper`}
    >
      <Flex gap="5" justify="between" direction="column">
        <span className={styles.BlogADSBlock__category}>
          Категория или обучение
        </span>

        <span className={styles.BlogADSBlock__title}>
          Крупный заголовок, от площадки...
        </span>

        <p className={styles.BlogADSBlock__text}>
          Мелкое описание, например про обучение или какой-либо инструкции,
          возможно УТП рекламодателя
        </p>

        <Button
          className={styles.BlogADSBlock__button}
          type={ButtonTypes.RED}
          text="Узнать"
        />
      </Flex>

      <img
        className={styles.BlogADSBlock__img}
        src={`${URL_PART}/global/images/serviceExample_img.png`}
        alt="Изображение рекламного изображения"
      />
    </Flex>
  );
});
