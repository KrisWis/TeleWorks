import { Flex } from "@/shared/ui-kit/Stack";
import styles from "./BlogForReaders.module.scss";
import { memo } from "react";
import { blogForReadersItems } from "../model/BlogForReaders_data";
import { IncreaseScaleHover } from "@/shared/ui-kit/IncreaseScaleHover";
import { Link } from "react-router-dom";
import { mobile_mediaQuery } from "@/shared/const/global";
import { Swiper, SwiperSlide } from "swiper/react";
import SelectDropdownIndicatorDarkBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorDarkBlueSVG.svg?react";
import { Navigation } from "swiper/modules";
import "./BlogForReaders_swiper.scss";

export const BlogForReaders: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      direction="column"
      className={`${styles.BlogForReaders} Page__GrayBorderWithWhiteBGWrapper BlogForReaders`}
    >
      <Flex
        className={styles.BlogForReaders__header}
        justify="between"
        align="center"
      >
        <h6 className="BlogPage__minicaption">От ТeleWorks для читателей</h6>

        <IncreaseScaleHover>
          <a className={styles.BlogForReaders__more} href="#">
            Больше от TeleWorks
          </a>
        </IncreaseScaleHover>
      </Flex>

      {!mobile_mediaQuery.matches ? (
        <div className={styles.BlogForReaders__items}>
          {blogForReadersItems.map((item) => (
            <Link
              className={styles.BlogForReaders__item}
              key={item.id}
              to={`${item.id}`}
            >
              <Flex direction="column" gap="10">
                <img
                  className={styles.BlogForReaders__item__img}
                  src={item.imgURL}
                  alt="Изображение поста для читателей"
                />

                <span className={styles.BlogForReaders__item__title}>
                  {item.title}
                </span>
              </Flex>
            </Link>
          ))}
        </div>
      ) : (
        <Flex
          justify="center"
          align="center"
          className={styles.BlogForReaders__slider}
        >
          <div
            className={`${styles.BlogForReaders__slider__button} ${styles.BlogForReaders__slider__button__prev}`}
            id="BlogForReaders__slider__prev"
          >
            <IncreaseScaleHover>
              <Flex
                align="center"
                justify="center"
                className={styles.BlogForReaders__slider__arrow}
              >
                <SelectDropdownIndicatorDarkBlueSVG
                  className={styles.BlogForReaders__slider__arrow__prev}
                />
              </Flex>
            </IncreaseScaleHover>
          </div>

          <Swiper
            navigation={{
              prevEl: `#BlogForReaders__slider__prev`,
              nextEl: `#BlogForReaders__slider__next`,
            }}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={1}
          >
            {blogForReadersItems.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  className={styles.BlogForReaders__item}
                  key={item.id}
                  to={`${item.id}`}
                >
                  <Flex direction="column">
                    <img
                      className={styles.BlogForReaders__item__img}
                      src={item.imgURL}
                      alt="Изображение поста для читателей"
                    />

                    <span className={styles.BlogForReaders__item__title}>
                      {item.title}
                    </span>
                  </Flex>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={`${styles.BlogForReaders__slider__button} ${styles.BlogForReaders__slider__button__next}`}
            id="BlogForReaders__slider__next"
          >
            <IncreaseScaleHover>
              <Flex
                align="center"
                justify="center"
                className={styles.BlogForReaders__slider__arrow}
              >
                <SelectDropdownIndicatorDarkBlueSVG />
              </Flex>
            </IncreaseScaleHover>
          </div>
        </Flex>
      )}
    </Flex>
  );
});
