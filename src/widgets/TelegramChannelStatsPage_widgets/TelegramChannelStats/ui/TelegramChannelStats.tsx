import styles from "./TelegramChannelStats.module.scss";
import { memo, useState } from "react";
import { TelegramChannelStatsProps } from "../model/TelegramChannelStats_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { Share, ShareTypes } from "@/shared/ui-kit/Share";
import { Favourite } from "@/shared/ui-kit/Favourite";
import ProfileChannelMoreSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelInfo/ProfileChannelMoreSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { ProfileAvatar } from "@/shared/ui-kit/ProfileAvatar";
import { AvatarSizes } from "@/shared/ui-kit/Avatar";
import { ProfileChannelRating } from "@/shared/ui-kit/ProfileChannelRating";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { GeoLanguageBlock } from "@/shared/ui-kit/GeoLanguageBlock";
import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";
import { AgeBlock } from "@/shared/ui-kit/AgeBlock";
import { PostsBlock } from "@/shared/ui-kit/PostsBlock";
import { Dropdown } from "@/shared/ui-kit/Dropdown";
import AcceptSVG from "@/shared/assets/icons/Global/AcceptSVG.svg?react";
import HistorySVG from "@/shared/assets/icons/Global/HistorySVG.svg?react";
import { Link } from "react-router-dom";

export const TelegramChannelStats: React.FC<TelegramChannelStatsProps> = memo(
  ({
    favouritesAmount,
    imgURL,
    title,
    category,
    desc,
    channelLink,
  }): React.JSX.Element => {
    // Нажатие на кнопку фаворита и открытие дропдауна
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

    return (
      <Flex
        align="start"
        direction="column"
        className={`${styles.TelegramChannelStats} Page__BoxShadowWrapper`}
      >
        <Flex
          className={styles.TelegramChannelStats__icons}
          align="center"
          gap="20"
        >
          <Share type={ShareTypes.RED} />

          <Flex gap="3" direction="column">
            <Favourite
              IsFavourite={isFavourite}
              setIsFavourite={setIsFavourite}
            />

            <span className={styles.TelegramChannelStats__favouriteText}>
              {favouritesAmount}
            </span>
          </Flex>

          <Dropdown
            DropdownIsOpen={dropdownIsOpen}
            setDropdownIsOpen={setDropdownIsOpen}
            withArrow={false}
            trigger={
              <IncreaseScaleHover>
                <ProfileChannelMoreSVG />
              </IncreaseScaleHover>
            }
            className={styles.TelegramChannelStats__more}
          >
            <Flex gap="5" align="center">
              <AcceptSVG className={styles.TelegramChannelStats__more__icon} />
              <span className={styles.TelegramChannelStats__more__text}>
                Это ваш канал?
              </span>
              <Link
                className={`${styles.TelegramChannelStats__more__text} ${styles.TelegramChannelStats__more__link}`}
                to="/"
              >
                Подтвердить
              </Link>
            </Flex>

            <Flex gap="5" align="center">
              <HistorySVG className={styles.TelegramChannelStats__more__icon} />
              <Link
                to="/"
                className={`${styles.TelegramChannelStats__more__text} ${styles.TelegramChannelStats__more__link}`}
              >
                История канала
              </Link>
            </Flex>
          </Dropdown>
        </Flex>

        <Flex className={styles.TelegramChannelStats__info} gap="30">
          <Flex
            className={styles.TelegramChannelStats__avatar}
            direction="column"
          >
            <ProfileAvatar src={imgURL} size={AvatarSizes.MEDIUM} />
            <ProfileChannelRating rating={509.2} backgroundIsVisible={false} />
          </Flex>

          <Flex align="start" direction="column">
            <Flex gap="50">
              <Flex align="start" direction="column">
                <h6 className={styles.TelegramChannelStats__title}>{title}</h6>
                <span className={styles.TelegramChannelStats__category}>
                  {category}
                </span>
              </Flex>

              <Button
                className={styles.TelegramChannelStats__view}
                type={ButtonTypes.CYAN}
                text="Просмотр канала"
                to={channelLink}
              />
            </Flex>

            <p className={styles.TelegramChannelStats__desc}>{desc}</p>
          </Flex>
        </Flex>

        <Flex className={styles.TelegramChannelStats__blocks} justify="between">
          <GeoLanguageBlock geoLanguage={GeoLanguageTypes.RUSSIAN} />
          <AgeBlock age="1 год." />
          <PostsBlock postsAmount={1573} />
        </Flex>
      </Flex>
    );
  }
);
