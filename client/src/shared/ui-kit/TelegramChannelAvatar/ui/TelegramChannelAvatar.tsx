import styles from "./TelegramChannelAvatar.module.scss";
import { memo } from "react";
import { TelegramChannelAvatarProps } from "../model/TelegramChannelAvatar_types";
import { Avatar } from "../../Avatar";

export const TelegramChannelAvatar: React.FC<TelegramChannelAvatarProps> = memo(
  ({ src, className, size }): React.JSX.Element => {
    return (
      <div className={`${styles.TelegramChannelAvatar} ${className}`}>
        <Avatar imgURL={src} imgSize={size} />
      </div>
    );
  },
);
TelegramChannelAvatar.displayName = "TelegramChannelAvatar";
