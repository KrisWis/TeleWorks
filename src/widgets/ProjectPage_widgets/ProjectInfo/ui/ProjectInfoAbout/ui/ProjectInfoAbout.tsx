import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./ProjectInfoAbout.module.scss";
import { memo, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import "./ProjectInfoAbout_swiper.scss";
import {
  ProjectInfoAbout__imgsURL,
  ProjectInfoAbout__portfolioCases,
} from "../model/ProjectInfoAbout_data";
import { ProjectInfoAboutPortfolioCase } from "../model/ProjectInfoAbout_types";
import { ShowFullImage } from "@/shared/ui-kit/ShowFullImage";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";

export const ProjectInfoAbout: React.FC = memo((): React.JSX.Element => {
  const [ActiveSlide, setActiveSlide] = useState<number>(0);

  const swiperRef = useRef<SwiperClass>();

  return (
    <div className={`projectInfoAbout ${styles.projectInfoAbout}`}>
      <div className={styles.projectInfoAbout__slider}>
        <svg
          className={`${styles.projectInfoAbout__slider__arrow} ${styles.projectInfoAbout__slider__arrow__prev}`}
          id={`projectInfoAbout__slider_prevArrow`}
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_280_592)">
            <circle cx="47" cy="35" r="35" fill="white" />
          </g>
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.6759 50.3696C37.7747 49.5292 37.7747 48.1665 38.6759 47.326L52.4287 34.5L38.6759 21.6738C37.7747 20.8333 37.7747 19.4709 38.6759 18.6304C39.5771 17.7899 41.0382 17.7899 41.9394 18.6304L57.3241 32.9782C58.2253 33.8187 58.2253 35.1812 57.3241 36.0217L41.9394 50.3696C41.0382 51.2101 39.5771 51.2101 38.6759 50.3696Z"
            fill="#040404"
          />
          <defs>
            <filter
              id="filter0_d_280_592"
              x="0.320001"
              y="0"
              width="93.36"
              height="93.36"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11.68" />
              <feGaussianBlur stdDeviation="5.84" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_280_592"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_280_592"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <Swiper
          navigation={{
            prevEl: `#projectInfoAbout__slider_prevArrow`,
            nextEl: `#projectInfoAbout__slider_nextArrow`,
          }}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          onSlideChange={(swiper: SwiperClass) =>
            setActiveSlide(swiper.activeIndex)
          }
        >
          {ProjectInfoAbout__imgsURL.map((imgURL: string, index: number) => (
            <SwiperSlide key={imgURL + index}>
              <div className={styles.projectInfoAbout__slider__imgWrapper}>
                <img
                  className={styles.projectInfoAbout__slider__img}
                  src={imgURL}
                  alt={`Изображение работы`}
                />

                <ShowFullImage
                  imgURL={imgURL}
                  className={styles.projectInfoAbout__slider__imgFull}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <svg
          className={`${styles.projectInfoAbout__slider__arrow} ${styles.projectInfoAbout__slider__arrow__next}`}
          id={`projectInfoAbout__slider_nextArrow`}
          width="94"
          height="94"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_280_592)">
            <circle cx="47" cy="35" r="35" fill="white" />
          </g>
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.6759 50.3696C37.7747 49.5292 37.7747 48.1665 38.6759 47.326L52.4287 34.5L38.6759 21.6738C37.7747 20.8333 37.7747 19.4709 38.6759 18.6304C39.5771 17.7899 41.0382 17.7899 41.9394 18.6304L57.3241 32.9782C58.2253 33.8187 58.2253 35.1812 57.3241 36.0217L41.9394 50.3696C41.0382 51.2101 39.5771 51.2101 38.6759 50.3696Z"
            fill="#040404"
          />
          <defs>
            <filter
              id="filter0_d_280_592"
              x="0.320001"
              y="0"
              width="93.36"
              height="93.36"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="11.68" />
              <feGaussianBlur stdDeviation="5.84" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_280_592"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_280_592"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className={styles.projectInfoAbout__otherProjects}>
        {ProjectInfoAbout__imgsURL.map((imgURL: string, index: number) => (
          <img
            onClick={() =>
              ActiveSlide != index ? swiperRef.current?.slideTo(index) : {}
            }
            key={imgURL + index}
            className={`${styles.projectInfoAbout__otherProjects__img} ${ActiveSlide == index ? styles.projectInfoAbout__otherProjects__img__active : ""}`}
            src={`${URL_PART}/global/images/serviceExample_img.png`}
            alt={`Название изображения`}
          />
        ))}
      </div>

      <h3 className="ProjectPage__subcaption">Об этом проекте</h3>

      <p className={styles.projectInfoAbout__text}>
        Все задания выполняю строго в срок, учитывается каждое Ваше пожелание.
        <span>Всегда на связи со своими клиентами.</span>
      </p>

      <h5 className={styles.projectInfoAbout__minicaption}>
        Нужно для заказа:
      </h5>

      <p className={styles.projectInfoAbout__text}>
        Чтобы выполнить ваш заказ, мне потребуется от вас задание. Опишите, что
        именно вы хотите получить, какие у вас предпочтения. Пришлите нужные
        файлы и доступы, если они нужны для выполнения заказа.
      </p>

      <div className={styles.projectInfoAbout__portfolio}>
        <h3 className="ProjectPage__subcaption">Портфолио</h3>

        <div className={styles.projectInfoAbout__portfolio__images}>
          <div
            className={styles.projectInfoAbout__portfolio__FirstImageWrapper}
          >
            <img
              className={styles.projectInfoAbout__portfolio__FirstImage}
              src={ProjectInfoAbout__portfolioCases[0].imgURL}
              alt={ProjectInfoAbout__portfolioCases[0].caseName}
            />

            <div
              className={styles.projectInfoAbout__portfolio__caseNameWrapper}
            >
              <span className={styles.projectInfoAbout__portfolio__caseName}>
                {ProjectInfoAbout__portfolioCases[0].caseName}
              </span>
            </div>
          </div>

          <div className={styles.projectInfoAbout__portfolio__otherImages}>
            {ProjectInfoAbout__portfolioCases.slice(0, 4).map(
              (portfolioCase: ProjectInfoAboutPortfolioCase) => (
                <img
                  key={portfolioCase.caseName}
                  className={styles.projectInfoAbout__portfolio__otherImage}
                  src={portfolioCase.imgURL}
                  alt={portfolioCase.caseName}
                />
              )
            )}
          </div>

          <div
            className={styles.projectInfoAbout__portfolio__seeAll}
            onClick={() => redirectToAbsolutePath("/portfolio")}
          >
            <span className={styles.projectInfoAbout__portfolio__seeAll__text}>
              Просмотреть все ({ProjectInfoAbout__portfolioCases.length})
            </span>

            <svg
              className={styles.projectInfoAbout__portfolio__seeAll__svg}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8577 9.85766C17.3313 9.38399 17.3313 8.61601 16.8577 8.14234L9.1387 0.42338C8.66503 -0.0502932 7.89705 -0.0502932 7.42338 0.42338C6.94971 0.897053 6.94971 1.66503 7.42338 2.1387L14.2847 9L7.42338 15.8613C6.9497 16.335 6.9497 17.1029 7.42338 17.5766C7.89705 18.0503 8.66503 18.0503 9.1387 17.5766L16.8577 9.85766ZM-1.06037e-07 10.2129L16 10.2129L16 7.78708L1.06037e-07 7.78708L-1.06037e-07 10.2129Z"
                fill="#FF5555"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});
