import styles from "./Header.module.scss";
import Switch from "@mui/material/Switch";
import "./Header__switcher.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { Button } from "@/shared";
import { ButtonTypes } from "@/shared/ui-kit/Button/model/Button__types";
import { useState } from "react";

export const Header: React.FC = (): React.JSX.Element => {
  const [headerSwitcherChoice, setHeaderSwitcherChoice] =
    useState<string>("Исполнитель");

  return (
    <header className={styles.header}>
      <h1 className={styles.header__caption} data-testid="headerCaption">
        Tele<span className={styles.header__caption__span}>Works</span>
      </h1>
      <div className={styles.header__items}>
        <div className={styles.header__item__switcher}>
          <span
            className={`${styles.header__item__title} ${headerSwitcherChoice == "Заказчик" && styles.header__item__title__active}`}
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
            className={`${styles.header__item__title} ${headerSwitcherChoice == "Исполнитель" && styles.header__item__title__active}`}
          >
            Исполнитель
          </span>
        </div>

        <Link
          data-testid="headerLink"
          to="/"
          className={`${styles.header__item__title} ${styles.header__item__link}`}
        >
          Сервисы
        </Link>

        <div className={styles.header__item__navbar}>
          <Dropdown
            data-testid="headerDropDown"
            className={styles.header__item__navbar_dropdown}
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <svg
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
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Мой аккаунт TeleWorks
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Мои каналы
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Избранное
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Мои шаблоны
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Заявки
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Мои услуги
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Мой аккаунт TeleWorks
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                История транзакций
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Баланс
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              className={styles.header__item__navbar_dropdown_item}
            >
              <Link
                className={styles.header__item__navbar_dropdown_link}
                to="/"
              >
                Рефералы
              </Link>
            </Dropdown.Item>
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
          to="/"
          text="Войти"
        />

        <Button
          to="/"
          className={styles.header__item__reg}
          text="Регистрация"
          type={ButtonTypes.GRAY}
        />
      </div>
    </header>
  );
};
