import styles from "./TelegramChannelStatsSubscribersAttractionPopup.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Flex } from "@/shared/ui-kit/Stack";
import { Dropdown } from "@/shared/ui-kit/Dropdown";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import ProfileChannelMoreSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelInfo/ProfileChannelMoreSVG.svg?react";
import AcceptSVG from "@/shared/assets/icons/Global/AcceptSVG.svg?react";
import HistorySVG from "@/shared/assets/icons/Global/HistorySVG.svg?react";
import { Link } from "react-router-dom";
import Close from "@/shared/assets/icons/Shared/ModalTemplate/close.svg?react";
import { TelegramChannelStatsSubscribersAttractionPopupProps } from "../model/TelegramChannelStatsSubscribersAttractionPopup_types";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import ViewsSVG from "@/shared/assets/icons/Global/ViewsSVG.svg?react";
import RepostsSVG from "@/shared/assets/icons/Global/RepostsSVG.svg?react";
import CommentsSVG from "@/shared/assets/icons/Global/commentsSVG.svg?react";
import { transitionDuration } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const TelegramChannelStatsSubscribersAttractionPopup: React.FC<TelegramChannelStatsSubscribersAttractionPopupProps> =
  memo(({ CustomSetModalAppear, setModalOpen, channel }): React.JSX.Element => {
    // Открытие дропдауна по нажатию на 3 точки
    const [moreDropdownIsOpen, setMoreDropdownIsOpen] =
      useState<boolean>(false);

    // Закрытие модалки
    const ModalOnOpenTimeOutRef = useRef<NodeJS.Timeout>();

    const CloseModal = useCallback((): void => {
      CustomSetModalAppear(false);

      ModalOnOpenTimeOutRef.current = setTimeout(() => {
        setModalOpen(false);
      }, transitionDuration);
    }, [CustomSetModalAppear, setModalOpen]);

    useEffect(() => {
      return () => {
        clearTimeout(ModalOnOpenTimeOutRef.current);
      };
    }, []);

    // Нажатие на кнопку "Просмотр канала"
    const redirectToChannelPage = useCallback(() => {
      CloseModal();
      window.location.replace(channel.channelLink);
    }, [CloseModal, channel.channelLink]);

    return (
      <Flex
        direction="column"
        className={styles.TelegramChannelStatsSubscribersAttractionPopup}
      >
        <Flex
          className={
            styles.TelegramChannelStatsSubscribersAttractionPopup__icons
          }
          align="center"
          gap="10"
        >
          <Dropdown
            DropdownIsOpen={moreDropdownIsOpen}
            setDropdownIsOpen={setMoreDropdownIsOpen}
            withArrow={false}
            trigger={
              <IncreaseScaleHover>
                <ProfileChannelMoreSVG
                  className={
                    styles.TelegramChannelStatsSubscribersAttractionPopup__more__iconTrigger
                  }
                />
              </IncreaseScaleHover>
            }
            className={
              styles.TelegramChannelStatsSubscribersAttractionPopup__more
            }
          >
            <Flex gap="5" align="center">
              <AcceptSVG
                className={
                  styles.TelegramChannelStatsSubscribersAttractionPopup__more__icon
                }
              />
              <span
                className={
                  styles.TelegramChannelStatsSubscribersAttractionPopup__more__text
                }
              >
                Это ваш канал?
              </span>
              <Link
                className={`${styles.TelegramChannelStatsSubscribersAttractionPopup__more__text} ${styles.TelegramChannelStatsSubscribersAttractionPopup__more__link}`}
                to="/"
              >
                Подтвердить
              </Link>
            </Flex>

            <Flex gap="5" align="center">
              <HistorySVG
                className={
                  styles.TelegramChannelStatsSubscribersAttractionPopup__more__icon
                }
              />
              <Link
                to="/"
                className={`${styles.TelegramChannelStatsSubscribersAttractionPopup__more__text} ${styles.TelegramChannelStatsSubscribersAttractionPopup__more__link}`}
              >
                История канала
              </Link>
            </Flex>
          </Dropdown>

          <IncreaseScaleHover>
            <Close
              className={styles.ModalTemplate__close}
              onClick={CloseModal}
            />
          </IncreaseScaleHover>
        </Flex>

        <Flex
          className={
            styles.TelegramChannelStatsSubscribersAttractionPopup__channel
          }
          gap="15"
        >
          <img
            className={
              styles.TelegramChannelStatsSubscribersAttractionPopup__channel__img
            }
            src={channel.channelImgURL}
            alt={channel.channelName}
          />

          <Flex
            className={
              styles.TelegramChannelStatsSubscribersAttractionPopup__channel__wrapper
            }
            align="center"
            justify="between"
          >
            <Flex gap="3" direction="column">
              <h6
                className={
                  styles.TelegramChannelStatsSubscribersAttractionPopup__channel__name
                }
              >
                {channel.channelName}
              </h6>
              <span
                className={
                  styles.TelegramChannelStatsSubscribersAttractionPopup__channel__category
                }
              >
                {channel.channelCategory}
              </span>
            </Flex>

            <Button
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__link
              }
              type={ButtonTypes.CYAN}
              text="Просмотр канала"
              onClick={redirectToChannelPage}
            />
          </Flex>
        </Flex>

        <img
          className={
            styles.TelegramChannelStatsSubscribersAttractionPopup__channel__postImg
          }
          src={channel.channelPostImgURL}
          alt={"Изображение поста"}
        />

        <pre
          className={
            styles.TelegramChannelStatsSubscribersAttractionPopup__channel__postDesc
          }
        >
          {channel.desc.split(" ").map((word, index) => {
            return (
              <span key={word + index}>
                {word.trim().startsWith("http") || word.startsWith("(http") ? (
                  <>
                    {word.startsWith("(http") && "("}
                    <a
                      className={
                        styles.TelegramChannelStatsSubscribersAttractionPopup__channel__postDesc__link
                      }
                      href={
                        word.startsWith("(http")
                          ? word.substring(1, word.length - 1)
                          : word
                      }
                    >
                      {word.startsWith("(http")
                        ? word.substring(1, word.length - 1)
                        : word}
                    </a>
                    {word.startsWith("(http") && ")"}
                  </>
                ) : (
                  <span>{word} </span>
                )}
              </span>
            );
          })}
        </pre>

        <Flex
          className={
            styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stats
          }
          gap="5"
        >
          <Flex
            className={
              styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat
            }
            gap="3"
            align="center"
            justify="center"
          >
            <ViewsSVG
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat__icon
              }
            />

            <span
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat__text
              }
            >
              {channel.viewsAmount}
            </span>
          </Flex>

          <Flex
            className={
              styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat
            }
            gap="3"
            align="center"
            justify="center"
          >
            <RepostsSVG
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat__icon
              }
            />

            <span
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat__text
              }
            >
              {channel.repostsAmount}
            </span>
          </Flex>

          <Flex
            className={
              styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat
            }
            gap="3"
            align="center"
            justify="center"
          >
            <CommentsSVG
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat__icon
              }
            />

            <span
              className={
                styles.TelegramChannelStatsSubscribersAttractionPopup__channel__stat__text
              }
            >
              {channel.commentsAmount}
            </span>
          </Flex>
        </Flex>
      </Flex>
    );
  });
