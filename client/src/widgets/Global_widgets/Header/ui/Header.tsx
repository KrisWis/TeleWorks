import styles from "./Header.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { Modal } from "@/shared/lib/Modal";
import { ModalTemplate } from "@/shared/ui-kit/ModalTemplate";
import { HeaderProps, HeaderViews } from "../model/Header_props";
import { Flex } from "@/shared/lib/Stack";
import { Input } from "@/shared/ui-kit/Input";
import { transitionDuration } from "@/shared/const/global";
import CreatePostSVG from "@/shared/assets/icons/Header/Items/CreatePostSVG.svg?react";
import { AppRoutes } from "@/shared/const/app";
import { AuthModal } from "./AuthModal/ui/AuthModal";
import { HeaderMenuDropdown } from "./HeaderMenuDropdown/ui/HeaderMenuDropdown";
import { HeaderServicesDropdown } from "./HeaderServicesDropdown/ui/HeaderServicesDropdown";
import { RegModal } from "./RegModal/ui/RegModal";
import { PasswordRecoveryModal } from "./PasswordRecoveryModal/ui/PasswordRecoveryModal";

export const Header: React.FC<HeaderProps> = ({ view }): React.JSX.Element => {
  // Стейты для функциональных элементов в хедере
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
    }, transitionDuration);
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

  // Стейт для инпута "Поиск канала"
  const [ChannelSearchInputValue, setChannelSearchInputValue] =
    useState<string>("");

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.header__wrapper}>
          <div
            className={`${styles.header__wrapper__logo} 
            ${view == HeaderViews.BLOG ? styles.header__wrapper__logo__blog : ""}
            ${view == HeaderViews.TELEGRAM_CHANNEL_STATS ? styles.header__wrapper__logo__stats : ""}`}
          >
            <h1 className={styles.header__caption} data-testid="headerCaption">
              Tele<span className={styles.header__caption__span}>Works</span>
            </h1>

            {view && (
              <Flex
                className={`${view != HeaderViews.TELEGRAM_CHANNEL_STATS ? styles.header__service : ""}
                ${view == HeaderViews.TELEGRAM_CHANNEL_STATS ? styles.header__stats : ""} 
                ${view == HeaderViews.KIND_DEEDS ? styles.header__service__kindDeeds : ""} 
                Page__SirineWrapper`}
                direction={"row"}
                justify="center"
                align="center"
              >
                {view}
              </Flex>
            )}
          </div>

          <div className={styles.header__servicesWrapper}>
            <HeaderServicesDropdown
              DropdownIsOpen={DropdownServicesIsOpen}
              setDropdownIsOpen={setDropdownServicesIsOpen}
            ></HeaderServicesDropdown>
          </div>
        </div>
        <div
          className={`${styles.header__items} 
          ${view == HeaderViews.BLOG ? styles.header__items__blog : ""}`}
        >
          {view == HeaderViews.TELEGRAM_CHANNEL_STATS && (
            <div className={styles.header__channelSearchInputWrapper}>
              <Input
                className={styles.header__channelSearchInput}
                type={"text"}
                placeholder="Поиск канала..."
                value={ChannelSearchInputValue}
                onChange={(e) => setChannelSearchInputValue(e.target.value)}
              />
            </div>
          )}

          {view == HeaderViews.BLOG && (
            <Button
              type={ButtonTypes.RED}
              className={styles.header__createPost}
              to={AppRoutes.BLOG_CREATE()}
            >
              <CreatePostSVG />
              Написать
            </Button>
          )}

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
      </div>

      {view == HeaderViews.TELEGRAM_CHANNEL_STATS && (
        <div
          className={`${styles.header__channelSearchInputWrapper} ${styles.header__channelSearchInputWrapper__adaptive}`}
        >
          <Input
            className={`${styles.header__channelSearchInput} ${styles.header__channelSearchInput__adaptive}`}
            type={"text"}
            placeholder="Поиск канала..."
            value={ChannelSearchInputValue}
            onChange={(e) => setChannelSearchInputValue(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};
