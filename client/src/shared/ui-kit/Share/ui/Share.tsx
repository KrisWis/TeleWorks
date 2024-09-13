import styles from "./Share.module.scss";
import { memo } from "react";
import ShareSVG from "@/shared/assets/icons/Global/shareSVG.svg?react";
import { ShareProps, ShareTypes } from "../model/Share_types";
import { IncreaseScaleHover } from "../../IncreaseScaleHover";

// TODO: сделать функционал кнопки "Поделиться"

export const Share: React.FC<ShareProps> = memo(
  ({ type = ShareTypes.DEFAULT }): React.JSX.Element => {
    return (
      <IncreaseScaleHover>
        <ShareSVG
          className={`${type == ShareTypes.RED ? styles.Share__red : ""}`}
        />
      </IncreaseScaleHover>
    );
  }
);
