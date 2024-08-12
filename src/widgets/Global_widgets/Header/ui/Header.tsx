import styles from "./Header.module.scss";
import Switch from "@mui/material/Switch";
import "./Header__switcher.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
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
import SelectDropdownIndicatorRedSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorRedSVG.svg?react";

// Иконки дропдауна
import BuyAdsSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyAdsSVG.svg?react";
import BuyChannelSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyChannelSVG.svg?react";
import BuyServiceSVG from "@/shared/assets/icons/Header/ServicesDropdown/BuyServiceSVG.svg?react";
import GuarantorServicesSVG from "@/shared/assets/icons/Header/ServicesDropdown/GuarantorServicesSVG.svg?react";
import ProcurementAdsSVG from "@/shared/assets/icons/Header/ServicesDropdown/ProcurementAdsSVG.svg?react";
import TurnKeyChannelsSVG from "@/shared/assets/icons/Header/ServicesDropdown/TurnKeyChannelsSVG.svg?react";
import TurnKeyWebsiteSVG from "@/shared/assets/icons/Header/ServicesDropdown/TurnKeyWebsiteSVG.svg?react";

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

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__caption} data-testid="headerCaption">
          Tele<span className={styles.header__caption__span}>Works</span>
        </h1>

        <div
          className={`${styles.header__services} ${DropdownServicesIsOpen ? styles.header__services__active : ""}`}
          onClick={() => setDropdownServicesIsOpen(!DropdownServicesIsOpen)}
        >
          <div className={styles.header__services__dropdownSetActive}>
            <span className={styles.header__item__title}>Сервисы</span>
            <SelectDropdownIndicatorRedSVG
              className={styles.header__services__dropdownSVG}
            />
          </div>

          <div
            className={`${styles.header__services__dropdown} Page__BoxShadowWrapper`}
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
          </div>
        </div>
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
            className={styles.header__item__navbar_dropdown}
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <svg
                data-testid="header-flowbite-dropdown-trigger"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_16)">
                  <path
                    d="M28.125 26.25H1.87501C0.839435 26.25 0 25.4105 0 24.375C0 23.3395 0.839435 22.5 1.87501 22.5H28.1251C29.1606 22.5 30.0001 23.3395 30.0001 24.375C30 25.4105 29.1606 26.25 28.125 26.25Z"
                    fill="black"
                  />
                  <path
                    d="M28.125 16.875H1.87501C0.839435 16.875 0 16.0355 0 15C0 13.9645 0.839435 13.125 1.87501 13.125H28.1251C29.1606 13.125 30.0001 13.9644 30.0001 15C30.0001 16.0356 29.1606 16.875 28.125 16.875Z"
                    fill="black"
                  />
                  <path
                    d="M28.125 7.50002H1.87501C0.839435 7.50002 0 6.66059 0 5.62501C0 4.58944 0.839435 3.75 1.87501 3.75H28.1251C29.1606 3.75 30.0001 4.58944 30.0001 5.62501C30.0001 6.66059 29.1606 7.50002 28.125 7.50002Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_16">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            )}
          >
            {dropDownItems.map((item: dropDownItem) => (
              <Dropdown.Item
                key={item.link + item.text}
                className={styles.header__item__navbar_dropdown_item}
              >
                <div
                  onClick={() => redirectToAbsolutePath(item.link)}
                  className={styles.header__item__navbar_dropdown_link}
                >
                  {item.text}
                </div>
              </Dropdown.Item>
            ))}
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_leave}
                to="/"
              >
                Выйти
              </Link>
            </Dropdown.Item>
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
