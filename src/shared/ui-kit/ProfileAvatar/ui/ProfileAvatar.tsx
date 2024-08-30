import styles from "./ProfileAvatar.module.scss";
import { memo } from "react";
import { ProfileAvatarProps } from "../model/ProfileAvatar_types";
import { Avatar } from "../../Avatar";

export const ProfileAvatar: React.FC<ProfileAvatarProps> = memo(
  ({ src, className, size }): React.JSX.Element => {
    return (
      <div className={`${styles.ProfileAvatar} ${className}`}>
        <Avatar imgURL={src} imgSize={size} />
      </div>
    );
  }
);
