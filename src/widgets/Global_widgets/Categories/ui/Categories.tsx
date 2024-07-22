import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesProps } from "../model/Categories_types";
import styles from "./Categories.module.scss";
import { memo, useState } from "react";
import { Navigation } from "swiper/modules";
import "./Categories_swiper.scss";

export const Categories: React.FC<CategoriesProps> = memo(
  ({ categories }): React.JSX.Element => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

    return (
      <div className={styles.categories}>
        {categories.length >= 5 ? (
          <>
            <svg
              id="categories_prevArrow"
              className={`${styles.categories__arrow} ${styles.categories__arrowPrev}`}
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ rotate: "180deg" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.270361 14.7135C-0.0901204 14.3314 -0.0901205 13.712 0.270361 13.33L5.77147 7.49999L0.270361 1.66993C-0.090121 1.28788 -0.090121 0.668578 0.270361 0.286533C0.630842 -0.0955115 1.21526 -0.0955115 1.57576 0.286533L7.72963 6.80829C8.09012 7.19033 8.09012 7.80964 7.72963 8.19168L1.57576 14.7135C1.21526 15.0955 0.630843 15.0955 0.270361 14.7135Z"
                fill="#001A72"
              />
            </svg>

            <Swiper
              navigation={{
                prevEl: "#categories_prevArrow",
                nextEl: "#categories_nextArrow",
              }}
              modules={[Navigation]}
              spaceBetween={60}
              slidesPerView={5.2}
              slidesPerGroup={5.2}
            >
              {categories.map((category: string, index: number) => (
                <SwiperSlide key={category}>
                  <span
                    onClick={() => setActiveCategoryIndex(index)}
                    className={`${styles.categories__item} ${activeCategoryIndex == index ? styles.categories__item__active : ""}`}
                  >
                    {category}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>

            <svg
              id="categories_nextArrow"
              className={`${styles.categories__arrow} ${styles.categories__arrowNext}`}
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.270361 14.7135C-0.0901204 14.3314 -0.0901205 13.712 0.270361 13.33L5.77147 7.49999L0.270361 1.66993C-0.090121 1.28788 -0.090121 0.668578 0.270361 0.286533C0.630842 -0.0955115 1.21526 -0.0955115 1.57576 0.286533L7.72963 6.80829C8.09012 7.19033 8.09012 7.80964 7.72963 8.19168L1.57576 14.7135C1.21526 15.0955 0.630843 15.0955 0.270361 14.7135Z"
                fill="#001A72"
              />
            </svg>
          </>
        ) : (
          <div className={styles.categoriesWrapper}>
            {categories.map((category: string, index: number) => (
              <span
                key={category}
                onClick={() => setActiveCategoryIndex(index)}
                className={`${styles.categories__item} ${activeCategoryIndex == index && styles.categories__item__active}`}
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
);
