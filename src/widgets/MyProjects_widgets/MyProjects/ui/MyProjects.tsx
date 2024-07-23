import { Button, ButtonTypes } from "@/shared";
import styles from "./MyProjects.module.scss";
import "@/shared/main.scss";
import "@/pages/MyProjectsPage/ui/MyProjectsPage.scss";
import { Link } from "react-router-dom";
import { memo } from "react";
import { MyProjectsPage__withoutProjects } from "./MyProjectsPage__withoutProjects/ui/MyProjectsPage__withoutProjects";

export const MyProjects: React.FC = memo((): React.JSX.Element => {
  return (
    <section className={styles.myProjects}>
      <h1 className="page__caption">Мои проекты</h1>

      <div className={styles.myProjects__categories}>
        <Button
          text="Реклама"
          className={styles.myProjects__category}
          type={ButtonTypes.RED}
        />
        <Button
          text="Услуги"
          className={styles.myProjects__category}
          type={ButtonTypes.BLUE}
        />
        <Button
          text="Готовые предложения"
          className={styles.myProjects__category}
          type={ButtonTypes.WHITE}
        />
      </div>

      <div className={styles.myProjects__body}>
        <div className={`MyProjectsPage__wrapper ${styles.myProjects__stats}`}>
          <h5 className={styles.myProjects__stats__caption}>
            Просмотр по статусу
          </h5>

          <ul className={styles.myProjects__stats__items}>
            <li className={styles.myProjects__stats__item}>
              <div className={styles.myProjects__stats__item__title}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_39)">
                    <path
                      d="M6 12C2.69063 12 0 9.30937 0 6C0 2.69063 2.69063 0 6 0C9.30937 0 12 2.69063 12 6C12 9.30937 9.30937 12 6 12ZM6 0.75C3.10547 0.75 0.75 3.10547 0.75 6C0.75 8.89453 3.10547 11.25 6 11.25C8.89453 11.25 11.25 8.89453 11.25 6C11.25 3.10547 8.89453 0.75 6 0.75ZM8.46328 5.12109C8.46328 4.91484 8.29453 4.74609 8.08828 4.74609H3.91172C3.70547 4.74609 3.53672 4.91484 3.53672 5.12109C3.53672 5.32734 3.70547 5.49609 3.91172 5.49609H8.08828C8.29453 5.49609 8.46328 5.32734 8.46328 5.12109ZM8.46328 3.36328C8.46328 3.15703 8.29453 2.98828 8.08828 2.98828H3.91172C3.70547 2.98828 3.53672 3.15703 3.53672 3.36328C3.53672 3.56953 3.70547 3.73828 3.91172 3.73828H8.08828C8.29453 3.73828 8.46328 3.56953 8.46328 3.36328ZM8.46328 8.63672C8.46328 8.43047 8.29453 8.26172 8.08828 8.26172H3.91172C3.70547 8.26172 3.53672 8.43047 3.53672 8.63672C3.53672 8.84297 3.70547 9.01172 3.91172 9.01172H8.08828C8.29453 9.01172 8.46328 8.84531 8.46328 8.63672ZM8.46328 6.87891C8.46328 6.67266 8.29453 6.50391 8.08828 6.50391H3.91172C3.70547 6.50391 3.53672 6.67266 3.53672 6.87891C3.53672 7.08516 3.70547 7.25391 3.91172 7.25391H8.08828C8.29453 7.25391 8.46328 7.0875 8.46328 6.87891Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_39">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className={styles.myProjects__stats__item__type}>
                  Все
                </span>
              </div>

              <span className={styles.myProjects__stats__item__amount}>16</span>
            </li>

            <li className={styles.myProjects__stats__item}>
              <div className={styles.myProjects__stats__item__title}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_41)">
                    <path
                      d="M10.7273 10.9091H9.8182V9.57942C9.8182 9.46069 9.8133 9.34265 9.80431 9.22545C9.80399 9.22196 9.80391 9.2184 9.80355 9.21491C9.7042 7.95545 9.09424 6.79589 8.1285 6.00007C9.09337 5.20491 9.70319 4.04665 9.80333 2.78851C9.80435 2.77931 9.80475 2.76993 9.80529 2.76058C9.81359 2.64796 9.8182 2.53469 9.8182 2.42069V1.09091H10.7273C11.0285 1.09091 11.2727 0.846691 11.2727 0.545455C11.2727 0.244218 11.0285 0 10.7273 0H9.27275H2.7273H1.27275C0.971513 0 0.727295 0.244218 0.727295 0.545455C0.727295 0.846691 0.971513 1.09091 1.27275 1.09091H2.18184V2.42065C2.18184 2.54065 2.18682 2.65989 2.19602 2.77833C2.1962 2.78025 2.1962 2.78222 2.19642 2.78415C2.29555 4.04396 2.90559 5.20396 3.87155 6.00004C2.90642 6.79531 2.29664 7.95385 2.19664 9.21229C2.1958 9.22015 2.19551 9.22815 2.19497 9.23607C2.18653 9.34982 2.18184 9.46429 2.18184 9.57942V10.9091H1.27275C0.971513 10.9091 0.727295 11.1533 0.727295 11.4545C0.727295 11.7558 0.971513 12 1.27275 12H2.7273H9.27275H10.7273C11.0285 12 11.2727 11.7558 11.2727 11.4545C11.2727 11.1533 11.0285 10.9091 10.7273 10.9091ZM8.7273 1.09091V2.18182H3.27275V1.09091H8.7273ZM5.10126 6.47705C5.2746 6.38091 5.38213 6.19829 5.38213 6.00007C5.38213 5.80185 5.2746 5.61924 5.10126 5.52305C4.22813 5.03873 3.61137 4.2168 3.37715 3.27273H8.6229C8.38871 4.2168 7.77191 5.03873 6.89879 5.52309C6.72544 5.61927 6.61791 5.80189 6.61791 6.00011C6.61791 6.19833 6.72544 6.38095 6.89879 6.47709C7.77191 6.96138 8.38868 7.78327 8.6229 8.72731H3.37715C3.6114 7.78324 4.22813 6.96138 5.10126 6.47705ZM3.27275 10.9091V9.81818H8.7273V10.9091H3.27275Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_41">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className={styles.myProjects__stats__item__type}>
                  Ожидает
                </span>
              </div>

              <span className={styles.myProjects__stats__item__amount}>9</span>
            </li>

            <li className={styles.myProjects__stats__item}>
              <div className={styles.myProjects__stats__item__title}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_43)">
                    <path
                      d="M7.93945 0.923203V0H7.06055V0.923203C3.77528 1.14053 1.14053 3.77528 0.923203 7.06055H0V7.93945H0.923203C1.14053 11.2247 3.77528 13.8595 7.06055 14.0768V15H7.93945V14.0768C11.2247 13.8595 13.8595 11.2247 14.0768 7.93945H15V7.06055H14.0768C13.8595 3.77528 11.2247 1.14053 7.93945 0.923203ZM7.93945 13.1962V12.334H7.06055V13.1962C4.26003 12.9821 2.01788 10.74 1.80384 7.93945H2.66602V7.06055H1.80384C2.01788 4.26003 4.26003 2.01788 7.06055 1.80384V2.66602H7.93945V1.80384C10.74 2.01788 12.9821 4.26003 13.1962 7.06055H12.334V7.93916L13.1962 7.93945C12.9821 10.74 10.74 12.9821 7.93945 13.1962Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M9.25781 4.68126L9.12908 4.55256C9.07096 4.49437 8.53116 3.98438 7.5 3.98438C6.46884 3.98438 5.92904 4.49437 5.87092 4.55256L5.74219 4.68126V5.74219H3.98438V11.0156H11.0156V5.74219H9.25781V4.68126ZM6.62109 5.08324C6.77648 4.99025 7.06781 4.86328 7.5 4.86328C7.93219 4.86328 8.22352 4.99025 8.37891 5.08324V5.74219H6.62109V5.08324ZM4.86328 10.1367V8.37891H7.06055V9.25781H7.93945V8.37891H10.1367V10.1367H4.86328ZM10.1367 7.5H4.86328V6.62109H10.1367V7.5Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_43">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className={styles.myProjects__stats__item__type}>
                  В работе
                </span>
              </div>

              <span className={styles.myProjects__stats__item__amount}>2</span>
            </li>

            <li className={styles.myProjects__stats__item}>
              <div className={styles.myProjects__stats__item__title}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_47)">
                    <path
                      d="M6.00004 0.000244141C2.6916 0.000244141 0 2.69181 0 6.0002C0 9.3086 2.6916 12.0002 6.00004 12.0002C9.30844 12.0002 12 9.3086 12 6.0002C12 2.69181 9.30844 0.000244141 6.00004 0.000244141ZM6.00004 11.0166C3.23396 11.0166 0.9836 8.76628 0.9836 6.0002C0.9836 3.23416 3.23396 0.983844 6.00004 0.983844C8.76608 0.983844 11.0164 3.23416 11.0164 6.0002C11.0164 8.76628 8.76608 11.0166 6.00004 11.0166Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M8.59558 3.69725L5.03313 7.25973L3.40437 5.63096C3.21229 5.43893 2.90093 5.43893 2.70885 5.63096C2.51681 5.82304 2.51681 6.13441 2.70885 6.32649L4.68537 8.30301C4.78141 8.39901 4.90727 8.44705 5.03313 8.44705C5.159 8.44705 5.28486 8.39901 5.3809 8.30301L9.2911 4.39281C9.48314 4.20073 9.48314 3.88936 9.2911 3.69729C9.09902 3.50521 8.78761 3.50521 8.59558 3.69725Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_47">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className={styles.myProjects__stats__item__type}>
                  Завершен
                </span>
              </div>

              <span className={styles.myProjects__stats__item__amount}>2</span>
            </li>

            <li className={styles.myProjects__stats__item}>
              <div className={styles.myProjects__stats__item__title}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 11.5V13C13 13.3978 12.842 13.7794 12.5607 14.0607C12.2794 14.342 11.8978 14.5 11.5 14.5H4.5C4.10218 14.5 3.72064 14.342 3.43934 14.0607C3.15804 13.7794 3 13.3978 3 13V3C3 2.60218 3.15804 2.22064 3.43934 1.93934C3.72064 1.65804 4.10218 1.5 4.5 1.5H6C6.13261 1.5 6.25979 1.55268 6.35355 1.64645C6.44732 1.74021 6.5 1.86739 6.5 2C6.5 2.13261 6.44732 2.25979 6.35355 2.35355C6.25979 2.44732 6.13261 2.5 6 2.5H4.5C4.36739 2.5 4.24021 2.55268 4.14645 2.64645C4.05268 2.74021 4 2.86739 4 3V13C4 13.1326 4.05268 13.2598 4.14645 13.3536C4.24021 13.4473 4.36739 13.5 4.5 13.5H11.5C11.6326 13.5 11.7598 13.4473 11.8536 13.3536C11.9473 13.2598 12 13.1326 12 13V11.5C12 11.3674 12.0527 11.2402 12.1464 11.1464C12.2402 11.0527 12.3674 11 12.5 11C12.6326 11 12.7598 11.0527 12.8536 11.1464C12.9473 11.2402 13 11.3674 13 11.5ZM13 6V9C13 9.13261 12.9473 9.25979 12.8536 9.35355C12.7598 9.44732 12.6326 9.5 12.5 9.5C12.3674 9.5 12.2402 9.44732 12.1464 9.35355C12.0527 9.25979 12 9.13261 12 9V6.5H9.5C9.10218 6.5 8.72064 6.34196 8.43934 6.06066C8.15804 5.77936 8 5.39782 8 5V2C8.00079 1.93466 8.01438 1.87011 8.04 1.81C8.09074 1.68783 8.18783 1.59074 8.31 1.54C8.43173 1.48999 8.56827 1.48999 8.69 1.54C8.75138 1.5638 8.80745 1.59948 8.855 1.645L12.855 5.645C12.9005 5.69255 12.9362 5.74862 12.96 5.81C12.9856 5.87011 12.9992 5.93466 13 6ZM9.5 5.5H11.295L9 3.205V5C9 5.13261 9.05268 5.25979 9.14645 5.35355C9.24021 5.44732 9.36739 5.5 9.5 5.5Z"
                    fill="#C4C4C4"
                  />
                </svg>

                <span className={styles.myProjects__stats__item__type}>
                  Черновики
                </span>
              </div>

              <span className={styles.myProjects__stats__item__amount}>1</span>
            </li>

            <li className={styles.myProjects__stats__item}>
              <div className={styles.myProjects__stats__item__title}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5_55)">
                    <path
                      d="M5.06936 4.47682C4.90528 4.31274 4.63834 4.31274 4.47426 4.47682C4.31018 4.6409 4.31018 4.90784 4.47426 5.07192L5.40487 6.00254L4.47426 6.93315C4.31018 7.09723 4.31018 7.36417 4.47426 7.52825C4.55507 7.60907 4.66283 7.6507 4.77058 7.6507C4.87834 7.6507 4.98609 7.60907 5.06691 7.52825L5.99752 6.59764L6.92813 7.52825C7.00895 7.60907 7.11671 7.6507 7.22446 7.6507C7.33222 7.6507 7.43997 7.60907 7.52079 7.52825C7.68487 7.36417 7.68487 7.09723 7.52079 6.93315L6.59018 6.00254L7.52079 5.07192C7.68487 4.90784 7.68487 4.6409 7.52079 4.47682C7.35671 4.31274 7.08977 4.31274 6.92569 4.47682L5.99507 5.40743L5.06936 4.47682Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M0 6C0 9.30857 2.69143 12 6 12C9.30857 12 12 9.30857 12 6C12 2.69143 9.30857 0 6 0C2.69143 0 0 2.69143 0 6ZM11.16 6C11.16 8.84571 8.84571 11.16 6 11.16C3.15429 11.16 0.84 8.84571 0.84 6C0.84 3.15429 3.15429 0.84 6 0.84C8.84571 0.84 11.16 3.15429 11.16 6Z"
                      fill="#C4C4C4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_55">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span className={styles.myProjects__stats__item__type}>
                  Отменен
                </span>
              </div>

              <span className={styles.myProjects__stats__item__amount}>0</span>
            </li>
          </ul>

          <svg
            className={styles.myProjects__stats__separator}
            width="234"
            height="1"
            viewBox="0 0 234 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.5H234" stroke="#DCDCDC" />
          </svg>

          <div className={styles.myProjects__stats__links}>
            <div className={styles.myProjects__stats__link}>
              <svg
                className={styles.myProjects__stats__link__svg}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_63)">
                  <path
                    d="M12.9878 4.02441H2.01217C1.70906 4.02441 1.46338 4.2701 1.46338 4.5732V14.4513C1.46338 14.7544 1.70906 15 2.01217 15H12.9878C13.2909 15 13.5366 14.7544 13.5366 14.4513V4.5732C13.5366 4.27007 13.2909 4.02441 12.9878 4.02441ZM12.439 13.9025H2.56096V5.12196H12.439V13.9025H12.439Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M9.56709 6.53052C9.26398 6.53052 9.0183 6.7762 9.0183 7.07931V7.92077H5.98173V7.07931C5.98173 6.7762 5.73605 6.53052 5.43294 6.53052C5.12984 6.53052 4.88416 6.7762 4.88416 7.07931V7.92077C4.88416 8.53615 5.36635 9.01832 5.9817 9.01832H9.0183C9.63368 9.01832 10.1158 8.53612 10.1158 7.92077V7.07931C10.1159 6.7762 9.87019 6.53052 9.56709 6.53052Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M12.0732 2.01221H2.92684C2.62374 2.01221 2.37805 2.25789 2.37805 2.561C2.37805 2.8641 2.62374 3.10979 2.92684 3.10979H12.0732C12.3763 3.10979 12.622 2.8641 12.622 2.561C12.622 2.25786 12.3763 2.01221 12.0732 2.01221Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M11.1586 0H3.84151C3.53841 0 3.29272 0.245684 3.29272 0.548789C3.29272 0.851895 3.53841 1.09758 3.84151 1.09758H11.1586C11.4617 1.09758 11.7074 0.851895 11.7074 0.548789C11.7074 0.245684 11.4617 0 11.1586 0Z"
                    fill="#C4C4C4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_63">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <Link to="/" className={styles.myProjects__stats__link__text}>
                Архив
              </Link>
            </div>

            <div className={styles.myProjects__stats__link}>
              <svg
                className={styles.myProjects__stats__link__svg}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_61)">
                  <path
                    d="M16.4569 15.4843L12.4109 11.2762C13.4512 10.0396 14.0212 8.48359 14.0212 6.86374C14.0212 3.07913 10.9421 0 7.15744 0C3.37284 0 0.293701 3.07913 0.293701 6.86374C0.293701 10.6484 3.37284 13.7275 7.15744 13.7275C8.57824 13.7275 9.93219 13.299 11.0898 12.4854L15.1665 16.7255C15.3369 16.9024 15.5661 17 15.8117 17C16.0442 17 16.2647 16.9114 16.4322 16.7502C16.7879 16.4079 16.7992 15.8403 16.4569 15.4843ZM7.15744 1.79054C9.95487 1.79054 12.2306 4.06632 12.2306 6.86374C12.2306 9.66117 9.95487 11.9369 7.15744 11.9369C4.36002 11.9369 2.08424 9.66117 2.08424 6.86374C2.08424 4.06632 4.36002 1.79054 7.15744 1.79054Z"
                    fill="#FF5555"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_61">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <Link to="/" className={styles.myProjects__stats__link__text}>
                Папки
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.myProjects__interface}>
          <div className={styles.myProjects__search}>
            <input
              className={styles.myProjects__search_input}
              placeholder="Поиск кампании по названию, id заявки"
              type="text"
            />

            <Button
              className={styles.myProjects__search_button}
              text="Найти"
              type={ButtonTypes.RED}
            />
          </div>

          <MyProjectsPage__withoutProjects />
        </div>
      </div>
    </section>
  );
});
