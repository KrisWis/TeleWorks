import { ShowFullImageProps } from "../model/ShowFullImage_types";
import styles from "./ShowFullImage.module.scss";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import FullScreenSVG from "@/shared/assets/icons/Shared/ShowFullImage/FullScreenSVG.svg?react";
import CloseSVG from "@/shared/assets/icons/Shared/ShowFullImage/CloseSVG.svg?react";
import NextArrowSVG from "@/shared/assets/icons/Shared/ShowFullImage/NextArrowSVG.svg?react";
import PrevArrowSVG from "@/shared/assets/icons/Shared/ShowFullImage/PrevArrowSVG.svg?react";
import { Modal } from "@/shared/ui-kit/Modal";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const ShowFullImage: React.FC<ShowFullImageProps> = memo(
  ({ className, imgURLs, ActiveSlideIndex }): React.JSX.Element => {
    const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [ModalIsAppear, setModalIsAppear] = useState<boolean>(false);

    const swiperRef = useRef<SwiperClass>();

    const CloseModal = useCallback(() => {
      setModalIsAppear(false);

      setTimeout(() => {
        setModalIsOpen(false);
      }, 300);
    }, []);

    useEffect(() => {
      if (ActiveSlideIndex) {
        swiperRef.current?.slideTo(ActiveSlideIndex);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ActiveSlideIndex, swiperRef.current]);

    return (
      <>
        <div
          className={`${styles.showFullImage} ${className}`}
          onClick={() => setModalIsOpen(true)}
        >
          <FullScreenSVG />

          <span className={styles.showFullImage__text}>Полноэкранный</span>
        </div>

        {ModalIsOpen && (
          <Modal
            CustomModalAppear={ModalIsAppear}
            CustomSetModalAppear={setModalIsAppear}
            setModalIsOpen={setModalIsOpen}
            className={styles.showFullImage__modal}
          >
            <div className={styles.showFullImage__wrapper}>
              <div className={styles.showFullImage__slider}>
                {imgURLs.length > 1 && (
                  <div
                    id="showFullImage__slider_prevArrow"
                    className={`${styles.showFullImage__circle} ${styles.showFullImage__slider__PrevArrow}`}
                  >
                    <PrevArrowSVG />
                  </div>
                )}

                <Swiper
                  className={styles.showFullImage__swiper}
                  navigation={{
                    prevEl: `#showFullImage__slider_prevArrow`,
                    nextEl: `#showFullImage__slider_nextArrow`,
                    disabledClass:
                      styles.showFullImage__slider__arrow__disabled,
                  }}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  onSwiper={(swiper: SwiperClass) =>
                    (swiperRef.current = swiper)
                  }
                >
                  {imgURLs.map((imgURL: string, index: number) => (
                    <SwiperSlide key={imgURL + index}>
                      <img
                        className={styles.showFullImage__swiper__slide}
                        src={imgURL}
                        alt={`Изображение работы`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className={styles.showFullImage__column}>
                  <div
                    className={styles.showFullImage__circle}
                    onClick={CloseModal}
                  >
                    <CloseSVG />
                  </div>

                  {imgURLs.length > 1 && (
                    <div
                      id="showFullImage__slider_nextArrow"
                      className={`${styles.showFullImage__circle}`}
                    >
                      <NextArrowSVG />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
);
