import styles from "./TelegramChannelStatsSubscribersAttractionOnHoursItem.module.scss";
import { memo, useState } from "react";
import { TelegramChannelStatsSubscribersAttractionOnHoursItemProps } from "../model/TelegramChannelStatsSubscribersAttractionOnHoursItem_types";
import { Flex } from "@/shared/lib/Stack";
import { Dropdown } from "@/shared/ui-kit/Dropdown";
import { IncreaseScaleHover } from "@/shared/lib/IncreaseScaleHover";
import SelectDropdownIndicatorLightBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorLightBlueSVG.svg?react";
import "./TelegramChannelStatsSubscribersAttractionOnHoursItem.scss";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";
import { TelegramChannelStatsSubscribersAttractionReferenceChannel } from "./TelegramChannelStatsSubscribersAttractionReferenceChannel";

export const TelegramChannelStatsSubscribersAttractionOnHoursItem: React.FC<TelegramChannelStatsSubscribersAttractionOnHoursItemProps> =
  memo(({ item }): React.JSX.Element => {
    // Открытие дропдауна
    const [onHoursItemDropdown, setOnHoursItemDropdown] =
      useState<boolean>(false);

    return (
      <Flex
        direction="column"
        className={
          styles.TelegramChannelStatsSubscribersAttractionOnHoursItemWrapper
        }
      >
        <div
          className={
            styles.TelegramChannelStatsSubscribersAttractionOnHoursItem
          }
        >
          <span
            className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__hour}`}
          >
            {item.hour < 10 ? "0" : ""}
            {item.hour}:00
          </span>

          <Flex align="center" gap="10">
            <Flex align="center" gap="3">
              <span
                className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__icon__small}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__icon}`}
              >
                @
              </span>
              <span
                className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text}`}
              >
                {item.referencesAmount}
              </span>
            </Flex>

            <Flex gap="3">
              <ShareSVG
                className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__icon__small}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__icon}`}
              ></ShareSVG>
              <span
                className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text}`}
              >
                {item.repostsAmount}
              </span>
            </Flex>
          </Flex>

          <span
            className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text__small}
                             ${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text}
                      ${item.changeType == "+" ? styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text__increase : ""}
                       ${item.changeType == "-" ? styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__text__shrink : ""}`}
          >
            {item.changeType}
            {item.changesAmount}
          </span>
        </div>

        {item.referencesChannels && (
          <Dropdown
            className={
              styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__referenceChannels
            }
            style={{
              height: item.referencesChannels.length * 25,
            }}
            DropdownIsOpen={onHoursItemDropdown}
            setDropdownIsOpen={setOnHoursItemDropdown}
            withArrow={false}
            dropdownClassname={
              styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__referenceChannelsDropdown
            }
            trigger={
              <IncreaseScaleHover
                className={`${styles.TelegramChannelStatsSubscribersAttractionOnHoursItem__arrow} TelegramChannelStatsSubscribersAttractionOnHoursItem__arrow`}
              >
                <SelectDropdownIndicatorLightBlueSVG />
              </IncreaseScaleHover>
            }
          >
            {item.referencesChannels.map((referenceChannel) => (
              <TelegramChannelStatsSubscribersAttractionReferenceChannel
                key={referenceChannel.channelName}
                referenceChannel={referenceChannel}
              />
            ))}
          </Dropdown>
        )}
      </Flex>
    );
  });
TelegramChannelStatsSubscribersAttractionOnHoursItem.displayName =
  "TelegramChannelStatsSubscribersAttractionOnHoursItem";
