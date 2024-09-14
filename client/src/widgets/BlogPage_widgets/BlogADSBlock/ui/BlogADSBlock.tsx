import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogADSBlock.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const BlogADSBlock: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex align="center" justify="between" className={styles.BlogADSBlock}>
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
