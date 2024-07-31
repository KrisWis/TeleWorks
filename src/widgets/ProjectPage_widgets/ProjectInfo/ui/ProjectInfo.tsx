import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./ProjectInfo.module.scss";
import { memo, useState } from "react";
import { ProjectInfoAbout } from "./ProjectInfoAbout/ui/ProjectInfoAbout";
import { ProjectInfoProps } from "../model/ProjectInfo_types";
import { CustomItemBadge } from "@/shared/ui-kit/CustomItemBadge";
import { ProjectInfo_pack } from "@/features/ProjectInfo_features/ProjectInfo_pack";
import { AuthorCard } from "@/entities/ProjectPage_entities/ProjectInfo_entities/AuthorCard";
import { ProjectTag } from "@/entities/ProjectPage_entities/ProjectInfo_entities/ProjectTag";
import { DynamicModuleLoader } from "@/shared/ui-kit/DynamicModuleLoader/DynamicModuleLoader";
import { checkoutOrderReducer } from "@/features/ProjectInfo_features/CheckoutOrder/model/slice/CheckoutOrderSlice";

export const ProjectInfo: React.FC<ProjectInfoProps> = memo(
  ({
    projectTitle,
    favouriteAmount,
    breadcrumbs,
    author,
    ProjectInfo_packs,
    ProjectTags,
  }): React.JSX.Element => {
    const [FavouriteIsSelected, setFavouriteIsSelected] =
      useState<boolean>(false);

    return (
      <DynamicModuleLoader
        removeAfterUnmount
        reducers={{ checkoutOrderReducer }}
      >
        <section className={styles.projectInfo}>
          <div className={styles.projectInfo__header}>
            <h2 className="ProjectPage__subcaption">{projectTitle}</h2>

            <div className={styles.projectInfo__icons}>
              <div className={styles.projectInfo__favourite}>
                <svg
                  className={`${styles.projectInfo__favourite__heart} ${FavouriteIsSelected ? styles.projectInfo__favourite__heart__active : ""}`}
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

                <span className={styles.projectInfo__favouriteAmount}>
                  {favouriteAmount}
                </span>
              </div>

              <svg
                className="Page__transitionToMainColor"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_280_581)">
                  <path
                    d="M21 9.45119L11.6278 1.83008V5.71865C2.49277 5.79313 -0.89586 12.605 0.197944 19.1698C2.19524 15.089 6.3468 13.4818 11.6278 13.2988V17.0723L21 9.45119Z"
                    fill="rgba(0, 0, 0, 0.2)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_581">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                className={`Page__transitionToMainColor ${styles.projectInfo__report}`}
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
          </div>

          <div
            className={`${styles.projectInfo__breadcrumbs} ProjectPage__span`}
          >
            {breadcrumbs.map((breadcrumb: string) => (
              <span key={breadcrumb}>
                {breadcrumb}
                {breadcrumbs[breadcrumbs.length - 1] != breadcrumb && (
                  <span className={styles.projectInfo__breadcrumbs__separator}>
                    &gt;
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className={styles.projectInfo__author}>
            <div
              className={`${styles.projectInfo__authorImgWrapper} ${styles.projectInfo__authorOnlineImg}`}
            >
              <img
                className={styles.projectInfo__authorImg}
                src={author.imgURL}
                alt={author.authorName}
              />
            </div>

            <div className={styles.projectInfo__authorInfo}>
              <span className={styles.projectInfo__authorName}>
                {author.authorName}
              </span>

              <div className={styles.projectInfo__authorRating}>
                <img
                  className={styles.projectInfo__authorStar}
                  src={`${URL_PART}/global/icons/star.png`}
                  alt="Жёлтая звезда рейтинга"
                ></img>

                <span className={styles.projectInfo__authorRatingNumber}>
                  {author.reputation.toFixed(1)}
                </span>
                <span className={styles.projectInfo__authorReviewsAmount}>
                  ({author.ordersAmount})
                </span>
              </div>
            </div>

            <div className={styles.projectInfo__TeleWorksInfo}>
              {author.TeleWorksChoice && (
                <CustomItemBadge
                  firstTitle="Выбор"
                  secondTitle="TeleWorks"
                  className={styles.projectInfo__TeleWorks}
                />
              )}

              {author.orderInQueue > 0 && (
                <span className={styles.projectInfo__TeleWorks__offers}>
                  {author.orderInQueue} заказ в очереди
                </span>
              )}
            </div>
          </div>

          <div className={styles.projectInfo__wrapper}>
            <ProjectInfoAbout />

            <div className={styles.projectInfo__continue}>
              <ProjectInfo_pack packs={ProjectInfo_packs} />

              <AuthorCard {...author} />

              <div className={styles.projectInfo__tags}>
                {ProjectTags.map((projectTag: string) => (
                  <ProjectTag key={projectTag} title={projectTag} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </DynamicModuleLoader>
    );
  }
);
