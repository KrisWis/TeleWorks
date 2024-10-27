import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./CartContainer.module.scss";
import { memo } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import DownloadSVG from "@/shared/assets/icons/Global/DownloadSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { Share } from "@/shared/ui-kit/Share";
import { Select, selectStyles, SelectTextStyles } from "@/shared/ui-kit/Select";
import SelectDropdownIndicatorBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorBlueSVG.svg?react";
import { cartContainerSelectedOptions, cartItems } from "../model/data";
import { CatalogItem } from "@/entities/CatalogPage_entities/CatalogItem";

const SelectDropdownIndicator = (): JSX.Element => {
  return (
    <SelectDropdownIndicatorBlueSVG
      className={`${selectStyles.Select__svg} ${styles.CartContainer__sortSelect__svg}`}
    />
  );
};

const SelectTextValueStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: "-0.01em",
  lineHeight: "120%",
  color: "var(--gray-color)",
};

export const CartContainer: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex max direction="column" gap="20">
      <Flex max justify="between" align="center">
        <h1 className={styles.CartContainer__caption}>Корзина</h1>

        <Flex gap="20" align="center">
          <Button
            className={styles.CartContainer__add}
            type={ButtonTypes.RED}
            text="Добавить каналы"
          />

          <IncreaseScaleHover>
            <DownloadSVG className={styles.CartContainer__download} />
          </IncreaseScaleHover>

          <Share IconClassName={styles.CartContainer__share} url="/" />
        </Flex>
      </Flex>

      <Flex
        className={`${styles.CartContainer__wrapper} Page__GrayBorderWithWhiteBGWrapper`}
        direction="column"
        gap="15"
        max
      >
        <Flex max align="center" justify="between">
          <div className={styles.CartContainer__searchWrapper}>
            <input
              className={styles.CartContainer__search}
              type="text"
              placeholder="Поиск"
            />
          </div>

          <Select
            className={styles.CartContainer__sortSelect}
            selectedOptions={cartContainerSelectedOptions}
            TextStyles={SelectTextValueStyles}
            CustomDropdownIndicator={SelectDropdownIndicator}
          />
        </Flex>

        <Flex max direction="column" gap="10">
          {cartItems.map((item) => (
            <CatalogItem
              key={item.id}
              catalogItem={item}
              footer="small"
              selectsType="time|top"
              hasCounter
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
});
