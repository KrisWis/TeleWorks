import styles from "./MarketPlaceSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { MarketPlaceSlider_items } from "../model/MarketPlaceSlider_data";
import "./MarketPlaceSlider.scss";
import { memo } from "react";
import { MarketPlaceSlider_item } from "../../MarketPlaceSlider_item/ui/MarketPlaceSlider_item";
import { MarketPlaceSlider_item_props } from "../../MarketPlaceSlider_item/model/MarketPlaceSlider_item_types";

export const MarketPlaceSlider: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.marketPlace__slider}>
      <svg
        className={styles.marketPlace__slider__arrow}
        id="marketPlaceSlider_prevArrow"
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.877 13.748C31.4993 14.3704 31.4993 15.3796 30.877 16.0019L21.379 25.5L30.877 34.9981C31.4993 35.6205 31.4993 36.6295 30.877 37.2519C30.2546 37.8743 29.2455 37.8743 28.6231 37.2519L17.9981 26.6269C17.3757 26.0045 17.3757 24.9955 17.9981 24.3731L28.6231 13.748C29.2455 13.1257 30.2546 13.1257 30.877 13.748Z"
          fill="#C4C4C4"
        />
      </svg>

      <Swiper
        navigation={{
          prevEl: "#marketPlaceSlider_prevArrow",
          nextEl: "#marketPlaceSlider_nextArrow",
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
      >
        {MarketPlaceSlider_items.map((item: MarketPlaceSlider_item_props) => (
          <SwiperSlide key={item.authorName + item.authorSurname}>
            <MarketPlaceSlider_item {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <svg
        className={styles.marketPlace__slider__arrow}
        id="marketPlaceSlider_nextArrow"
        width="51"
        height="51"
        viewBox="0 0 51 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.123 37.252C19.5007 36.6296 19.5007 35.6204 20.123 34.9981L29.621 25.5L20.123 16.0019C19.5007 15.3795 19.5007 14.3705 20.123 13.7481C20.7454 13.1257 21.7545 13.1257 22.3769 13.7481L33.0019 24.3731C33.6243 24.9955 33.6243 26.0045 33.0019 26.6269L22.3769 37.252C21.7545 37.8743 20.7454 37.8743 20.123 37.252Z"
          fill="#C4C4C4"
        />
      </svg>
    </div>
  );
});
MarketPlaceSlider.displayName = "MarketPlaceSlider";
