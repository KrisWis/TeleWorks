import styles from "./ItemsSlider__slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "./ItemsSlider__slider.scss";
import { memo } from "react";
import {
  mobile_mediaQuery,
  tablet_mediaQuery,
} from "@/app/layouts/BaseLayout/model/BaseLayout__data";
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
      <div className={`${styles.ItemsSlider__slider} ItemsSlider__slider`}>
        <Swiper
          navigation={{
            prevEl: `#${prevArrowId}`,
            nextEl: `#${nextArrowId}`,
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={
            mobile_mediaQuery.matches
              ? visibleItems - 2
              : tablet_mediaQuery.matches
                ? visibleItems - 1
                : visibleItems
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
