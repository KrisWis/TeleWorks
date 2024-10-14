import styles from "./KindDeedsTip.module.scss";
import { memo } from "react";
import { KindDeedsTipProps } from "../model/KindDeedsTip_types";
import { Flex } from "@/shared/ui-kit/Stack";
import { tablet_mediaQuery } from "@/app";

export const KindDeedsTip: React.FC<KindDeedsTipProps> = memo(
  ({
    title,
    text,
    imgURL,
    imgURLAlt,
    textWrapperWidth,
    padding,
  }): React.JSX.Element => {
    return (
      <Flex
        max
        align="center"
        justify="between"
        className={styles.KindDeedsTip}
        style={{ padding: padding }}
      >
        <Flex
          style={{ width: textWrapperWidth }}
          gap={tablet_mediaQuery.matches ? "5" : "15"}
          direction="column"
        >
          <h6 className={styles.KindDeedsTip__caption}>{title}</h6>

          <p className={styles.KindDeedsTip__text}>{text}</p>
        </Flex>

        <img
          className={styles.KindDeedsTip__img}
          src={imgURL}
          alt={imgURLAlt}
        />
      </Flex>
    );
  }
);
