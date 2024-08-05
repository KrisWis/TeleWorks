import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./AuthModal.module.scss";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { AuthModalProps } from "../model/AuthModal_types";
import { Input } from "@/shared/ui-kit/Input";
import { UseTryAction } from "@/shared/utils/hooks/useTryAction";

export const AuthModal: React.FC<AuthModalProps> = memo(
  ({
    setModalOpen,
    setRegModalOpen,
    CustomSetModalAppear,
    setPasswordRecoveryModalOpen,
  }): React.JSX.Element => {
    const [EmailInput, setEmailInput] = useState<string>("");

    const [PasswordInput, setPasswordInput] = useState<string>("");

    const [TryLogin, setTryLogin] = UseTryAction();

    const RegTimeOutRef = useRef<NodeJS.Timeout>();

    const PasswordRecoveryTimeOutRef = useRef<NodeJS.Timeout>();

    const onClickReg = useCallback((): void => {
      CustomSetModalAppear(false);

      RegTimeOutRef.current = setTimeout(() => {
        setModalOpen(false);

        setRegModalOpen(true);
      }, 300);
    }, [CustomSetModalAppear, setModalOpen, setRegModalOpen]);

    const onClickPasswordRecovery = useCallback((): void => {
      CustomSetModalAppear(false);

      PasswordRecoveryTimeOutRef.current = setTimeout(() => {
        setModalOpen(false);

        setPasswordRecoveryModalOpen(true);
      }, 300);
    }, [CustomSetModalAppear, setModalOpen, setPasswordRecoveryModalOpen]);

    const CanLogin = useMemo(
      () => !EmailInput || !PasswordInput,
      [EmailInput, PasswordInput]
    );

    useEffect(() => {
      return () => {
        clearTimeout(RegTimeOutRef.current);
        clearTimeout(PasswordRecoveryTimeOutRef.current);
      };
    }, []);

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
                type="email"
                placeholder="E-mail"
                value={EmailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                isWarn={TryLogin && !EmailInput}
              />
            </div>

            <div className={styles.AuthModal__inputWrapper}>
              <span className={styles.AuthModal__inputWrapper__span}>
                Пароль
              </span>

              <Input
                type="password"
                placeholder="Пароль"
                value={PasswordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                isWarn={TryLogin && !PasswordInput}
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
