import styles from "./Header.module.scss";
import Switch from "@mui/material/Switch";
import "./Header__switcher.scss";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { dropDownItems } from "../model/Header_data";
import { dropDownItem } from "../model/Header_types";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { Modal } from "@/shared/ui-kit/Modal";
import { AuthModal } from "@/features/Header_features/AuthModal";
import { ModalTemplate } from "@/shared/ui-kit/ModalTemplate";
import { RegModal } from "@/features/Header_features/RegModal";
import { PasswordRecoveryModal } from "@/features/Header_features/PasswordRecoveryModal";
import TriggerIcon from "@/shared/assets/icons/Header/NavbarDropdown/TriggerIcon.svg?react";

// Иконки дропдауна
import BuyAdsSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyAdsSVG.svg?react";
import BuyChannelSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyChannelSVG.svg?react";
import BuyServiceSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyServiceSVG.svg?react";
import GuarantorServicesSVG from "@/shared/assets/icons/Header/ServicesDropdown/GuarantorServicesSVG.svg?react";
import ProcurementAdsSVG from "@/shared/assets/icons/Header/ServicesDropdown/ProcurementAdsSVG.svg?react";
import TurnKeyChannelsSVG from "@/shared/assets/icons/Header/ServicesDropdown/TurnKeyChannelsSVG.svg?react";
import TurnKeyWebsiteSVG from "@/shared/assets/icons/Header/ServicesDropdown/TurnKeyWebsiteSVG.svg?react";
import { Dropdown } from "@/shared/ui-kit/Dropdown";

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

        <Dropdown
          DropdownIsOpen={DropdownServicesIsOpen}
          setDropdownIsOpen={setDropdownServicesIsOpen}
          trigger={<span className={styles.header__item__title}>Сервисы</span>}
          className={styles.header__services__dropdown}
        >
          <div className={styles.header__services__dropdown__category}>
            <span
              className={styles.header__services__dropdown__category__title}
            >
              Каталоги
            </span>

            <div
              className={styles.header__services__dropdown__category__wrapper}
            >
              <div
                className={styles.header__services__dropdown__category__value}
              >
                <BuyAdsSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Купить рекламу
                </a>
              </div>

              <div
                className={styles.header__services__dropdown__category__value}
              >
                <BuyChannelSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Купить канал
                </a>
              </div>

              <div
                className={styles.header__services__dropdown__category__value}
              >
                <BuyServiceSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Купить услугу
                </a>
              </div>
            </div>
          </div>

          <div className={styles.header__services__dropdown__category}>
            <span
              className={styles.header__services__dropdown__category__title}
            >
              Другое
            </span>

            <div
              className={styles.header__services__dropdown__category__wrapper}
            >
              <div
                className={styles.header__services__dropdown__category__value}
              >
                <TurnKeyChannelsSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Каналы под ключ
                </a>
              </div>

              <div
                className={styles.header__services__dropdown__category__value}
              >
                <ProcurementAdsSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Закуп рекламы
                </a>
              </div>

              <div
                className={styles.header__services__dropdown__category__value}
              >
                <GuarantorServicesSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Услуги гаранта
                </a>
              </div>

              <div
                className={styles.header__services__dropdown__category__value}
              >
                <TurnKeyWebsiteSVG
                  className={
                    styles.header__services__dropdown__category__value__svg
                  }
                />

                <a
                  href="#"
                  className={
                    styles.header__services__dropdown__category__value__text
                  }
                >
                  Сайт под ключ
                </a>
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
      <div className={styles.header__items}>
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

        <div className={styles.header__item__navbar}>
          <Dropdown
            DropdownIsOpen={DropdownMenuIsOpen}
            setDropdownIsOpen={setDropdownMenuIsOpen}
            withArrow={false}
            trigger={<TriggerIcon />}
            className={styles.header__menu__dropdown}
          >
            {dropDownItems.map((item: dropDownItem) => (
              <div
                key={item.link + item.text}
                className={styles.header__item__navbar_dropdown_item}
              >
                <div
                  onClick={() => redirectToAbsolutePath(item.link)}
                  className={styles.header__item__navbar_dropdown_link}
                >
                  {item.text}
                </div>
              </div>
            ))}
            <div className={styles.header__item__navbar_dropdown_item}>
              <Link
                className={styles.header__item__navbar_dropdown_leave}
                to="/"
              >
                Выйти
              </Link>
            </div>
          </Dropdown>
        </div>

        <Button
          type={ButtonTypes.RED}
          className={styles.header__item__login}
          text="Войти"
          onClick={() => setLoginIsOpen(true)}
        />

        <Button
          className={styles.header__item__reg}
          text="Регистрация"
          type={ButtonTypes.GRAY}
          onClick={() => setRegIsOpen(true)}
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
