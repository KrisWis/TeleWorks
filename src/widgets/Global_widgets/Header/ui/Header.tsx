import styles from "./Header.module.scss";
import Switch from "@mui/material/Switch";
import "./Header__switcher.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { Modal } from "@/shared/ui-kit/Modal";
import { AuthModal } from "@/features/Header_features/AuthModal";
import { ModalTemplate } from "@/shared/ui-kit/ModalTemplate";
import { RegModal } from "@/features/Header_features/RegModal";
import { PasswordRecoveryModal } from "@/features/Header_features/PasswordRecoveryModal";
import LoginSVG from "@/shared/assets/icons/Header/Items/LoginSVG.svg?react";
import { HeaderServicesDropdown } from "./HeaderServicesDropdown";
import { HeaderMenuDropdown } from "./HeaderMenuDropdown";

export const Header: React.FC = (): React.JSX.Element => {
  // Стейты для функциональных элементов в хедере
  const [headerSwitcherChoice, setHeaderSwitcherChoice] =
    useState<string>("Исполнитель");

  const [LoginIsOpen, setLoginIsOpen] = useState<boolean>(false);

  const [LoginModalAppear, setLoginModalAppear] = useState<boolean>(false);

  const [RegIsOpen, setRegIsOpen] = useState<boolean>(false);

  const [RegModalAppear, setRegModalAppear] = useState<boolean>(false);

  const [PasswordRecoveryIsOpen, setPasswordRecoveryIsOpen] =
    useState<boolean>(false);

  const [PasswordRecoveryModalAppear, setPasswordRecoveryModalAppear] =
    useState<boolean>(false);

  const PasswordRecoveryTimeOutRef = useRef<NodeJS.Timeout>();

  const RedirectToLoginModal = useCallback((): void => {
    setPasswordRecoveryModalAppear(false);

    PasswordRecoveryTimeOutRef.current = setTimeout(() => {
      setPasswordRecoveryIsOpen(false);

      setLoginIsOpen(true);
    }, 300);
  }, []);

  // Очищение таймаута
  useEffect(() => {
    return () => {
      clearTimeout(PasswordRecoveryTimeOutRef.current);
    };
  }, []);

  // Открытия дропдауна "Сервисы"
  const [DropdownServicesIsOpen, setDropdownServicesIsOpen] =
    useState<boolean>(false);

  // Открытия дропдауна "Меню"
  const [DropdownMenuIsOpen, setDropdownMenuIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__caption} data-testid="headerCaption">
          Tele<span className={styles.header__caption__span}>Works</span>
        </h1>

        <HeaderServicesDropdown
          DropdownIsOpen={DropdownServicesIsOpen}
          setDropdownIsOpen={setDropdownServicesIsOpen}
        ></HeaderServicesDropdown>
      </div>
      <div className={styles.header__items}>
        <div className={styles.header__item__switcherWrapper}>
          <div className={styles.header__item__switcher}>
            <span
              data-testid="switcher__customer"
              data-disabled={headerSwitcherChoice == "Заказчик"}
              className={`${styles.header__item__title} ${headerSwitcherChoice == "Заказчик" ? styles.header__item__title__active : ""}`}
            >
              Заказчик
            </span>
          </div>

          <Switch
            onClick={() =>
              headerSwitcherChoice == "Исполнитель"
                ? setHeaderSwitcherChoice("Заказчик")
                : setHeaderSwitcherChoice("Исполнитель")
            }
            data-testid="headerSwitcher"
            className="header__item__switcherComponent"
            {...{
              inputProps: { "aria-label": 'Свитчер "Заказчик/Исполнитель"' },
            }}
            defaultChecked
          />

          <div className={styles.header__item__switcher}>
            <span
              data-disabled={headerSwitcherChoice == "Исполнитель"}
              data-testid="switcher__performer"
              className={`${styles.header__item__title} ${headerSwitcherChoice == "Исполнитель" ? styles.header__item__title__active : ""}`}
            >
              Исполнитель
            </span>
          </div>
        </div>

        <Button type={ButtonTypes.RED} className={styles.header__item__balance}>
          <span className={styles.header__item__balance__amount}>
            0
            <span className={styles.header__item__balance__amount__pennies}>
              .00
            </span>
            ₽
          </span>

          <span className={styles.header__item__balance__increase}>
            Пополнить
          </span>
        </Button>

        <div onClick={() => setRegIsOpen(true)}>
          <LoginSVG className={styles.header__item__login} />
        </div>

        <HeaderMenuDropdown
          DropdownIsOpen={DropdownMenuIsOpen}
          setDropdownIsOpen={setDropdownMenuIsOpen}
          setLoginIsOpen={setLoginIsOpen}
        />

        {LoginIsOpen && (
          <Modal
            setModalIsOpen={setLoginIsOpen}
            CustomSetModalAppear={setLoginModalAppear}
            CustomModalAppear={LoginModalAppear}
            className={styles.header__modal}
          >
            <ModalTemplate
              CustomSetModalAppear={setLoginModalAppear}
              setModalOpen={setLoginIsOpen}
            >
              <AuthModal
                setRegModalOpen={setRegIsOpen}
                setModalOpen={setLoginIsOpen}
                CustomSetModalAppear={setLoginModalAppear}
                setPasswordRecoveryModalOpen={setPasswordRecoveryIsOpen}
              />
            </ModalTemplate>
          </Modal>
        )}

        {RegIsOpen && (
          <Modal
            setModalIsOpen={setRegIsOpen}
            CustomSetModalAppear={setRegModalAppear}
            CustomModalAppear={RegModalAppear}
            className={styles.header__modal}
          >
            <ModalTemplate
              CustomSetModalAppear={setRegModalAppear}
              setModalOpen={setRegIsOpen}
            >
              <RegModal
                setLoginModalOpen={setLoginIsOpen}
                setModalOpen={setRegIsOpen}
                CustomSetModalAppear={setRegModalAppear}
              />
            </ModalTemplate>
          </Modal>
        )}

        {PasswordRecoveryIsOpen && (
          <Modal
            setModalIsOpen={setPasswordRecoveryIsOpen}
            CustomSetModalAppear={setPasswordRecoveryModalAppear}
            CustomModalAppear={PasswordRecoveryModalAppear}
            className={styles.header__modal}
          >
            <ModalTemplate
              className={styles.header__modal__recovery}
              CustomSetModalAppear={setPasswordRecoveryModalAppear}
              setModalOpen={setPasswordRecoveryIsOpen}
              redirectToBack={RedirectToLoginModal}
            >
              <PasswordRecoveryModal />
            </ModalTemplate>
          </Modal>
        )}
      </div>
    </header>
  );
};
