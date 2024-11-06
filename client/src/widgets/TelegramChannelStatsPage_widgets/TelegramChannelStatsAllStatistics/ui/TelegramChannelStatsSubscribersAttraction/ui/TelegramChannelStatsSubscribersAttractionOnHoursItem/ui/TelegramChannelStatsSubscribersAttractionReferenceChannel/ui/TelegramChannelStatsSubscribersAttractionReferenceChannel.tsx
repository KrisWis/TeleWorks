import styles from "./TelegramChannelStatsSubscribersAttractionReferenceChannel.module.scss";
import { memo, useState } from "react";
import { TelegramChannelStatsSubscribersAttractionReferenceChannelProps } from "../model/TelegramChannelStatsSubscribersAttractionReferenceChannel_types";
import { TelegramChannelStatsSubscribersAttractionPopup } from "../../TelegramChannelStatsSubscribersAttractionPopup";
import { Flex } from "@/shared/lib/Stack";
import { Modal } from "@/shared/lib/Modal";

export const TelegramChannelStatsSubscribersAttractionReferenceChannel: React.FC<TelegramChannelStatsSubscribersAttractionReferenceChannelProps> =
  memo(({ referenceChannel }): React.JSX.Element => {
    // Открытие модалки по нажатию на канал с упоминаниями
    const [onHoursItemPopupIsOpen, setOnHoursItemPopupIsOpen] =
      useState<boolean>(false);

    const [OnHoursItemPopupAppear, setOnHoursItemPopupAppear] =
      useState<boolean>(false);

    return (
      <>
        <div
          className={
            styles.TelegramChannelStatsSubscribersAttractionReferenceChannel
          }
          onClick={() => setOnHoursItemPopupIsOpen(true)}
        >
          <Flex align="center" gap="5">
            <Flex
              align="center"
              justify="center"
              className={
                styles.TelegramChannelStatsSubscribersAttractionReferenceChannel__referenceIcon
              }
            >
              <span
                className={
                  styles.TelegramChannelStatsSubscribersAttractionReferenceChannel__referenceIconText
                }
              >
                @
              </span>
            </Flex>

            <Flex
              align="center"
              justify="center"
              className={
                styles.TelegramChannelStatsSubscribersAttractionReferenceChannel__nameWrapper
              }
            >
              <span
                className={
                  styles.TelegramChannelStatsSubscribersAttractionReferenceChannel__name
                }
              >
                {referenceChannel.channelName}
              </span>
            </Flex>
          </Flex>

          <span
            className={
              styles.TelegramChannelStatsSubscribersAttractionReferenceChannel__text
            }
          >
            {referenceChannel.viewsAmountInThousands}k
          </span>

          <span
            className={
              styles.TelegramChannelStatsSubscribersAttractionReferenceChannel__text
            }
          >
            {referenceChannel.subscribersIncreaseAmount}
          </span>
        </div>
        {onHoursItemPopupIsOpen && (
          <Modal
            setModalIsOpen={setOnHoursItemPopupIsOpen}
            CustomSetModalAppear={setOnHoursItemPopupAppear}
            CustomModalAppear={OnHoursItemPopupAppear}
          >
            <TelegramChannelStatsSubscribersAttractionPopup
              channel={{
                channelName: referenceChannel.channelName,
                channelCategory: referenceChannel.category,
                channelLink: referenceChannel.channelLink,
                channelImgURL: referenceChannel.channelImgURL,
                channelPostImgURL: referenceChannel.postImgURL,
                desc: referenceChannel.desc,
                viewsAmount: referenceChannel.postViewsAmount,
                repostsAmount: referenceChannel.postRepostsAmount,
                commentsAmount: referenceChannel.postCommentsAmount,
              }}
              CustomSetModalAppear={setOnHoursItemPopupAppear}
              setModalOpen={setOnHoursItemPopupIsOpen}
            />
          </Modal>
        )}
      </>
    );
  });
