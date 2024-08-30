import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./Profile__header.module.scss";
import { memo } from "react";
import ProfileHeaderIconCircle1 from "@/shared/assets/icons/ProfilePage/Profile/ProfileHeaderIconCircle1.svg?react";
import ProfileHeaderIconCircle2 from "@/shared/assets/icons/ProfilePage/Profile/ProfileHeaderIconCircle2.svg?react";
import ProfileHeaderIconCircle3 from "@/shared/assets/icons/ProfilePage/Profile/ProfileHeaderIconCircle3.svg?react";
import ProfileHeaderStat from "@/shared/assets/icons/ProfilePage/Profile/ProfileHeaderStat.svg?react";
import { ProfileChannelRating } from "@/shared/ui-kit/ProfileChannelRating";

export const Profile__header: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.profile__header}>
      <div className={styles.profile__header__left}>
        <ProfileChannelRating backgroundIsVisible={true} />

        <div className={styles.profile__header__icons}>
          <div className={styles.profile__header__icon__circle}>
            <ProfileHeaderIconCircle1 />
          </div>

          <div className={styles.profile__header__icon__circle}>
            <ProfileHeaderIconCircle2 />
          </div>

          <div className={styles.profile__header__icon__circle}>
            <ProfileHeaderIconCircle3 />
          </div>
        </div>
      </div>

      <div className={styles.profile__header__right}>
        <div className={styles.profile__header__stat}>
          <ProfileHeaderStat />

          <span className={styles.profile__header__stat__text}>5.0</span>
        </div>

        <div className={styles.profile__header__stat}>
          <img
            src={`${URL_PART}/ProfilePage/icons/profile__header/stat__views.jpg`}
            alt="Иконка просмотров"
          />

          <span className={styles.profile__header__stat__text}>5.2K</span>
        </div>

        <div className={styles.profile__header__stat}>
          <img
            src={`${URL_PART}/ProfilePage/icons/profile__header/stat__likes.svg`}
            alt="Иконка лайков"
          />

          <span className={styles.profile__header__stat__text}>134</span>
        </div>

        <img
          className={styles.profile__header__share}
          src={`${URL_PART}/ProfilePage/icons/profile__header/stat__share.svg`}
          alt='Иконка "Поделиться"'
        />
      </div>
    </div>
  );
});
