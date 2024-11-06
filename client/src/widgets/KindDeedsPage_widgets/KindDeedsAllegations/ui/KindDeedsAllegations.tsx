import { Flex } from "@/shared/lib/Stack";
import styles from "./KindDeedsAllegations.module.scss";
import { memo } from "react";
import { mobile_mediaQuery } from "@/shared/const/global";

export const KindDeedsAllegations: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.KindDeedsAllegations}>
      <Flex
        max
        justify="center"
        align="center"
        direction="column"
        gap={mobile_mediaQuery.matches ? "5" : "10"}
      >
        <span className={styles.KindDeedsAllegations__number}>01</span>

        <h6 className={styles.KindDeedsAllegations__title}>
          Чистота намерений открытая книга!
        </h6>

        <p className={styles.KindDeedsAllegations__desc}>
          Мы открыто делимся информацией о том, как используются средства.
          Пример текста и заголовка
        </p>
      </Flex>

      <Flex
        max
        justify="center"
        align="center"
        direction="column"
        gap={mobile_mediaQuery.matches ? "5" : "10"}
      >
        <span className={styles.KindDeedsAllegations__number}>02</span>

        <h6 className={styles.KindDeedsAllegations__title}>
          Каждый вклад шаг к переменам!
        </h6>

        <p className={styles.KindDeedsAllegations__desc}>
          Ваш вклад помогает реализовывать важные социальные проекты и
          поддерживать людей в сложных ситуациях.
        </p>
      </Flex>

      <Flex
        max
        justify="center"
        align="center"
        direction="column"
        gap={mobile_mediaQuery.matches ? "5" : "10"}
      >
        <span className={styles.KindDeedsAllegations__number}>03</span>

        <h6 className={styles.KindDeedsAllegations__title}>
          Объединим сердца для великих дел!
        </h6>

        <p className={styles.KindDeedsAllegations__desc}>
          Вы становитесь частью дружной команды единомышленников, стремящихся
          сделать мир лучше.
        </p>
      </Flex>
    </section>
  );
});
