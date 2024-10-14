import styles from "./KindDeedsNeedHelpItem.module.scss";
import { memo } from "react";
import { KindDeedsNeedHelpItemProps } from "../model/types";
import { Flex } from "@/shared/ui-kit/Stack";
import BlueLineSVG from "@/shared/assets/icons/Global/BlueLineSVG.svg?react";
import { FormatingNumber } from "@/shared/utils/FormatingNumber/FormatingNumber";
import { Link } from "react-router-dom";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { ProgressBar } from "primereact/progressbar";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import "./KindDeedsNeedHelpItem_progressbar.scss";
import { mobile_mediaQuery } from "@/app";

export const KindDeedsNeedHelpItem: React.FC<KindDeedsNeedHelpItemProps> = memo(
  ({
    imgURL,
    person,
    city,
    age,
    desc,
    price,
    alreadyGathered,
    urgentHelp = false,
  }): React.JSX.Element => {
    return (
      <Flex
        gap={mobile_mediaQuery.matches ? "5" : "10"}
        direction="column"
        className={`${styles.KindDeedsNeedHelpItem} KindDeedsNeedHelpItem Page__GrayBorderSecondaryWrapper`}
      >
        <div className={styles.KindDeedsNeedHelpItem__imgWrapper}>
          <img
            className={styles.KindDeedsNeedHelpItem__img}
            src={imgURL}
            alt={person}
          />

          {urgentHelp && (
            <Flex
              className={styles.KindDeedsNeedHelpItem__urgentHelp}
              justify="center"
              align="center"
            >
              <span className={styles.KindDeedsNeedHelpItem__urgentHelp__text}>
                Срочная помощь
              </span>
            </Flex>
          )}
        </div>

        <Flex max justify="between" align="center">
          <span className={styles.KindDeedsNeedHelpItem__person}>{person}</span>

          <span className={styles.KindDeedsNeedHelpItem__info}>
            г. {city}, {age}
          </span>
        </Flex>

        <p className={styles.KindDeedsNeedHelpItem__desc}>{desc}</p>

        <BlueLineSVG className={styles.KindDeedsNeedHelpItem__blueLine} />

        <Flex align="center" max justify="between">
          <span className={styles.KindDeedsNeedHelpItem__gathering}>
            Осталось собрать:
          </span>

          <span className={styles.KindDeedsNeedHelpItem__price}>
            {FormatingNumber(price)}₽
          </span>
        </Flex>

        <ProgressBar
          aria-labelledby={`Процент сбора`}
          className={styles.KindDeedsNeedHelpItem__progressbar}
          value={(alreadyGathered / price) * 100}
          showValue={false}
        />

        <Button
          className={styles.KindDeedsNeedHelpItem__help}
          type={ButtonTypes.RED}
          text="Помочь"
        />

        <Link className={styles.KindDeedsNeedHelpItem__knowHistory} to="/">
          <IncreaseScaleHover>
            <span className={styles.KindDeedsNeedHelpItem__knowHistory__text}>
              Узнать историю
            </span>
          </IncreaseScaleHover>
        </Link>
      </Flex>
    );
  }
);
