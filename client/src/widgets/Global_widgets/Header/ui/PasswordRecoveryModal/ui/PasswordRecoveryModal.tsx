import { URL_PART } from "@/shared/const/app";
import styles from "./PasswordRecoveryModal.module.scss";
import { memo, useMemo, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { Input } from "@/shared/ui-kit/Input";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { PasswordRecoveryModalCanRecover } from "../model/PasswordRecoveryModalCanRecover/PasswordRecoveryModalCanRecover";

export const PasswordRecoveryModal: React.FC = memo((): React.JSX.Element => {
  const [EmailInput, setEmailInput] = useState<string>("");

  const [TryLogin, setTryLogin] = UseTryAction();

  const canRecover = useMemo(
    () => PasswordRecoveryModalCanRecover(EmailInput),
    [EmailInput]
  );

  return (
    <div className={styles.PasswordRecoveryModal}>
      <img
        className={styles.PasswordRecoveryModal__img}
        src={`${URL_PART}/Header/images/authRegPassrecovery_img.png`}
        alt="Человек показывает на доску"
      />

      <h2 className={styles.PasswordRecoveryModal__caption}>
        Восстановление пароля
      </h2>

      <div className={styles.PasswordRecoveryModal__wrapper}>
        <div className={styles.PasswordRecoveryModal__inputWrapper}>
          <span className={styles.PasswordRecoveryModal__inputWrapper__span}>
            E-mail
          </span>

          <Input
            type="email"
            placeholder="E-mail"
            value={EmailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            isWarn={TryLogin && !EmailInput}
          />
        </div>

        <Button
          className={styles.PasswordRecoveryModal__recoveryButton}
          text="Восстановить"
          type={ButtonTypes.RED}
          onClick={
            !canRecover
              ? () => setTryLogin(true)
              : () => redirectToAbsolutePath("/")
          }
        />
      </div>
    </div>
  );
});
