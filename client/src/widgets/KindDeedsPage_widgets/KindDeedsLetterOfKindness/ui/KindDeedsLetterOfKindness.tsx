import { Flex } from "@/shared/lib/Stack";
import styles from "./KindDeedsLetterOfKindness.module.scss";
import { memo, useState } from "react";
import { Input } from "@/shared/ui-kit/Input";
import WhiteArrowSVG from "@/shared/assets/icons/Global/WhiteArrowSVG.svg?react";
import { mobile_mediaQuery } from "@/shared/const/global";
import { URL_PART } from "@/shared/const/app";

export const KindDeedsLetterOfKindness: React.FC = memo(
  (): React.JSX.Element => {
    // Стейт для ввода email
    const [emailInputValue, setEmailInputValue] = useState<string>("");

    return (
      <Flex
        align="center"
        justify="between"
        className={styles.KindDeedsLetterOfKindness}
      >
        <Flex direction="column" gap={mobile_mediaQuery.matches ? "3" : "10"}>
          <h1 className="KindDeedsPage__caption KindDeedsPage__caption__red">
            Письмо добра
          </h1>

          <p className={styles.KindDeedsLetterOfKindness__desc}>
            Делимся отчетами, пишем о жизни фонда и детях, которым требуется
            помощь. Подпишись на рассылку чтобы быть в курсе.
          </p>

          <div className={styles.KindDeedsLetterOfKindness__inputWrapper}>
            <Input
              className={styles.KindDeedsLetterOfKindness__input}
              type="email"
              value={emailInputValue}
              onChange={(e) => setEmailInputValue(e.target.value)}
              placeholder="Ваш e-mail"
            />

            <Flex
              justify="center"
              align="center"
              className={styles.KindDeedsLetterOfKindness__sendWrapper}
            >
              <WhiteArrowSVG />
            </Flex>

            <p className={styles.KindDeedsLetterOfKindness__accept}>
              *нажимая на кнопку, вы принимаете условия публичной оферты и даете
              согласие на обработку персональных данных
            </p>
          </div>
        </Flex>

        <img
          className={styles.KindDeedsLetterOfKindness__img}
          src={`${URL_PART}/KindDeeds${mobile_mediaQuery.matches ? "/Adaptive" : ""}/letterOfKindness_img.png`}
          alt="Письмо с сердечком и логотипов TeleWorks"
        />
      </Flex>
    );
  },
);
KindDeedsLetterOfKindness.displayName = "KindDeedsLetterOfKindness";
