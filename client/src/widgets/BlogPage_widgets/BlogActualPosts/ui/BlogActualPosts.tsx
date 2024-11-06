import { Flex } from "@/shared/lib/Stack";
import styles from "./BlogActualPosts.module.scss";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SelectDropdownIndicatorDarkBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorDarkBlueSVG.svg?react";
import { IncreaseScaleHover } from "@/shared/lib/IncreaseScaleHover";
import { Navigation } from "swiper/modules";
import { actualPostsItems } from "../model/BlogActualPosts_data";
import { BlogActualPostItem } from "./BlogActualPostItem";
import "./BlogActualPosts_swiper.scss";
import { mobile_mediaQuery, tablet_mediaQuery } from "@/shared/const/global";

export const BlogActualPosts: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      direction="column"
      gap="10"
      className={`${styles.BlogActualPosts} BlogActualPosts Page__GrayBorderWithWhiteBGWrapper`}
    >
      <h6 className={styles.BlogActualPosts__caption}>Актуальное</h6>

      <Flex
        align="center"
        justify="between"
        className={styles.BlogActualPosts__slider}
      >
        <div
          className={`${styles.BlogActualPosts__slider__button} ${styles.BlogActualPosts__slider__button__prev}`}
          id="BlogActualPosts__slider__prev"
        >
          <IncreaseScaleHover>
            <Flex
              align="center"
              justify="center"
              className={styles.BlogActualPosts__slider__arrow}
            >
              <SelectDropdownIndicatorDarkBlueSVG
                className={styles.BlogActualPosts__slider__arrow__prev}
              />
            </Flex>
          </IncreaseScaleHover>
        </div>

        <Swiper
          navigation={{
            prevEl: `#BlogActualPosts__slider__prev`,
            nextEl: `#BlogActualPosts__slider__next`,
          }}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1}
        >
          {actualPostsItems.map((itemsSlide) => (
            <div key={itemsSlide[0].id}>
              {!tablet_mediaQuery.matches || mobile_mediaQuery.matches ? (
                <SwiperSlide
                  key={itemsSlide[0].id}
                  className={styles.BlogActualPosts__slider__slide}
                >
                  {itemsSlide.map((item) => (
                    <BlogActualPostItem key={item.id} {...item} />
                  ))}
                </SwiperSlide>
              ) : (
                <div key={itemsSlide[0].id}>
                  {itemsSlide.map((item) => (
                    <SwiperSlide
                      className={styles.BlogActualPosts__slider__slide}
                      key={item.id}
                    >
                      <BlogActualPostItem {...item} />
                    </SwiperSlide>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Swiper>

        <div
          className={`${styles.BlogActualPosts__slider__button} ${styles.BlogActualPosts__slider__button__next}`}
          id="BlogActualPosts__slider__next"
        >
          <IncreaseScaleHover>
            <Flex
              align="center"
              justify="center"
              className={styles.BlogActualPosts__slider__arrow}
            >
              <SelectDropdownIndicatorDarkBlueSVG />
            </Flex>
          </IncreaseScaleHover>
        </div>
      </Flex>
    </Flex>
  );
});
