import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./TelegramChannelStatsViewsAnalyze.module.scss";
import { memo, useState } from "react";
import { CheckBoxBlock } from "@/shared/ui-kit/CheckBoxBlock";
import { TelegramChannelStatsViewsAnalyzeFormats } from "../model/TelegramChannelStatsViewsAnalyze_types";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import {
  telegramChannelStatsViewsAnalyzeFormatData,
  telegramChannelStatsViewsAnalyzeFormatsData,
  telegramChannelStatsViewsAnalyzeFormatSelectedOptions,
} from "../model/TelegramChannelStatsViewsAnalyze_data";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import SelectDropdownIndicatorBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorBlueSVG.svg?react";
import { TelegramChannelStatsViewsAnalyzeStats } from "./TelegramChannelStatsViewsAnalyzeStats";
import { mobile_mediaQuery } from "@/shared/const/global";

const telegramChannelStatsViewsAnalyzeFormatSelectTextStyles: SelectTextStyles =
  {
    fontFamily: "var(--font-family)",
    fontWeight: 500,
    fontSize: !mobile_mediaQuery.matches ? "20px" : "9px",
    letterSpacing: "-0.01em",
    lineHeight: "120%",
    color: "var(--black-color)",
    opacity: 0.4,
    left: 5,
  };

const telegramChannelStatsViewsAnalyzeFormatSelectDropdownIndicator =
  (): JSX.Element => {
    return (
      <div
        className={`${selectStyles.Select__svg} ${styles.TelegramChannelStatsViewsAnalyze__format__select__svg}`}
      >
        <SelectDropdownIndicatorBlueSVG />
      </div>
    );
  };

export const TelegramChannelStatsViewsAnalyze: React.FC = memo(
  (): React.JSX.Element => {
    // Переключение форматов отображения
    const [
      TelegramChannelStatsViewsAnalyzeFormat,
      setTelegramChannelStatsViewsAnalyzeFormat,
    ] = useState<TelegramChannelStatsViewsAnalyzeFormats>("Публикации");

    return (
      <Flex
        direction="column"
        className={styles.TelegramChannelStatsViewsAnalyze}
      >
        <div
          className={styles.TelegramChannelStatsViewsAnalyze__captionWrapper}
        >
          <h5
            className={`TelegramChannelStatsPage__caption ${styles.TelegramChannelStatsViewsAnalyze__caption}`}
          >
            Просмотр публикаций/сторис
          </h5>
        </div>

        <Flex
          justify="between"
          align="center"
          className={styles.TelegramChannelStatsViewsAnalyze__header}
        >
          <Flex align="center" gap="20">
            <span
              className={styles.TelegramChannelStatsViewsAnalyze__formatText}
            >
              Формат:
            </span>

            {telegramChannelStatsViewsAnalyzeFormatsData.map(
              (format, index) => (
                <Flex key={format} gap="5" align="center">
                  <CheckBoxBlock
                    isActive={TelegramChannelStatsViewsAnalyzeFormat == format}
                    onClick={() =>
                      TelegramChannelStatsViewsAnalyzeFormat == format
                        ? setTelegramChannelStatsViewsAnalyzeFormat(
                            telegramChannelStatsViewsAnalyzeFormatsData[
                              index ==
                              telegramChannelStatsViewsAnalyzeFormatsData.length -
                                1
                                ? index - 1
                                : index + 1
                            ]
                          )
                        : setTelegramChannelStatsViewsAnalyzeFormat(format)
                    }
                  />

                  <span
                    className={
                      styles.TelegramChannelStatsViewsAnalyze__formatText__value
                    }
                  >
                    {format}
                  </span>
                </Flex>
              )
            )}
          </Flex>

          <Select
            selectedOptions={
              telegramChannelStatsViewsAnalyzeFormatSelectedOptions
            }
            CustomDropdownIndicator={
              telegramChannelStatsViewsAnalyzeFormatSelectDropdownIndicator
            }
            TextStyles={telegramChannelStatsViewsAnalyzeFormatSelectTextStyles}
            DefaultSelectedOption={{
              value: "Выберите период",
              label: "Выберите период",
            }}
            className={styles.TelegramChannelStatsViewsAnalyze__format__select}
            valueContainerPadding={
              !mobile_mediaQuery
                ? valueContainerPaddingEnum.SMALL
                : valueContainerPaddingEnum.NONE
            }
          />
        </Flex>

        <TelegramChannelStatsViewsAnalyzeStats
          formatsData={telegramChannelStatsViewsAnalyzeFormatData}
          currentFormat={TelegramChannelStatsViewsAnalyzeFormat}
        />
      </Flex>
    );
  }
);
