import styles from "./ProfileChannelRating.module.scss";
import { memo } from "react";
import { ProfileChannelRatingProps } from "../model/ProfileChannelRating_types";
import ProfileChannelRatingSVG from "@/shared/assets/icons/Shared/ProfileChannelRating/ProfileChannelRating.svg?react";

export const ProfileChannelRating: React.FC<ProfileChannelRatingProps> = memo(
  ({ backgroundIsVisible, rating }): React.JSX.Element => {
    return (
      <div
        className={`${styles.ProfileChannelRating} ${backgroundIsVisible ? styles.ProfileChannelRating__background : ""}`}
      >
        <ProfileChannelRatingSVG className={styles.ProfileChannelRating__svg} />

        <span className={styles.ProfileChannelRating__text}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  }
);
