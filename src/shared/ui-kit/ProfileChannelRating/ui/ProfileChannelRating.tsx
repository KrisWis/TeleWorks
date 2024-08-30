import styles from "./ProfileChannelRating.module.scss";
import { memo } from "react";
import { ProfileChannelRatingProps } from "../model/ProfileChannelRating_types";
import ProfileChannelRatingSVG from "@/shared/assets/icons/ProfilePage/Profile/ProfileChannelRating.svg?react";

export const ProfileChannelRating: React.FC<ProfileChannelRatingProps> = memo(
  ({ backgroundIsVisible }): React.JSX.Element => {
    return (
      <div
        className={`${styles.ProfileChannelRating} ${backgroundIsVisible ? styles.ProfileChannelRating__background : ""}`}
      >
        <ProfileChannelRatingSVG />

        <span className={styles.ProfileChannelRating__text}>509.2</span>
      </div>
    );
  }
);
