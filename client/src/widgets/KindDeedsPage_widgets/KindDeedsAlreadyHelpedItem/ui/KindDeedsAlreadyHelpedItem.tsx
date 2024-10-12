import styles from "./KindDeedsAlreadyHelpedItem.module.scss";
import { memo } from "react";
import { KindDeedsAlreadyHelpedItemProps } from "../model/KindDeedsAlreadyHelpedItem_types";
import { Flex } from "@/shared/ui-kit/Stack";
import BlueLineSVG from "@/shared/assets/icons/Global/BlueLineSVG.svg?react";
import { FormatingNumber } from "@/shared/utils/FormatingNumber/FormatingNumber";
import { Link } from "react-router-dom";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";

export const KindDeedsAlreadyHelpedItem: React.FC<KindDeedsAlreadyHelpedItemProps> =
  memo(({ imgURL, person, city, age, desc, price }): React.JSX.Element => {
    return (
      <Flex
        gap="10"
        direction="column"
        className={`${styles.KindDeedsAlreadyHelpedItem} Page__GrayBorderSecondaryWrapper`}
      >
        <img
          className={styles.KindDeedsAlreadyHelpedItem__img}
          src={imgURL}
          alt={person}
        />

        <Flex max justify="between" align="center">
          <span className={styles.KindDeedsAlreadyHelpedItem__person}>
            {person}
          </span>

          <span className={styles.KindDeedsAlreadyHelpedItem__info}>
            г. {city}, {age}
          </span>
        </Flex>

        <p className={styles.KindDeedsAlreadyHelpedItem__desc}>{desc}</p>

        <BlueLineSVG className={styles.KindDeedsAlreadyHelpedItem__blueLine} />

        <Flex align="center" max justify="between">
          <span className={styles.KindDeedsAlreadyHelpedItem__gathering}>
            Сбор закрыт:
          </span>

          <span className={styles.KindDeedsAlreadyHelpedItem__price}>
            {FormatingNumber(price)}₽
          </span>
        </Flex>

        <span className={styles.KindDeedsAlreadyHelpedItem__progressbar}></span>

        <Link className={styles.KindDeedsAlreadyHelpedItem__knowHistory} to="/">
          <IncreaseScaleHover>
            <span
              className={styles.KindDeedsAlreadyHelpedItem__knowHistory__text}
            >
              Узнать историю
            </span>
          </IncreaseScaleHover>
        </Link>
      </Flex>
    );
  });
