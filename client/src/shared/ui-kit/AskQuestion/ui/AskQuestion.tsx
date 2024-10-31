import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import styles from "./AskQuestion.module.scss";
import { memo } from "react";
import { AskQuestionProps } from "../model/AskQuestion_types";

export const AskQuestion: React.FC<AskQuestionProps> = memo(
  ({ className }): React.JSX.Element => {
    return (
      <div
        className={`${styles.AskQuestion} Page__BoxShadowWrapper ${className}`}
      >
        <span className={styles.AskQuestion__caption}>
          Не нашли ответ на ваш вопрос?
        </span>

        <p className={styles.AskQuestion__desc}>
          Свяжитесь с нами, наша{" "}
          <span className={styles.AskQuestion__desc__support}>
            тех.поддержка
          </span>{" "}
          решит ваш вопрос, мы на связи{" "}
          <span className={styles.AskQuestion__desc__red}>24/7</span>
        </p>

        <Button
          className={styles.AskQuestion__button}
          to="https://t.me/TeleWorksSupportbot"
          text="Задать вопрос"
          type={ButtonTypes.RED}
        />
      </div>
    );
  }
);
