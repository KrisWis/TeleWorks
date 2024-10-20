import { memo } from "react";
import styles from "./ItemsSlider.module.scss";
import { ItemsSlider__header } from "./ItemsSlider__header/ui/ItemsSlider__header";
import { ItemsSlider__slider } from "./ItemsSlider__slider/ui/ItemsSlider__slider";
import { ItemsSliderProps } from "../model/ItemsSlider_types";

export const ItemsSlider: React.FC<ItemsSliderProps> = memo(
  ({
    ItemsSlider__headerProps,
    ItemsSlider__sliderProps,
  }): React.JSX.Element => {
    return (
      <section className={`${styles.ItemsSlider} ItemsSlider__slider`}>
        <ItemsSlider__header {...ItemsSlider__headerProps} />

        <ItemsSlider__slider {...ItemsSlider__sliderProps} />
      </section>
    );
  }
);
