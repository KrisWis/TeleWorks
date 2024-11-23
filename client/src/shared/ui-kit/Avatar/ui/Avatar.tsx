import styles from "./Avatar.module.scss";
import { AvatarProps } from "../model/Avatar_types";

export const Avatar: React.FC<AvatarProps> = ({
  imgSize,
  imgURL,
  className,
}): React.JSX.Element => {
  return (
    <img
      className={`${styles.Avatar} ${styles["Avatar__" + imgSize]} ${className}`}
      src={imgURL}
      alt="Аватарка"
    />
  );
};
Avatar.displayName = "Avatar";
