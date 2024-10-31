import styles from "./ItemsSlider__slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "./ItemsSlider__slider.scss";
import { memo } from "react";
import { mobile_mediaQuery, tablet_mediaQuery } from "@/shared/const/global";
import { ItemsSlider__sliderProps } from "../model/ItemsSlider__slider_types";

export const ItemsSlider__slider: React.FC<ItemsSlider__sliderProps> = memo(
  ({
    componentProps,
    Component,
    visibleItems,
    prevArrowId,
    nextArrowId,
  }): React.JSX.Element => {
    return (
      <div className={styles.ItemsSlider__slider}>
        <Swiper
          navigation={{
            prevEl: `#${prevArrowId}`,
            nextEl: `#${nextArrowId}`,
          }}
          modules={[Navigation]}
          spaceBetween={mobile_mediaQuery.matches ? 10 : 20}
          slidesPerView={
            tablet_mediaQuery.matches ? visibleItems - 1 : visibleItems
          }
        >
          {componentProps.map((Props, index: number) => (
            <SwiperSlide key={index}>
              <Component {...Props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
);
