import styles from "./Favourite.module.scss";
import { memo } from "react";
import { FavouriteProps } from "../model/Favourite_types";
import FavouriteSVG from "@/shared/assets/icons/Global/favouriteSVG.svg?react";

export const Favourite: React.FC<FavouriteProps> = memo(
  ({ IsFavourite, setIsFavourite }): React.JSX.Element => {
    return (
      <FavouriteSVG
        className={`${styles.Favourite} ${!IsFavourite ? styles.Favourite__selected : ""}`}
        onClick={() => setIsFavourite(!IsFavourite)}
      />
    );
  },
);
Favourite.displayName = "Favourite";
