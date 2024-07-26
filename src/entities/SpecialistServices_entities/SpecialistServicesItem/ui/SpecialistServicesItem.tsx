import { ServicesViewTypes } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices/SpecialistServicesResults/data/SpecialistServicesResults_types";
import { SpecialistServicesItemProps } from "../model/SpecialistServicesItem_types";
import styles from "./SpecialistServicesItem.module.scss";
import { memo, useState } from "react";
import { URL_PART } from "@/app/ui/layouts/model/BaseLayout__data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./SpecialistServicesItem_swiper.scss";
import { redirectToAbsolutePath, TeleWorksChoice } from "@/shared";

export const SpecialistServicesItem: React.FC<SpecialistServicesItemProps> =
  memo(({ servicesItem, viewType }): React.JSX.Element => {
    const [itemIsFavourite, setItemIsFavourite] = useState<boolean>(false);

    const RedirectOnClickTo: string = "/project";

    return (
      <>
        {viewType == ServicesViewTypes.COLUMN ? (
          <div
            className={`specialistServicesResults__item ${styles.specialistServicesResults__item} 
            ${styles.specialistServicesResults__item__row}`}
          >
            {servicesItem.imgURLs.length > 1 ? (
              <div className={styles.specialistServicesResults__item__slider}>
                <svg
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__prev}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_prevArrow`}
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_280_460)">
                    <circle
                      cx="16.5"
                      cy="12.5"
                      r="12.5"
                      transform="rotate(-180 16.5 12.5)"
                      fill="white"
                    />
                  </g>
                  <path
                    opacity="0.8"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.7634 6.22922C20.0789 6.53484 20.0789 7.03037 19.7634 7.336L14.95 12L19.7634 16.6641C20.0789 16.9697 20.0789 17.4651 19.7634 17.7708C19.448 18.0764 18.9366 18.0764 18.6212 17.7708L13.2366 12.5534C12.9211 12.2477 12.9211 11.7523 13.2366 11.4467L18.6212 6.22922C18.9366 5.92359 19.448 5.92359 19.7634 6.22922Z"
                    fill="#040404"
                  />
                  <defs>
                    <filter
                      id="filter0_d_280_460"
                      x="0"
                      y="0"
                      width="33"
                      height="33"
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
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_280_460"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_280_460"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <Swiper
                  navigation={{
                    prevEl: `#${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_prevArrow`,
                    nextEl: `#${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_nextArrow`,
                  }}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  slidesPerGroup={1}
                >
                  {servicesItem.imgURLs.map((imgURL: string, index: number) => (
                    <SwiperSlide key={imgURL + index}>
                      <img
                        className={
                          styles.specialistServicesResults__item__SliderImg
                        }
                        src={imgURL}
                        alt={servicesItem.title}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <svg
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__next}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_nextArrow`}
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_280_457)">
                    <circle cx="16.5" cy="12.5" r="12.5" fill="white" />
                  </g>
                  <path
                    opacity="0.8"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2366 18.7708C12.9211 18.4652 12.9211 17.9696 13.2366 17.664L18.05 13L13.2366 8.33594C12.9211 8.03031 12.9211 7.53486 13.2366 7.22923C13.552 6.92359 14.0634 6.92359 14.3788 7.22923L19.7634 12.4466C20.0789 12.7523 20.0789 13.2477 19.7634 13.5533L14.3788 18.7708C14.0634 19.0764 13.552 19.0764 13.2366 18.7708Z"
                    fill="#040404"
                  />
                  <defs>
                    <filter
                      id="filter0_d_280_457"
                      x="0"
                      y="0"
                      width="33"
                      height="33"
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
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_280_457"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_280_457"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            ) : (
              <img
                className={styles.specialistServicesResults__item__img}
                src={servicesItem.imgURLs[0]}
                alt={servicesItem.title}
              />
            )}

            <div
              onClick={() => redirectToAbsolutePath(RedirectOnClickTo)}
              className={styles.specialistServicesResults__item__body}
            >
              <div className={styles.specialistServicesResults__item__header}>
                <h6 className={styles.specialistServicesResults__item__title}>
                  {servicesItem.title}
                </h6>

                <svg
                  className={`${styles.specialistServicesResults__item__heart} 
              ${itemIsFavourite ? styles.specialistServicesResults__item__heart__active : ""}`}
                  onClick={() => setItemIsFavourite(!itemIsFavourite)}
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.63693 2.14568L8 2.52915L8.36308 2.14568C10.0359 0.378892 11.8102 0.207641 13.1392 0.825223C14.5022 1.45853 15.5 2.9644 15.5 4.75923C15.5 6.58322 14.7642 7.9865 13.7215 9.18015C12.8643 10.1613 11.8258 10.9751 10.8218 11.7619C10.5843 11.948 10.3487 12.1326 10.118 12.3175C9.69801 12.654 9.31724 12.9545 8.94848 13.1736C8.57936 13.3928 8.27098 13.5 8 13.5C7.72902 13.5 7.42064 13.3928 7.05152 13.1736C6.68277 12.9545 6.302 12.654 5.88206 12.3175C5.65128 12.1326 5.4157 11.948 5.1782 11.7618C4.17419 10.9751 3.13566 10.1613 2.27855 9.18015C1.23576 7.9865 0.5 6.58322 0.5 4.75923C0.5 2.9644 1.49783 1.45853 2.86075 0.825223C4.18983 0.207642 5.96408 0.378891 7.63693 2.14568Z" />
                </svg>
              </div>

              <div className={styles.specialistServicesResults__item__footer}>
                <div className={styles.specialistServicesResults__item__author}>
                  {servicesItem.TeleWorksChoice && (
                    <TeleWorksChoice
                      className={
                        styles.specialistServicesResults__item__TeleWorks
                      }
                    />
                  )}

                  <div
                    className={
                      styles.specialistServicesResults__item__authorWrapper
                    }
                  >
                    <div
                      className={`${styles.specialistServicesResults__item__authorImgWrapper} 
                  ${
                    servicesItem.authorIsOnline
                      ? styles.specialistServicesResults__item__authorOnlineImg
                      : styles.specialistServicesResults__item__authorOfflineImg
                  }`}
                    >
                      <img
                        className={`${styles.specialistServicesResults__item__authorImg} 
                  ${
                    servicesItem.authorIsOnline
                      ? styles.specialistServicesResults__item__authorOnlineImg
                      : styles.specialistServicesResults__item__authorOfflineImg
                  }`}
                        src={servicesItem.authorImgURL}
                        alt={servicesItem.authorName}
                      />
                    </div>

                    <div
                      className={
                        styles.specialistServicesResults__item__authorInfo
                      }
                    >
                      <span
                        className={
                          styles.specialistServicesResults__item__authorName
                        }
                      >
                        {servicesItem.authorName}
                      </span>

                      <span
                        className={
                          styles.specialistServicesResults__item__authorRank
                        }
                      >
                        {servicesItem.authorRank}
                      </span>
                    </div>

                    <div
                      className={
                        styles.specialistServicesResults__item__authorRatingWrapper
                      }
                    >
                      <img
                        className={
                          styles.specialistServicesResults__item__authorStar
                        }
                        src={`${URL_PART}/global/icons/star.png`}
                        alt="Жёлтая звезда рейтинга"
                      ></img>

                      <span
                        className={
                          styles.specialistServicesResults__item__authorRating
                        }
                      >
                        {servicesItem.authorRating}
                      </span>

                      <span
                        className={
                          styles.specialistServicesResults__item__authorReviewsAmount
                        }
                      >
                        ({servicesItem.authorReviewsAmount})
                      </span>
                    </div>
                  </div>
                </div>

                <span className={styles.specialistServicesResults__item__price}>
                  {servicesItem.price}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`specialistServicesResults__item ${styles.specialistServicesResults__item} 
            ${styles.specialistServicesResults__item__column}`}
          >
            {servicesItem.imgURLs.length > 1 ? (
              <div className={styles.specialistServicesResults__item__slider}>
                <svg
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__prev}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_prevArrow`}
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_280_460)">
                    <circle
                      cx="16.5"
                      cy="12.5"
                      r="12.5"
                      transform="rotate(-180 16.5 12.5)"
                      fill="white"
                    />
                  </g>
                  <path
                    opacity="0.8"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.7634 6.22922C20.0789 6.53484 20.0789 7.03037 19.7634 7.336L14.95 12L19.7634 16.6641C20.0789 16.9697 20.0789 17.4651 19.7634 17.7708C19.448 18.0764 18.9366 18.0764 18.6212 17.7708L13.2366 12.5534C12.9211 12.2477 12.9211 11.7523 13.2366 11.4467L18.6212 6.22922C18.9366 5.92359 19.448 5.92359 19.7634 6.22922Z"
                    fill="#040404"
                  />
                  <defs>
                    <filter
                      id="filter0_d_280_460"
                      x="0"
                      y="0"
                      width="33"
                      height="33"
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
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_280_460"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_280_460"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>

                <Swiper
                  navigation={{
                    prevEl: `#${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_prevArrow`,
                    nextEl: `#${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_nextArrow`,
                  }}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  slidesPerGroup={1}
                >
                  {servicesItem.imgURLs.map((imgURL: string, index: number) => (
                    <SwiperSlide key={imgURL + index}>
                      <div
                        className={
                          styles.specialistServicesResults__item__imgWrapper
                        }
                      >
                        <img
                          className={
                            styles.specialistServicesResults__item__SliderImg
                          }
                          src={imgURL}
                          alt={servicesItem.title}
                        />

                        <svg
                          className={`${styles.specialistServicesResults__item__heart} 
              ${itemIsFavourite ? styles.specialistServicesResults__item__heart__active : ""}`}
                          onClick={() => setItemIsFavourite(!itemIsFavourite)}
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.63693 2.14568L8 2.52915L8.36308 2.14568C10.0359 0.378892 11.8102 0.207641 13.1392 0.825223C14.5022 1.45853 15.5 2.9644 15.5 4.75923C15.5 6.58322 14.7642 7.9865 13.7215 9.18015C12.8643 10.1613 11.8258 10.9751 10.8218 11.7619C10.5843 11.948 10.3487 12.1326 10.118 12.3175C9.69801 12.654 9.31724 12.9545 8.94848 13.1736C8.57936 13.3928 8.27098 13.5 8 13.5C7.72902 13.5 7.42064 13.3928 7.05152 13.1736C6.68277 12.9545 6.302 12.654 5.88206 12.3175C5.65128 12.1326 5.4157 11.948 5.1782 11.7618C4.17419 10.9751 3.13566 10.1613 2.27855 9.18015C1.23576 7.9865 0.5 6.58322 0.5 4.75923C0.5 2.9644 1.49783 1.45853 2.86075 0.825223C4.18983 0.207642 5.96408 0.378891 7.63693 2.14568Z" />
                        </svg>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <svg
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__next}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_nextArrow`}
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_280_457)">
                    <circle cx="16.5" cy="12.5" r="12.5" fill="white" />
                  </g>
                  <path
                    opacity="0.8"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2366 18.7708C12.9211 18.4652 12.9211 17.9696 13.2366 17.664L18.05 13L13.2366 8.33594C12.9211 8.03031 12.9211 7.53486 13.2366 7.22923C13.552 6.92359 14.0634 6.92359 14.3788 7.22923L19.7634 12.4466C20.0789 12.7523 20.0789 13.2477 19.7634 13.5533L14.3788 18.7708C14.0634 19.0764 13.552 19.0764 13.2366 18.7708Z"
                    fill="#040404"
                  />
                  <defs>
                    <filter
                      id="filter0_d_280_457"
                      x="0"
                      y="0"
                      width="33"
                      height="33"
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
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_280_457"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_280_457"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            ) : (
              <div
                className={styles.specialistServicesResults__item__imgWrapper}
              >
                <img
                  className={styles.specialistServicesResults__item__img}
                  src={servicesItem.imgURLs[0]}
                  alt={servicesItem.title}
                />

                <svg
                  className={`${styles.specialistServicesResults__item__heart} 
              ${itemIsFavourite ? styles.specialistServicesResults__item__heart__active : ""}`}
                  onClick={() => setItemIsFavourite(!itemIsFavourite)}
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.63693 2.14568L8 2.52915L8.36308 2.14568C10.0359 0.378892 11.8102 0.207641 13.1392 0.825223C14.5022 1.45853 15.5 2.9644 15.5 4.75923C15.5 6.58322 14.7642 7.9865 13.7215 9.18015C12.8643 10.1613 11.8258 10.9751 10.8218 11.7619C10.5843 11.948 10.3487 12.1326 10.118 12.3175C9.69801 12.654 9.31724 12.9545 8.94848 13.1736C8.57936 13.3928 8.27098 13.5 8 13.5C7.72902 13.5 7.42064 13.3928 7.05152 13.1736C6.68277 12.9545 6.302 12.654 5.88206 12.3175C5.65128 12.1326 5.4157 11.948 5.1782 11.7618C4.17419 10.9751 3.13566 10.1613 2.27855 9.18015C1.23576 7.9865 0.5 6.58322 0.5 4.75923C0.5 2.9644 1.49783 1.45853 2.86075 0.825223C4.18983 0.207642 5.96408 0.378891 7.63693 2.14568Z" />
                </svg>
              </div>
            )}

            <div
              onClick={() => redirectToAbsolutePath(RedirectOnClickTo)}
              className={styles.specialistServicesResults__item__body}
            >
              <div className={styles.specialistServicesResults__item__header}>
                <h6 className={styles.specialistServicesResults__item__title}>
                  {servicesItem.title}
                </h6>
              </div>

              <div className={styles.specialistServicesResults__item__footer}>
                <div
                  className={styles.specialistServicesResults__item__subfooter}
                >
                  {servicesItem.TeleWorksChoice && (
                    <TeleWorksChoice
                      className={
                        styles.specialistServicesResults__item__TeleWorks
                      }
                    />
                  )}

                  <span
                    className={styles.specialistServicesResults__item__price}
                  >
                    {servicesItem.price}
                  </span>
                </div>

                <svg
                  className={styles.specialistServicesResults__item__separator}
                  width="270"
                  height="2"
                  viewBox="0 0 270 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="8.74228e-08"
                    y1="1"
                    x2="270"
                    y2="1.00002"
                    stroke="url(#paint0_linear_280_323)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_280_323"
                      x1="-4.37114e-08"
                      y1="2.5"
                      x2="270"
                      y2="2.50002"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EAF2FF" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#EAF2FF" />
                      <stop offset="1" stopColor="#EAF2FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className={styles.specialistServicesResults__item__author}>
                  <div
                    className={
                      styles.specialistServicesResults__item__authorWrapper
                    }
                  >
                    <div
                      className={`${styles.specialistServicesResults__item__authorImgWrapper} 
                  ${
                    servicesItem.authorIsOnline
                      ? styles.specialistServicesResults__item__authorOnlineImg
                      : styles.specialistServicesResults__item__authorOfflineImg
                  }`}
                    >
                      <img
                        className={`${styles.specialistServicesResults__item__authorImg} 
                  ${
                    servicesItem.authorIsOnline
                      ? styles.specialistServicesResults__item__authorOnlineImg
                      : styles.specialistServicesResults__item__authorOfflineImg
                  }`}
                        src={servicesItem.authorImgURL}
                        alt={servicesItem.authorName}
                      />
                    </div>

                    <div
                      className={
                        styles.specialistServicesResults__item__authorInfo
                      }
                    >
                      <span
                        className={
                          styles.specialistServicesResults__item__authorName
                        }
                      >
                        {servicesItem.authorName}
                      </span>

                      <span
                        className={
                          styles.specialistServicesResults__item__authorRank
                        }
                      >
                        {servicesItem.authorRank}
                      </span>
                    </div>

                    <div
                      className={
                        styles.specialistServicesResults__item__authorRatingWrapper
                      }
                    >
                      <img
                        className={
                          styles.specialistServicesResults__item__authorStar
                        }
                        src={`${URL_PART}/global/icons/star.png`}
                        alt="Жёлтая звезда рейтинга"
                      ></img>

                      <span
                        className={
                          styles.specialistServicesResults__item__authorRating
                        }
                      >
                        {servicesItem.authorRating}
                      </span>

                      <span
                        className={
                          styles.specialistServicesResults__item__authorReviewsAmount
                        }
                      >
                        ({servicesItem.authorReviewsAmount})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  });
