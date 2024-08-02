import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import styles from "./RegModal.module.scss";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import {
  RegModalCheckBoxes,
  RegModalCheckBoxesItems,
  RegModalProps,
} from "../model/RegModal_types";
import { Input } from "@/shared/ui-kit/Input";
import { CheckBoxBlock } from "@/shared/ui-kit/CheckBoxBlock";

export const RegModal: React.FC<RegModalProps> = memo(
  ({
    setModalOpen,
    setLoginModalOpen,
    CustomSetModalAppear,
  }): React.JSX.Element => {
    const [EmailInput, setEmailInput] = useState<string>("");

    const [PasswordInput, setPasswordInput] = useState<string>("");

    const [TelInput, setTelInput] = useState<string>("");

    const [TryLogin, setTryLogin] = useState<boolean>(false);

    const [ActiveCheckboxes, setActiveCheckboxes] = useState<
      RegModalCheckBoxes[]
    >([]);

    const onClickLogin = useCallback((): void => {
      CustomSetModalAppear(false);

      setTimeout(() => {
        setModalOpen(false);

        setLoginModalOpen(true);
      }, 300);
    }, [CustomSetModalAppear, setLoginModalOpen, setModalOpen]);

    const changeActiveCheckboxes = useCallback(
      (checkBox: RegModalCheckBoxes): void => {
        if (!ActiveCheckboxes.includes(checkBox)) {
          setActiveCheckboxes([...ActiveCheckboxes, checkBox]);
        } else {
          setActiveCheckboxes(
            ActiveCheckboxes.filter((checkBoxItem) => checkBoxItem !== checkBox)
          );
        }
      },
      [ActiveCheckboxes]
    );

    const AllCheckBoxesIsSelected = useMemo(
      () =>
        ActiveCheckboxes.length == RegModalCheckBoxesItems.length &&
        ActiveCheckboxes.every(function (element, index) {
          return element === RegModalCheckBoxesItems[index];
        }),
      [ActiveCheckboxes]
    );

    const CanReg = useMemo(
      () =>
        !EmailInput || !PasswordInput || !TelInput || !AllCheckBoxesIsSelected,

      [AllCheckBoxesIsSelected, EmailInput, PasswordInput, TelInput]
    );

    useEffect(() => {
      if (TryLogin) {
        setTimeout(() => {
          setTryLogin(false);
        }, 3000);
      }
    }, [TryLogin]);

    return (
      <div className={styles.RegModal}>
        <img
          className={styles.RegModal__img}
          src={`${URL_PART}/Header/images/authRegPassrecovery_img.png`}
          alt="Человек показывает на доску"
        />

        <h2 className={styles.RegModal__caption}>Регистрация</h2>

        <div className={styles.RegModal__wrapper}>
          <div className={styles.RegModal__inputs}>
            <div className={styles.RegModal__inputWrapper}>
              <span className={styles.RegModal__inputWrapper__span}>
                E-mail
              </span>

              <Input
                className={
                  TryLogin && !EmailInput
                    ? styles.RegModal__inputWrapper__input__warning
                    : ""
                }
                type="email"
                placeholder="E-mail"
                value={EmailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className={styles.RegModal__inputWrapper}>
              <span className={styles.RegModal__inputWrapper__span}>
                Номер телефона
              </span>

              <Input
                className={
                  TryLogin && !TelInput
                    ? styles.RegModal__inputWrapper__input__warning
                    : ""
                }
                type="tel"
                placeholder="+7 987 242 23 23"
                value={TelInput}
                onChange={(e) => setTelInput(e.target.value)}
              />
            </div>

            <div className={styles.RegModal__inputWrapper}>
              <span className={styles.RegModal__inputWrapper__span}>
                Пароль
              </span>

              <Input
                className={
                  TryLogin && !PasswordInput
                    ? styles.RegModal__inputWrapper__input__warning
                    : ""
                }
                type="password"
                placeholder="Пароль"
                value={PasswordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.RegModal__checkboxes}>
            <div className={styles.RegModal__checkbox}>
              <CheckBoxBlock
                isActive={ActiveCheckboxes.includes(RegModalCheckBoxes.MAILING)}
                isWarn={
                  TryLogin &&
                  !ActiveCheckboxes.includes(RegModalCheckBoxes.MAILING)
                }
                onClick={() =>
                  changeActiveCheckboxes(RegModalCheckBoxes.MAILING)
                }
              />

              <p className={styles.RegModal__checkbox__text}>
                Я хочу получать Email-рассылку от TeleWorks
              </p>
            </div>

            <div className={styles.RegModal__checkbox}>
              <CheckBoxBlock
                isActive={ActiveCheckboxes.includes(
                  RegModalCheckBoxes.AGREEMENT
                )}
                isWarn={
                  TryLogin &&
                  !ActiveCheckboxes.includes(RegModalCheckBoxes.AGREEMENT)
                }
                onClick={() =>
                  changeActiveCheckboxes(RegModalCheckBoxes.AGREEMENT)
                }
              />

              <p className={styles.RegModal__text}>
                Даю свое согласие на обработку персональных данных{" "}
                <a href="#" className="Page__RedLink">
                  с политикой обработки персональных данных
                </a>{" "}
                и{" "}
                <a href="#" className="Page__RedLink">
                  пользовательским соглашением ознакомлен
                </a>
              </p>
            </div>
          </div>

          <p className={`${styles.RegModal__text} ${styles.RegModal__agree}`}>
            Нажимая на кнопку, вы соглашаетесь с{" "}
            <a href="#" className="Page__RedLink">
              Правилами пользования Сервиса
            </a>
          </p>

          <div className={styles.RegModal__buttons}>
            <Button
              className={styles.RegModal__loginButton}
              text="Зарегистрироваться"
              type={ButtonTypes.RED}
              onClick={
                CanReg
                  ? () => setTryLogin(true)
                  : () => redirectToAbsolutePath("/")
              }
            />

            <Button
              className={`${styles.RegModal__loginButton} ${styles.RegModal__loginButtonTelegram}`}
              text="Войти через Telegram"
              type={ButtonTypes.BLUE}
              onClick={() => redirectToAbsolutePath("/")}
            />
          </div>

          <p className={styles.RegModal__login}>
            Уже есть аккаунт?{" "}
            <span
              className={styles.RegModal__login__span}
              onClick={onClickLogin}
            >
              Войти
            </span>
          </p>
        </div>
      </div>
    );
  }
);
