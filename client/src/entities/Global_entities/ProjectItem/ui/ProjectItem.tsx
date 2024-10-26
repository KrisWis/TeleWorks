import { ProjectItemProps } from "../model/ProjectItem_types";
import styles from "./ProjectItem.module.scss";
import { memo, useRef, useState } from "react";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./ProjectItem_swiper.scss";
import { CustomItemBadge } from "@/shared/ui-kit/CustomItemBadge";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import SliderArrowNext from "@/shared/assets/icons/ProjectPage/ProjectItem/SliderArrowNext.svg?react";
import Favourite from "@/shared/assets/icons/ProjectPage/ProjectItem/Favourite.svg?react";
import Separator from "@/shared/assets/icons/ProjectPage/ProjectItem/Separator.svg?react";
import SliderArrowPrev from "@/shared/assets/icons/ProjectPage/ProjectItem/SliderArrowPrev.svg?react";
import { ProjectItemViewTypes } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices";
import { AppRoutes } from "@/app";

export const ProjectItem: React.FC<ProjectItemProps> = memo(
  ({ servicesItem, viewType, onProjectPage = false }): React.JSX.Element => {
    const [itemIsFavourite, setItemIsFavourite] = useState<boolean>(false);

    const FavouriteRef = useRef<HTMLDivElement>(null);

    const RedirectOnClickTo: string = `${!onProjectPage ? AppRoutes.SERVICES : ""}/${servicesItem.id}`;

    const RedirectToProjectPage = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (e.target != FavouriteRef.current) {
        redirectToAbsolutePath(RedirectOnClickTo);
      }
    };

    return (
      <>
        {viewType == ProjectItemViewTypes.ROW ? (
          <div
            className={`specialistServicesResults__item ${styles.specialistServicesResults__item} 
            ${styles.specialistServicesResults__item__row}`}
          >
            {servicesItem.imgURLs.length > 1 ? (
              <div className={styles.specialistServicesResults__item__slider}>
                <SliderArrowPrev
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__prev}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_prevArrow`}
                />

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

                <SliderArrowNext
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__next}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_nextArrow`}
                />
              </div>
            ) : (
              <img
                className={styles.specialistServicesResults__item__img}
                src={servicesItem.imgURLs[0]}
                alt={servicesItem.title}
              />
            )}

            <div
              onClick={RedirectToProjectPage}
              className={styles.specialistServicesResults__item__body}
            >
              <div className={styles.specialistServicesResults__item__header}>
                <h6 className={styles.specialistServicesResults__item__title}>
                  {servicesItem.title}
                </h6>

                <div
                  ref={FavouriteRef}
                  onClick={() => setItemIsFavourite(!itemIsFavourite)}
                >
                  <Favourite
                    className={`${styles.specialistServicesResults__item__heart} 
              ${itemIsFavourite ? styles.specialistServicesResults__item__heart__active : ""}`}
                  />
                </div>
              </div>

              <div className={styles.specialistServicesResults__item__footer}>
                <div className={styles.specialistServicesResults__item__author}>
                  {servicesItem.TeleWorksChoice && (
                    <CustomItemBadge
                      className={
                        styles.specialistServicesResults__item__TeleWorks
                      }
                      firstTitle="Выбор"
                      secondTitle="TeleWorks"
                    />
                  )}

                  {servicesItem.TopOfWeek && (
                    <CustomItemBadge
                      className={
                        styles.specialistServicesResults__item__TeleWorks
                      }
                      firstTitle="Топ"
                      secondTitle="Недели"
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
                <SliderArrowPrev
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__prev}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_prevArrow`}
                />

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

                        <Favourite
                          className={`${styles.specialistServicesResults__item__heart} 
              ${itemIsFavourite ? styles.specialistServicesResults__item__heart__active : ""}
              specialistServicesResults__item__heart`}
                          onClick={() => setItemIsFavourite(!itemIsFavourite)}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <SliderArrowNext
                  className={`${styles.specialistServicesResults__item__slider__arrow} ${styles.specialistServicesResults__item__slider__arrow__next}`}
                  id={`${servicesItem.title.replace(/.$/, "_").replace(/\s/g, "")}specialistServices__slider_nextArrow`}
                />
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

                <Favourite
                  className={`${styles.specialistServicesResults__item__heart} 
              ${itemIsFavourite ? styles.specialistServicesResults__item__heart__active : ""}`}
                  onClick={() => setItemIsFavourite(!itemIsFavourite)}
                />
              </div>
            )}

            <div
              onClick={RedirectToProjectPage}
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
                    <CustomItemBadge
                      className={
                        styles.specialistServicesResults__item__TeleWorks
                      }
                      firstTitle="Выбор"
                      secondTitle="TeleWorks"
                    />
                  )}

                  {servicesItem.TopOfWeek && (
                    <CustomItemBadge
                      className={
                        styles.specialistServicesResults__item__TeleWorks
                      }
                      firstTitle="Топ"
                      secondTitle="НЕДЕЛИ"
                    />
                  )}

                  <span
                    className={styles.specialistServicesResults__item__price}
                  >
                    {servicesItem.price}
                  </span>
                </div>

                <Separator
                  className={styles.specialistServicesResults__item__separator}
                />

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
  }
);
