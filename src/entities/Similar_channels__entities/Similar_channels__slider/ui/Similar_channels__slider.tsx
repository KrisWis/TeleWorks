import styles from "./Similar_channels__slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Similar_channels__item } from "@/entities";

import "swiper/css";
import "./Simillar_channels__slider.scss";
import {
  mobile_mediaQuery,
  tablet_mediaQuery,
} from "@/pages/ProfilePage/model/ProfilePage__data";

export const Similar_channels__slider: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.similar_channels__slider}>
      <Swiper
        navigation={{
          prevEl: "#similar_channels_prevArrow",
          nextEl: "#similar_channels_nextArrow",
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={
          mobile_mediaQuery.matches ? 1 : tablet_mediaQuery.matches ? 2 : 3
        }
      >
        <SwiperSlide>
          <Similar_channels__item />
        </SwiperSlide>
        <SwiperSlide>
          <Similar_channels__item />
        </SwiperSlide>
        <SwiperSlide>
          <Similar_channels__item />
        </SwiperSlide>
        <SwiperSlide>
          <Similar_channels__item />
        </SwiperSlide>
        <SwiperSlide>
          <Similar_channels__item />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
