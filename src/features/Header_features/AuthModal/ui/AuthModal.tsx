import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./AuthModal.module.scss";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { AuthModalProps } from "../model/AuthModal_types";
import { Input } from "@/shared/ui-kit/Input";

export const AuthModal: React.FC<AuthModalProps> = memo(
  ({
    setModalOpen,
    setRegModalOpen,
    CustomSetModalAppear,
    setPasswordRecoveryModalOpen,
  }): React.JSX.Element => {
    const [EmailInput, setEmailInput] = useState<string>("");

    const [PasswordInput, setPasswordInput] = useState<string>("");

    const [TryLogin, setTryLogin] = useState<boolean>(false);

    useEffect(() => {
      if (TryLogin) {
        setTimeout(() => {
          setTryLogin(false);
        }, 3000);
      }
    }, [TryLogin]);

    const onClickReg = useCallback((): void => {
      CustomSetModalAppear(false);

      setTimeout(() => {
        setModalOpen(false);

        setRegModalOpen(true);
      }, 300);
    }, [CustomSetModalAppear, setModalOpen, setRegModalOpen]);

    const onClickPasswordRecovery = useCallback((): void => {
      CustomSetModalAppear(false);

      setTimeout(() => {
        setModalOpen(false);

        setPasswordRecoveryModalOpen(true);
      }, 300);
    }, [CustomSetModalAppear, setModalOpen, setPasswordRecoveryModalOpen]);

    const CanLogin = useMemo(
      () => !EmailInput || !PasswordInput,
      [EmailInput, PasswordInput]
    );

    return (
      <div className={styles.AuthModal}>
        <img
          className={styles.AuthModal__img}
          src={`${URL_PART}/Header/images/authRegPassrecovery_img.png`}
          alt="Человек показывает на доску"
        />

        <h2 className={styles.AuthModal__caption}>Авторизация</h2>

        <div className={styles.AuthModal__wrapper}>
          <div className={styles.AuthModal__inputs}>
            <div className={styles.AuthModal__inputWrapper}>
              <span className={styles.AuthModal__inputWrapper__span}>
                E-mail
              </span>

              <Input
                className={
                  TryLogin && !EmailInput
                    ? styles.AuthModal__inputWrapper__input__warning
                    : ""
                }
                type="email"
                placeholder="E-mail"
                value={EmailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className={styles.AuthModal__inputWrapper}>
              <span className={styles.AuthModal__inputWrapper__span}>
                Пароль
              </span>

              <Input
                className={
                  TryLogin && !PasswordInput
                    ? styles.AuthModal__inputWrapper__input__warning
                    : ""
                }
                type="password"
                placeholder="Пароль"
                value={PasswordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />

              <span
                onClick={onClickPasswordRecovery}
                className={styles.AuthModal__QuestionSpan}
              >
                Забыли пароль?
              </span>
            </div>
          </div>

          <div className={styles.AuthModal__buttons}>
            <Button
              className={styles.AuthModal__loginButton}
              text="Войти"
              type={ButtonTypes.RED}
              onClick={
                CanLogin
                  ? () => setTryLogin(true)
                  : () => redirectToAbsolutePath("/")
              }
            />

            <Button
              className={`${styles.AuthModal__loginButton} ${styles.AuthModal__loginTelegramButton}`}
              text="Войти через Telegram"
              type={ButtonTypes.BLUE}
              onClick={() => redirectToAbsolutePath("/")}
            />
          </div>

          <p className={styles.AuthModal__reg}>
            Нет аккаунта?{" "}
            <span className={styles.AuthModal__reg__span} onClick={onClickReg}>
              Зарегистрироваться
            </span>
          </p>
        </div>
      </div>
    );
  }
);
