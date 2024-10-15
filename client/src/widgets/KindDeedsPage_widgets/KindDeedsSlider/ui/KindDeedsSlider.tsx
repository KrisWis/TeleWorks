import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./KindDeedsSlider.module.scss";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import SelectDropdownIndicatorDarkBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorDarkBlueSVG.svg?react";
import { Navigation } from "swiper/modules";

import "./KindDeedsSlider_swiper.scss";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { KindDeedsSliderProps } from "../model/types";
import { AppRoutes, mobile_mediaQuery, tablet_mediaQuery } from "@/app";

export const KindDeedsSlider: React.FC<KindDeedsSliderProps> = memo(
  ({ items, prevArrowId, nextArrowId, title, titleRed }): React.JSX.Element => {
    return (
      <Flex
        align="center"
        className="KindDeedsSlider"
        direction="column"
        gap={mobile_mediaQuery.matches ? "10" : "20"}
        max
      >
        <h2 className="KindDeedsPage__caption">
          {title}
          <span className="KindDeedsPage__caption__red">{titleRed}</span>
        </h2>

        <Flex align="center" className={styles.KindDeedsSlider__slider}>
          <div
            className={`${styles.KindDeedsSlider__slider__button} ${styles.KindDeedsSlider__slider__button__prev}`}
            id={prevArrowId}
          >
            <IncreaseScaleHover>
              <Flex
                align="center"
                justify="center"
                className={styles.KindDeedsSlider__slider__arrow}
              >
                <SelectDropdownIndicatorDarkBlueSVG
                  className={styles.KindDeedsSlider__slider__arrow__prev}
                />
              </Flex>
            </IncreaseScaleHover>
          </div>

          <Swiper
            navigation={{
              prevEl: `#${prevArrowId}`,
              nextEl: `#${nextArrowId}`,
            }}
            modules={[Navigation]}
            spaceBetween={mobile_mediaQuery.matches ? 13 : 20}
            slidesPerView={
              tablet_mediaQuery.matches
                ? mobile_mediaQuery.matches
                  ? 1.5
                  : 2
                : 3
            }
            slidesPerGroup={tablet_mediaQuery.matches ? 1 : 3}
            watchSlidesProgress={true}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
          </Swiper>

          <div
            className={`${styles.KindDeedsSlider__slider__button} ${styles.KindDeedsSlider__slider__button__next}`}
            id={nextArrowId}
          >
            <IncreaseScaleHover>
              <Flex
                align="center"
                justify="center"
                className={styles.KindDeedsSlider__slider__arrow}
              >
                <SelectDropdownIndicatorDarkBlueSVG />
              </Flex>
            </IncreaseScaleHover>
          </div>
        </Flex>

        <Flex
          justify="center"
          max
          align="center"
          gap={mobile_mediaQuery.matches ? "10" : "20"}
        >
          <Button
            className={styles.KindDeedsSlider__button}
            type={ButtonTypes.RED}
            text="Создать сбор"
            to={AppRoutes.KIND_DEEDS_CREATE_REQUEST}
          />

          <Button
            className={styles.KindDeedsSlider__button}
            type={ButtonTypes.WHITE}
            text="Помочь"
          />
        </Flex>
      </Flex>
    );
  }
);
