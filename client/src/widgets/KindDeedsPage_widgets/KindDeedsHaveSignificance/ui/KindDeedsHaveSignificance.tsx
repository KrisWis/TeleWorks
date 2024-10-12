import { URL_PART } from "@/app";
import { Flex } from "@/shared/ui-kit/Stack";
import { memo } from "react";

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
          src={`${URL_PART}/KindDeeds/haveSignificance_img.png`}
          alt="Люди ухаживают за планетой Земля"
        />
      </Flex>
    );
  }
);
