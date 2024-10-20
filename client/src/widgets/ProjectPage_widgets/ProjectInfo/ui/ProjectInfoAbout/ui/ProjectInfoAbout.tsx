import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./ProjectInfoAbout.module.scss";
import { memo, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "./ProjectInfoAbout_swiper.scss";
import {
  ProjectInfoAbout__imgsURL,
  ProjectInfoAbout__portfolioCases,
} from "../model/ProjectInfoAbout_data";
import {
  ShowFullImage,
  ShowFullImageTypes,
} from "@/shared/ui-kit/ShowFullImage";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { PortfolioCase } from "@/shared/ui-kit/PortfolioCase";
import { Flex } from "@/shared/ui-kit/Stack";
import { mobile_mediaQuery, URL_PART } from "@/app";
import { ProjectInfoAboutProps } from "../model/types";
import { CustomItemBadge } from "@/shared/ui-kit/CustomItemBadge";
import { Share } from "@/shared/ui-kit/Share";

export const ProjectInfoAbout: React.FC<ProjectInfoAboutProps> = memo(
  ({ author, favouriteAmount }): React.JSX.Element => {
    const [ActiveSlide, setActiveSlide] = useState<number>(0);

    const swiperRef = useRef<SwiperClass>();

    const [FavouriteIsSelected, setFavouriteIsSelected] =
      useState<boolean>(false);

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
                    imgURLs={ProjectInfoAbout__imgsURL}
                    className={styles.projectInfoAbout__slider__imgFull}
                    ActiveSlideIndex={ActiveSlide}
                    type={ShowFullImageTypes.FULL}
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
              src={imgURL}
              alt={`Название изображения`}
            />
          ))}
        </div>

        <h3 className="ProjectPage__subcaption">Об этом проекте</h3>

        {mobile_mediaQuery.matches && (
          <Flex align="center" justify="between" max>
            <div className={styles.projectInfoAbout__author}>
              <div
                className={`${styles.projectInfoAbout__authorImgWrapper}
             ${styles.projectInfoAbout__authorOnlineImg}`}
              >
                <img
                  className={styles.projectInfoAbout__authorImg}
                  src={author.authorImgURL}
                  alt={author.authorName}
                />
              </div>

              <div className={styles.projectInfoAbout__authorInfo}>
                <span className={styles.projectInfoAbout__authorName}>
                  {author.authorName}
                </span>

                <div className={styles.projectInfoAbout__authorRating}>
                  <img
                    className={styles.projectInfoAbout__authorStar}
                    src={`${URL_PART}/global/icons/star.png`}
                    alt="Жёлтая звезда рейтинга"
                  ></img>

                  <span className={styles.projectInfoAbout__authorRatingNumber}>
                    {author.reputation.toFixed(1)}
                  </span>
                  <span
                    className={styles.projectInfoAbout__authorReviewsAmount}
                  >
                    ({author.ordersAmount})
                  </span>
                </div>
              </div>

              <div className={styles.projectInfoAbout__TeleWorksInfo}>
                {author.TeleWorksChoice && (
                  <CustomItemBadge
                    firstTitle="Выбор"
                    secondTitle="TeleWorks"
                    className={styles.projectInfoAbout__TeleWorks}
                  />
                )}

                {author.orderInQueue > 0 && (
                  <span className={styles.projectInfoAbout__TeleWorks__offers}>
                    {author.orderInQueue} заказ в очереди
                  </span>
                )}
              </div>
            </div>

            <div className={styles.projectInfoAbout__icons}>
              <div className={styles.projectInfoAbout__favourite}>
                <svg
                  className={`${styles.projectInfoAbout__favourite__heart} 
              ${FavouriteIsSelected ? styles.projectInfoAbout__favourite__heart__active : ""}`}
                  onClick={() => setFavouriteIsSelected(!FavouriteIsSelected)}
                  width="23"
                  height="20"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.138 2.91906L11.5 3.29902L11.862 2.91905C14.322 0.33707 16.9723 0.0575072 18.9809 0.985059C21.0225 1.92782 22.5 4.15834 22.5 6.79891C22.5 9.46932 21.4134 11.5217 19.8904 13.2543C18.6434 14.6728 17.1303 15.851 15.6858 16.9757C15.3461 17.2402 15.0103 17.5017 14.6826 17.7627C14.0809 18.2418 13.5218 18.6809 12.9763 19.0029C12.4306 19.3251 11.9468 19.5 11.5 19.5C11.0532 19.5 10.5694 19.3251 10.0237 19.0029C9.47822 18.6809 8.9191 18.2418 8.31748 17.7627C7.98975 17.5017 7.65388 17.2402 7.3142 16.9757C5.86974 15.851 4.3566 14.6728 3.10966 13.2543C1.58659 11.5217 0.5 9.46932 0.5 6.79891C0.5 4.15834 1.97749 1.92782 4.01906 0.985058C6.0277 0.0575076 8.67802 0.337069 11.138 2.91906Z"
                    stroke="#FF5555"
                  />
                </svg>

                <span className={styles.projectInfoAbout__favouriteAmount}>
                  {favouriteAmount}
                </span>
              </div>

              <Share
                IconClassName="Page__transitionToMainColor"
                url={window.location.href}
              />

              <svg
                className={`Page__transitionToMainColor ${styles.projectInfoAbout__report}`}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0993 1.56C12.4996 0.866666 13.5004 0.866667 13.9007 1.56L23.3577 17.94C23.758 18.6333 23.2576 19.5 22.457 19.5H3.543C2.74241 19.5 2.24204 18.6333 2.64234 17.94L12.0993 1.56Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M11.7773 17.52V15.7728H13.6827V17.52H11.7773ZM11.7773 14.6739V6.13535H13.6827V14.6739H11.7773Z"
                  fill="white"
                />
              </svg>
            </div>
          </Flex>
        )}

        <p className={styles.projectInfoAbout__text}>
          Все задания выполняю строго в срок, учитывается каждое Ваше пожелание.
          <span>Всегда на связи со своими клиентами.</span>
        </p>

        <h5 className={styles.projectInfoAbout__minicaption}>
          Нужно для заказа:
        </h5>

        <p className={styles.projectInfoAbout__text}>
          Чтобы выполнить ваш заказ, мне потребуется от вас задание. Опишите,
          что именно вы хотите получить, какие у вас предпочтения. Пришлите
          нужные файлы и доступы, если они нужны для выполнения заказа.
        </p>

        <div className={styles.projectInfoAbout__portfolio}>
          <h3 className="ProjectPage__subcaption">Портфолио</h3>

          <div className={styles.projectInfoAbout__portfolio__images}>
            <PortfolioCase
              imgURL={ProjectInfoAbout__portfolioCases[0].imgURL}
              caseName={ProjectInfoAbout__portfolioCases[0].caseName}
              views={ProjectInfoAbout__portfolioCases[0].views}
            />

            <div className={styles.projectInfoAbout__portfolio__otherImages}>
              {ProjectInfoAbout__portfolioCases.slice(0, 4).map(
                (portfolioCase) => (
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
              <span
                className={styles.projectInfoAbout__portfolio__seeAll__text}
              >
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
  }
);
