import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Similar_channels__item.module.scss";

export const Similar_channels__item: React.FC = (): React.JSX.Element => {
  return (
    <div className={styles.similar_channels__item}>
      <div className={styles.similar_channels__item__header}>
        <div className={styles.similar_channels__item_rating}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00639 5.7959H4.99037C4.77996 5.7959 4.60938 5.96648 4.60938 6.17689V12.6192C4.60938 12.8297 4.77996 13.0002 4.99037 13.0002H8.00639C8.2168 13.0002 8.38739 12.8297 8.38739 12.6192V6.17689C8.38739 5.96648 8.2168 5.7959 8.00639 5.7959Z"
              fill="black"
            />
            <path
              d="M12.6073 9.08398H9.52699C9.31658 9.08398 9.146 9.25457 9.146 9.46498V12.6189C9.146 12.8294 9.31658 12.9999 9.52699 12.9999H12.6073C12.8177 12.9999 12.9883 12.8294 12.9883 12.6189V9.46498C12.9883 9.25454 12.8177 9.08398 12.6073 9.08398Z"
              fill="black"
            />
            <path
              d="M3.47305 7.56299H0.392713C0.182302 7.56299 0.0117188 7.73357 0.0117188 7.94398V12.619C0.0117188 12.8294 0.182302 13 0.392713 13H3.47305C3.68346 13 3.85404 12.8294 3.85404 12.619V7.94398C3.85404 7.73357 3.68349 7.56299 3.47305 7.56299Z"
              fill="black"
            />
            <path
              d="M6.50196 2.52588H6.49483C5.63017 2.52588 4.92676 3.22932 4.92676 4.09395V4.37418C4.92676 4.62988 5.13478 4.83793 5.3905 4.83793H7.60631C7.86201 4.83793 8.07006 4.62991 8.07006 4.37418V4.09395C8.07003 3.22932 7.36662 2.52588 6.50196 2.52588Z"
              fill="black"
            />
            <path
              d="M6.49821 1.76381C6.98832 1.76381 7.38704 1.36717 7.38704 0.879601C7.33828 -0.293378 5.65794 -0.293022 5.60938 0.879601C5.60938 1.36717 6.0081 1.76381 6.49821 1.76381Z"
              fill="black"
            />
            <path
              d="M1.93654 4.34912H1.9294C1.06474 4.34912 0.361328 5.05256 0.361328 5.91719V6.19742C0.361328 6.45312 0.569351 6.66117 0.825074 6.66117H3.04088C3.29658 6.66117 3.50463 6.45315 3.50463 6.19742V5.91719C3.50463 5.05256 2.80119 4.34912 1.93654 4.34912Z"
              fill="black"
            />
            <path
              d="M1.93278 3.58705C2.42289 3.58705 2.82161 3.19041 2.82161 2.70284C2.77285 1.52986 1.09251 1.53022 1.04395 2.70284C1.04395 3.19041 1.44267 3.58705 1.93278 3.58705Z"
              fill="black"
            />
            <path
              d="M11.0708 5.64795H11.0637C10.199 5.64795 9.49561 6.35139 9.49561 7.21604V7.49628C9.49561 7.75198 9.70363 7.96002 9.95935 7.96002H12.1752C12.4309 7.96002 12.6389 7.752 12.6389 7.49628V7.21604C12.6389 6.35139 11.9355 5.64795 11.0708 5.64795Z"
              fill="black"
            />
            <path
              d="M11.0675 4.88586C11.5577 4.88586 11.9564 4.48922 11.9564 4.00167C11.9076 2.82869 10.2273 2.82905 10.1787 4.00167C10.1787 4.48922 10.5774 4.88586 11.0675 4.88586Z"
              fill="black"
            />
          </svg>

          <span className={styles.similar_channels_rating__text}>509.2</span>
        </div>

        <div className={styles.similar_channels__item_stars}>
          <span className={styles.similar_channels__item_stars_span}>5.0</span>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9239 0.92705C14.2233 0.00573969 15.5267 0.00573993 15.8261 0.927051L18.4392 8.96935C18.573 9.38138 18.957 9.66034 19.3902 9.66034L27.8464 9.66034C28.8151 9.66034 29.2179 10.9 28.4342 11.4694L21.593 16.4398C21.2425 16.6944 21.0958 17.1458 21.2297 17.5578L23.8428 25.6001C24.1422 26.5214 23.0877 27.2875 22.304 26.7181L15.4628 21.7477C15.1123 21.4931 14.6377 21.4931 14.2872 21.7477L7.44602 26.7181C6.66231 27.2875 5.60783 26.5214 5.90718 25.6001L8.52028 17.5578C8.65416 17.1458 8.5075 16.6944 8.15701 16.4398L1.31582 11.4694C0.532106 10.9 0.934881 9.66034 1.9036 9.66034L10.3598 9.66034C10.793 9.66034 11.177 9.38138 11.3108 8.96935L13.9239 0.92705Z"
              fill="#FFB82A"
            />
          </svg>
        </div>
      </div>

      <div className={styles.similar_channels__item__body}>
        <div className={styles.similar_channels__item__avatar}>
          <img
            className={styles.similar_channels__item__img}
            src={`${URL_PART}/images/other/default-user.png`}
            alt="Изображение пользователя"
          />
        </div>
        <h2 className={styles.similar_channels__item__caption}>
          Квартира мечты!
        </h2>
        <span className={styles.similar_channels__item__category}>
          Интерьер и строительство
        </span>
        <div className={styles.similar_channels__item__info}>
          <div className={styles.similar_channels__item__info_item}>
            <img
              className={styles.similar_channels__item__info_item_icon}
              src={`${URL_PART}/icons/similar_channels__item/similar_channels__item_info_subscribers.png`}
              alt="Иконка подписчиков"
            />
            <span className={styles.similar_channels__item__info_item_span}>
              205K
            </span>
          </div>

          <img
            className={styles.similar_channels__item__info_separator}
            src={`${URL_PART}/icons/similar_channels__item/similar_channels__item_info_separator.png`}
            alt="Разделитель"
          />

          <div className={styles.similar_channels__item__info_item}>
            <img
              className={styles.similar_channels__item__info_item_icon}
              src={`${URL_PART}/icons/similar_channels__item/similar_channels__item_info_views.png`}
              alt="Иконка подписчиков"
            />
            <span className={styles.similar_channels__item__info_item_span}>
              104K
            </span>
          </div>

          <img
            className={styles.similar_channels__item__info_separator}
            src={`${URL_PART}/icons/similar_channels__item/similar_channels__item_info_separator.png`}
            alt="Разделитель"
          />

          <div className={styles.similar_channels__item__info_item}>
            <span className={styles.similar_channels__item__info_item_title}>
              ER
            </span>
            <span className={styles.similar_channels__item__info_item_span}>
              26.7%
            </span>
          </div>

          <img
            className={styles.similar_channels__item__info_separator}
            src={`${URL_PART}/icons/similar_channels__item/similar_channels__item_info_separator.png`}
            alt="Разделитель"
          />

          <div className={styles.similar_channels__item__info_item}>
            <span className={styles.similar_channels__item__info_item_title}>
              CPV
            </span>
            <span className={styles.similar_channels__item__info_item_span}>
              1.39₽
            </span>
          </div>
        </div>
        <div className={styles.similar_channels__item__footer}>
          <span className={styles.similar_channels__item__price}>
            12 048.94₽
          </span>

          <a className={styles.similar_channels__item__toCart} href="#">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V1.87698H3.89648L6.56067 17.8895V20.8009C5.47853 21.1945 4.69299 22.2305 4.69299 23.4413C4.69299 24.9835 5.95963 26.2502 7.50183 26.2502C9.04403 26.2502 10.3125 24.9835 10.3125 23.4413C10.3125 23.1107 10.2434 22.7962 10.1367 22.5001H18.9313C18.8234 22.7971 18.7482 23.1097 18.7482 23.4413C18.7482 24.9835 20.0221 26.2502 21.5643 26.2502C23.1065 26.2502 24.375 24.9835 24.375 23.4413C24.375 23.1104 24.3043 22.7964 24.1974 22.5001H26.25V20.6234H8.43747V18.7483H21.5643C21.9656 18.7475 22.322 18.4913 22.4505 18.111L26.2024 6.85932C26.4028 6.25409 25.9537 5.62962 25.3161 5.62703H16.875V7.50185H24.0088L20.8869 16.8733H8.30019L6.73463 7.50185H13.125V5.62703H6.42152L5.61219 0.782019C5.53651 0.332125 5.14922 0.00201968 4.693 0H0ZM14.0607 5.62703V11.1585C13.6345 10.5613 13.2008 9.96981 12.7661 9.37882L11.2518 10.4718C12.2421 11.8554 13.2428 13.2316 14.2401 14.6101C14.6146 15.1245 15.3818 15.1245 15.7562 14.6101C16.755 13.2304 17.7509 11.8486 18.7537 10.4718L17.2302 9.37882C16.7978 9.97573 16.3669 10.5737 15.9357 11.1715V5.62703H14.0607ZM7.50183 22.5001C8.0307 22.5001 8.4375 22.9124 8.4375 23.4413C8.4375 23.9702 8.0307 24.3752 7.50183 24.3752C6.97297 24.3752 6.56067 23.9702 6.56067 23.4413C6.56067 22.9124 6.97297 22.5001 7.50183 22.5001ZM21.5643 22.5001C22.0932 22.5001 22.5 22.9124 22.5 23.4413C22.5 23.9702 22.0932 24.3752 21.5643 24.3752C21.0355 24.3752 20.6232 23.9702 20.6232 23.4413C20.6232 22.9124 21.0355 22.5001 21.5643 22.5001Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
