import { mobile_mediaQuery } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";
import { Flex } from "@/shared/lib/Stack";
import { memo } from "react";
import styles from "./KindDeedsHaveSignificance.module.scss";

export const KindDeedsHaveSignificance: React.FC = memo(
  (): React.JSX.Element => {
    return (
      <Flex max justify="between" align="center">
        <Flex direction="column" gap="5">
          <h2 className="KindDeedsPage__caption">
            Ваши
            <span className="KindDeedsPage__caption__red"> добрые дела </span>
            имеют значение!
          </h2>

          <p className="KindDeedsPage__captionDesc">
            Благодаря вашей поддержке и участию мы смогли изменить жизни многих
            людей к лучшему.
          </p>
        </Flex>

        <img
          className={styles.KindDeedsHaveSignificance__img}
          src={`${URL_PART}/KindDeeds${mobile_mediaQuery.matches ? "/Adaptive" : ""}/haveSignificance_img.png`}
          alt="Люди ухаживают за планетой Земля"
        />
      </Flex>
    );
  },
);
KindDeedsHaveSignificance.displayName = "KindDeedsHaveSignificance";
