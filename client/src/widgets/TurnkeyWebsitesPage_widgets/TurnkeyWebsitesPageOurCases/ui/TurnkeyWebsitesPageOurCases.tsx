import styles from "./TurnkeyWebsitesPageOurCases.module.scss";
import { memo, useEffect, useRef } from "react";
import OurCasesSliderArrowPrevSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/OurCasesSliderArrowPrevSVG.svg?react";
import OurCasesSliderArrowNextSVG from "@/shared/assets/icons/TurnkeyWebsitesPage/OurCasesSliderArrowNextSVG.svg?react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { turnkeyWebsitesPageOurCases } from "../model/TurnkeyWebsitesPageOurCases_data";
import "./TurnkeyWebsitesPageOurCases_swiper.scss";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

export const TurnkeyWebsitesPageOurCases: React.FC = memo(
  (): React.JSX.Element => {
    const swiperRef = useRef<SwiperClass>();

    useEffect(() => {
      swiperRef.current?.slideTo(2);
    }, []);

    return (
      <div
        className={`${styles.TurnkeyWebsitesPageOurCases} TurnkeyWebsitesPageOurCases`}
      >
        <div className={styles.TurnkeyWebsitesPageOurCases__header}>
          <h2 className="TurnkeyWebsitesPage__caption">Наши кейсы</h2>

          <div className={styles.TurnkeyWebsitesPageOurCases__slider__arrows}>
            <div
              className={styles.TurnkeyWebsitesPageOurCases__slider__arrow}
              id="TurnkeyWebsitesPageOurCases__slider_prevArrow"
            >
              <OurCasesSliderArrowPrevSVG />
            </div>

            <div
              className={styles.TurnkeyWebsitesPageOurCases__slider__arrow}
              id="TurnkeyWebsitesPageOurCases__slider_nextArrow"
            >
              <OurCasesSliderArrowNextSVG />
            </div>
          </div>
        </div>

        <p className={styles.TurnkeyWebsitesPageOurCases__desc}>
          Краткое описание....
        </p>

        <Swiper
          navigation={{
            prevEl: `#TurnkeyWebsitesPageOurCases__slider_prevArrow`,
            nextEl: `#TurnkeyWebsitesPageOurCases__slider_nextArrow`,
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={1}
          className={styles.TurnkeyWebsitesPageOurCases__slider}
          loop
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        >
          {turnkeyWebsitesPageOurCases.map((Case) => (
            <SwiperSlide
              className={styles.TurnkeyWebsitesPageOurCases__slider__slide}
              key={Case.title}
            >
              <img
                className={`${styles.TurnkeyWebsitesPageOurCases__slider__img} swiper-slide-img`}
                src={Case.imgURL}
                alt={Case.title}
              />

              <div
                className={`${styles.TurnkeyWebsitesPageOurCases__slider__footer} swiper-slide-footer`}
              >
                <span
                  className={styles.TurnkeyWebsitesPageOurCases__slider__title}
                >
                  {Case.title}
                </span>

                <span
                  className={styles.TurnkeyWebsitesPageOurCases__slider__desc}
                >
                  {Case.desc}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          className={styles.TurnkeyWebsitesPageOurCases__button}
          text="Заказать сайт"
          type={ButtonTypes.RED}
        />
      </div>
    );
  },
);
TurnkeyWebsitesPageOurCases.displayName = "TurnkeyWebsitesPageOurCases";
