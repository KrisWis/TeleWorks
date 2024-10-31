import styles from "./HeaderMenuDropdown.module.scss";
import { memo, useState } from "react";
import { URL_PART } from "@/shared/const/app";
import { Dropdown } from "@/shared/ui-kit/Dropdown";
import { URLIsAbsolute } from "@/shared/utils/URLIsAbsolute";
import { Link } from "react-router-dom";
import {
  username,
  headerMenuItems,
  userIsAuth,
} from "../../../model/Header__data";
import TelegramSVG from "@/shared/assets/icons/Global/TelegramSVG.svg?react";
import RedTickSVG from "@/shared/assets/icons/Global/RedTickSVG.svg?react";
import LeaveSVG from "@/shared/assets/icons/Header/Menu/LeaveSVG.svg?react";
import { HeaderMenuDropdownProps } from "../model/HeaderMenuDropdown_types";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import LoginSVG from "@/shared/assets/icons/Header/Items/LoginSVG.svg?react";

export const HeaderMenuDropdown: React.FC<HeaderMenuDropdownProps> = memo(
  ({
    DropdownIsOpen,
    setDropdownIsOpen,
    setLoginIsOpen,
  }): React.JSX.Element => {
    // Функционал кнопки "Выйти"
    const [IsAuth, setIsAuth] = useState<boolean>(userIsAuth);

    return (
      <>
        {!IsAuth ? (
          <div
            data-testid="HeaderMenuDropdown.login"
            onClick={() => setLoginIsOpen(true)}
          >
            <LoginSVG className={styles.header__userMenu__login} />
          </div>
        ) : (
          <Dropdown
            className={styles.header__userMenu}
            DropdownIsOpen={DropdownIsOpen}
            setDropdownIsOpen={setDropdownIsOpen}
            trigger={
              <span className={styles.header__userMenu__trigger}>
                {username}
              </span>
            }
            data-testid="HeaderMenuDropdown.menu"
          >
            <img
              className={styles.header__userMenu__img}
              src={`${URL_PART}/global/images/serviceExample_authorImg.png`}
              alt="Аватарка пользователя"
            />

            <span className={styles.header__userMenu__username}>
              {username}
            </span>

            <span className={styles.header__userMenu__email}>
              TeleWorks@mail.ru
            </span>

            <div
              className={`${styles.header__userMenu__telegramAttached} Page__SirineWrapper`}
            >
              <span className={styles.header__userMenu__telegramAttached__text}>
                Telegram аккаунт привязан
              </span>
              <TelegramSVG
                className={styles.header__userMenu__telegramAttached__svg}
              />
            </div>

            <div
              className={`${styles.header__userMenu__info} Page__SirineWrapper`}
            >
              <div className={styles.header__userMenu__info__item}>
                <span className={styles.header__userMenu__info__item__key}>
                  Организация
                </span>

                <span className={styles.header__userMenu__info__item__value}>
                  “ООО TeleWorks”
                </span>
              </div>

              <div className={styles.header__userMenu__info__item}>
                <span className={styles.header__userMenu__info__item__key}>
                  Статус
                </span>

                <span className={styles.header__userMenu__info__item__value}>
                  <RedTickSVG />
                  Подтверждено
                </span>
              </div>
            </div>

            <Button
              type={ButtonTypes.RED}
              className={styles.header__userMenu__balance}
            >
              <span className={styles.header__userMenu__balance__amount}>
                0
                <span
                  className={styles.header__userMenu__balance__amount__pennies}
                >
                  .00
                </span>
                ₽
              </span>

              <span className={styles.header__userMenu__balance__increase}>
                Пополнить
              </span>
            </Button>

            <div className={styles.header__userMenu__categoryWrapper}>
              {(
                Object.keys(headerMenuItems) as Array<
                  keyof typeof headerMenuItems
                >
              ).map((category) => (
                <div
                  key={category}
                  className={styles.header__userMenu__category}
                >
                  <span className={styles.header__userMenu__category__title}>
                    {category}
                  </span>

                  <div className={styles.header__userMenu__category__items}>
                    {headerMenuItems[category].map((item) => (
                      <div key={item.title}>
                        {URLIsAbsolute(item.link) ? (
                          <a
                            onClick={() => setDropdownIsOpen(false)}
                            href={item.link}
                            className={styles.header__userMenu__category__item}
                          >
                            <div
                              className={
                                styles.header__userMenu__category__item__icon
                              }
                            >
                              {item.icon}
                            </div>
                            <span
                              className={
                                styles.header__userMenu__category__item__title
                              }
                            >
                              {item.title}
                            </span>
                          </a>
                        ) : (
                          <Link
                            onClick={() => setDropdownIsOpen(false)}
                            className={styles.header__userMenu__category__item}
                            to={item.link}
                          >
                            <div
                              className={
                                styles.header__userMenu__category__item__icon
                              }
                            >
                              {item.icon}
                            </div>
                            <span
                              className={
                                styles.header__userMenu__category__item__title
                              }
                            >
                              {item.title}
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div
                data-testid="HeaderMenuDropdown.leave"
                onClick={() => setIsAuth(false)}
                className={`${styles.header__userMenu__category__item} ${styles.header__userMenu__category__item__leave}`}
              >
                <div className={styles.header__userMenu__category__item__icon}>
                  <LeaveSVG />
                </div>
                <span
                  className={
                    styles.header__userMenu__category__item__leave__text
                  }
                >
                  Выйти
                </span>
              </div>
            </div>
          </Dropdown>
        )}
      </>
    );
  }
);
