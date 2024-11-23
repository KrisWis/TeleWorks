import { Flex } from "@/shared/lib/Stack";
import styles from "./TelegramChannelStatsADSEffectivity.module.scss";
import { memo, useState } from "react";
import { TipBlock } from "@/shared/ui-kit/TipBlock";
import { Input } from "@/shared/ui-kit/Input";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import SelectDropdownIndicatorBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorBlueSVG.svg?react";
import {
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import {
  telegramChannelStatsADSEffectivitySortSelectedOptions,
  telegramChannelStatsADSEffectivityStatItems,
} from "../model/TelegramChannelStatsADSEffectivity_data";
import { TelegramChannelStatsADSEffectivityStats } from "./TelegramChannelStatsADSEffectivityStats";
import { mobile_mediaQuery } from "@/shared/const/global";

const SortDropdownIndicator = (): JSX.Element => {
  return (
    <div
      className={`${selectStyles.Select__svg} ${styles.TelegramChannelStatsADSEffectivity__sort__svg}`}
    >
      <SelectDropdownIndicatorBlueSVG />
    </div>
  );
};

const SortTextStyles: SelectTextStyles = {
  fontFamily: "var(--second-family)",
  fontWeight: 500,
  fontSize: !mobile_mediaQuery.matches ? "20px" : "9px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "var(--black-color)",
  opacity: 0.4,
  bottom: !mobile_mediaQuery.matches ? 0 : 2,
};

export const TelegramChannelStatsADSEffectivity: React.FC = memo(
  (): React.JSX.Element => {
    // Контролируемый инпут поиска
    const [searchInput, setSearchInput] = useState<string>("");

    return (
      <Flex
        direction="column"
        className={styles.TelegramChannelStatsADSEffectivity}
      >
        <h5 className="TelegramChannelStatsPage__caption">
          Эффективность рекламы
        </h5>

        <TipBlock
          text={[
            'В таблице представлен список последних рекламных постов, опубликованных на канале "Название канала".',
            'Колонка "Просмотры" — показывает какое количество просмотров набрал рекламный пост за время жизни.',
            'Колонка "Прирост подписчиков" — показывает какой прирост подписчиков произошел в рекламируемом канале за время жизни рекламного поста.  Обратите внимание, что прирост подписчиков может быть вызван не только рекламой в канале "Новости Москвы", но также одновременной рекламой в других каналах. Для подробного анализа отдельно взятого креатива смотрите детальную статистику по клику на значение прироста.',
          ]}
        />

        <Flex
          className={styles.TelegramChannelStatsADSEffectivity__header}
          align="center"
          justify="between"
          gap="10"
        >
          <Input
            placeholder="Поиск..."
            type={"search"}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={styles.TelegramChannelStatsADSEffectivity__search}
          />

          <Select
            DefaultSelectedOption={{ value: "Cортировка", label: "Cортировка" }}
            selectedOptions={
              telegramChannelStatsADSEffectivitySortSelectedOptions
            }
            CustomDropdownIndicator={SortDropdownIndicator}
            TextStyles={SortTextStyles}
            className={styles.TelegramChannelStatsADSEffectivity__sort}
            valueContainerPadding={
              !mobile_mediaQuery.matches
                ? valueContainerPaddingEnum.MEDIUM
                : valueContainerPaddingEnum.SMALL
            }
          />
        </Flex>

        <TelegramChannelStatsADSEffectivityStats
          statItems={telegramChannelStatsADSEffectivityStatItems}
        />
      </Flex>
    );
  },
);
TelegramChannelStatsADSEffectivity.displayName =
  "TelegramChannelStatsADSEffectivity";
