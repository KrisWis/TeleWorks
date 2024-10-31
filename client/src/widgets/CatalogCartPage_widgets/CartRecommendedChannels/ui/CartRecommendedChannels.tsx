import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./CartRecommendedChannels.module.scss";
import { memo, useState } from "react";
import { recommendedChannels } from "../model/data";
import { CatalogItem } from "@/entities/CatalogPage_entities/CatalogItem";

// TODO: сделать функционал добавления в корзину, прогнать все тесты, чекнуть все страницы

export const CartRecommendedChannels: React.FC = memo((): React.JSX.Element => {
  // Создание стейта для скрытия/раскрытия блока
  const [isHidden, setIsHidden] = useState<boolean>(false);

  return (
    <Flex max direction="column" gap="10">
      <Flex max align="center" justify="between">
        <h2 className={styles.CartRecommendedChannels__caption}>
          Рекомендуемые каналы
        </h2>

        <span
          onClick={() => setIsHidden(!isHidden)}
          className={styles.CartRecommendedChannels__hidden__text}
        >
          {isHidden ? "Показать" : "Скрыть"}
        </span>
      </Flex>

      <Flex
        className={`${styles.CartRecommendedChannels__wrapper}
          ${isHidden ? styles.CartRecommendedChannels__wrapper__hidden : ""}
          Page__GrayBorderWithWhiteBGWrapper`}
        align="center"
        justify="center"
        max
      >
        <Flex max direction="column" gap="5">
          {recommendedChannels.map((channel) => (
            <CatalogItem key={channel.id} catalogItem={channel} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
});
