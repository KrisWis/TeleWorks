import { URL_PART } from "@/shared/const/app";
import styles from "./WhyNeedINNAndName.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./WhyNeedINNAndName_swiper.scss";
import "swiper/css/pagination";
import { WhyNeedINNAndNameProps } from "../model/WhyNeedINNAndName_types";

export const WhyNeedINNAndName: React.FC<WhyNeedINNAndNameProps> = memo(
  ({ ActiveSlide, setActiveSlide }): React.JSX.Element => {
    const swiperRef = useRef<SwiperClass>();

    const [AllowSlideNext, setAllowSlideNext] = useState<boolean>(true);

    useEffect(() => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(ActiveSlide);
        setAllowSlideNext(ActiveSlide != 2);
      }
    }, [ActiveSlide, swiperRef]);

    return (
      <div className={`${styles.whyNeedINNAndName} whyNeedINNAndName`}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
          }}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          onSlideChange={(swiper: SwiperClass) =>
            setActiveSlide
              ? setActiveSlide(swiper.activeIndex)
              : swiperRef.current!.slideTo(swiper.activeIndex)
          }
        >
          <SwiperSlide>
            <div className={styles.whyNeedINNAndName__wrapper}>
              <img
                src={`${URL_PART}/global/images/WhyNeedINNAndName_img.png`}
                alt="Мужчина и женщина показывают на ИНН человека"
              />

              <h6 className={styles.whyNeedINNAndName__caption}>
                Зачем нужно ИП?
              </h6>

              <p className={styles.whyNeedINNAndName__desc}>
                Для чего нужно ИП...
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.whyNeedINNAndName__wrapper}>
              <img
                src={`${URL_PART}/global/images/WhyNeedINNAndName_img.png`}
                alt="Мужчина и женщина показывают на ИНН человека"
              />

              <h6 className={styles.whyNeedINNAndName__caption}>
                Зачем нужны ИНН и ФИО?
              </h6>

              <p className={styles.whyNeedINNAndName__desc}>
                ИНН, фамилия и инициалы указываются в рекламном посте.
              </p>

              <p className={styles.whyNeedINNAndName__desc}>
                Это безопасно и соответствует закону о маркировке рекламы.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.whyNeedINNAndName__wrapper}>
              <img
                src={`${URL_PART}/global/images/WhyNeedINNAndName_img.png`}
                alt="Мужчина и женщина показывают на ИНН человека"
              />

              <h6 className={styles.whyNeedINNAndName__caption}>
                Что такое карточка организации?
              </h6>

              <p className={styles.whyNeedINNAndName__desc}>
                Карточка организации содержит информацию, необходимую для
                корректной работы автоматической системы маркировки на нашем
                сервисе. Заполните карточку организации, указав ваши ИНН и ФИО.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <Button
          className={`${styles.whyNeedINNAndName__button} ${!AllowSlideNext ? styles.whyNeedINNAndName__button__removed : ""}`}
          text="Далее"
          type={ButtonTypes.RED}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    );
  }
);
