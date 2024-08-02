import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./PasswordRecoveryModal.module.scss";
import { memo, useEffect, useMemo, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { Input } from "@/shared/ui-kit/Input";

export const PasswordRecoveryModal: React.FC = memo((): React.JSX.Element => {
  const [EmailInput, setEmailInput] = useState<string>("");

  const [TryLogin, setTryLogin] = useState<boolean>(false);

  useEffect(() => {
    if (TryLogin) {
      setTimeout(() => {
        setTryLogin(false);
      }, 3000);
    }
  }, [TryLogin]);

  const canRecover = useMemo(() => EmailInput != "", [EmailInput]);

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
            className={
              TryLogin && !EmailInput
                ? styles.PasswordRecoveryModal__inputWrapper__input__warning
                : ""
            }
            type="email"
            placeholder="E-mail"
            value={EmailInput}
            onChange={(e) => setEmailInput(e.target.value)}
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
