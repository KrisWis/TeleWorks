import styles from "./TelegramChannelStats.module.scss";
import { memo, useState } from "react";
import { Flex } from "@/shared/lib/Stack";
import { Share, ShareTypes } from "@/shared/ui-kit/Share";
import { Favourite } from "@/shared/ui-kit/Favourite";
import ProfileChannelMoreSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelInfo/ProfileChannelMoreSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/lib/IncreaseScaleHover";
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
import { PageLoadingComponent } from "@/shared/lib/PageLoading/PageLoadingComponent/PageLoadingComponent";
import { TelegramChannelStatsProps } from "../model/TelegramChannelStats_types";
import { URL_PART } from "@/shared/const/app";
// import { useGetChannelQuery } from "../api/telegramChannelStatsApi";

// TODO: убрать рыбу
const channelInfo = {
  rating: 0,
  imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
  title: "Квартира мечты!",
  category: "Интерьер и строительство",
  favouritesAmount: 134,
  desc: "Пример описание чем занимается канала и прочие Например: Поможем найти вашу квартиру мечты по самым низким ценнам, на рынке уже более 10 лет. Помогли найти квартиру 30млн клиентам...",
  geoLanguage: GeoLanguageTypes.RUSSIAN,
  age: "1 год.",
  postsAmount: 1573,
  channelLink: "/channel",
};

export const TelegramChannelStats: React.FC<TelegramChannelStatsProps> = memo(
  ({ channelId }): React.JSX.Element => {
    // Нажатие на кнопку фаворита и открытие дропдауна
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

    // Получение данных с бекенда по id
    // const {
    //   data: channelInfo,
    //   isLoading,
    //   error,
    // } = useGetChannelQuery(channelId);
    const isLoading = false;
    const error = false;

    return (
      <div className={styles.TelegramChannelStats}>
        <Flex
          align="center"
          justify="center"
          className={`${styles.TelegramChannelStats__wrapper} Page__BoxShadowWrapper`}
        >
          {!isLoading && !error ? (
            <Flex align="start" direction="column">
              <Flex
                className={styles.TelegramChannelStats__icons}
                align="center"
              >
                <Share url={`channel/${channelId}`} type={ShareTypes.RED} />

                <Flex
                  className={styles.TelegramChannelStats__favouriteWrapper}
                  direction="column"
                  align="center"
                >
                  <Favourite
                    IsFavourite={isFavourite}
                    setIsFavourite={setIsFavourite}
                  />

                  <span className={styles.TelegramChannelStats__favouriteText}>
                    {channelInfo!.favouritesAmount}
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
                    <AcceptSVG
                      className={styles.TelegramChannelStats__more__icon}
                    />
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
                    <HistorySVG
                      className={styles.TelegramChannelStats__more__icon}
                    />
                    <Link
                      to="/"
                      className={`${styles.TelegramChannelStats__more__text} ${styles.TelegramChannelStats__more__link}`}
                    >
                      История канала
                    </Link>
                  </Flex>
                </Dropdown>
              </Flex>

              <Flex className={styles.TelegramChannelStats__info}>
                <Flex
                  className={styles.TelegramChannelStats__avatar}
                  direction="column"
                >
                  <ProfileAvatar
                    src={channelInfo!.imgURL}
                    size={AvatarSizes.MEDIUM}
                  />
                  <ProfileChannelRating
                    rating={509.2}
                    backgroundIsVisible={false}
                  />
                </Flex>

                <Flex align="start" direction="column">
                  <Flex className={styles.TelegramChannelStats__titleWrapper}>
                    <Flex align="start" direction="column">
                      <h6 className={styles.TelegramChannelStats__title}>
                        {channelInfo!.title}
                      </h6>
                      <span className={styles.TelegramChannelStats__category}>
                        {channelInfo!.category}
                      </span>
                    </Flex>

                    <Button
                      className={styles.TelegramChannelStats__view}
                      type={ButtonTypes.CYAN}
                      text="Просмотр канала"
                      to={channelInfo!.channelLink}
                    />
                  </Flex>

                  <p className={styles.TelegramChannelStats__desc}>
                    {channelInfo!.desc}
                  </p>
                </Flex>
              </Flex>

              <div className={styles.TelegramChannelStats__blocks}>
                <GeoLanguageBlock geoLanguage={GeoLanguageTypes.RUSSIAN} />

                <AgeBlock age="1 год." />

                <div className={styles.TelegramChannelStats__blocks__post}>
                  <PostsBlock postsAmount={1573} />
                </div>
              </div>
            </Flex>
          ) : (
            <>
              {error ? (
                <span className="Page__error">Ошибка при получении данных</span>
              ) : (
                <PageLoadingComponent />
              )}
            </>
          )}
        </Flex>
      </div>
    );
  },
);
TelegramChannelStats.displayName = "TelegramChannelStats";
