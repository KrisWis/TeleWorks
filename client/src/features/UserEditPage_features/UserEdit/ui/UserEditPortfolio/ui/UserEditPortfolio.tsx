import {
  СhangeablePortfolioCase,
  СhangeablePortfolioCaseInterface,
} from "@/entities/UserEditPage_entities/СhangeablePortfolioCase";
import styles from "./UserEditPortfolio.module.scss";
import { memo, useCallback, useContext, useState } from "react";
import { UserEditPageContext } from "@/pages/UserEditPage";
import { UserEditTabsEnum } from "@/widgets/UserEditPage_widgets/UserEditTabs";
import { Modal } from "@/shared/ui-kit/Modal";
import { ModalTemplate } from "@/shared/ui-kit/ModalTemplate";
import { CaseLoadingModal } from "../../Modals/CaseLoadingModal";
import { portfolioExistedCases } from "../model/UserEditPortfolio_data";
import { LastDetailsModal } from "../../Modals/LastDetailsModal";
import { UseLoadedImage } from "@/shared/ui-kit/LoadImageBlock";
import { Flex } from "@/shared/ui-kit/Stack";
import ModalIconSVG from "@/shared/assets/icons/UserEditPage/UserEdit/ModalIconSVG.svg?react";
import { Link } from "react-router-dom";
import { UserEditPortfolioContext } from "../model/UserEditPortfolioContext/UserEditPortfolioContext";
import { closeModal } from "@/shared/utils/CloseModal";
import { ProjectWillNotSaveModal } from "../../Modals/ProjectWillNotSaveModal";
import { transitionDuration } from "@/app";

export const UserEditPortfolio: React.FC = memo((): React.JSX.Element => {
  // Добавление рефа для скроллинга
  const { refs } = useContext(UserEditPageContext);

  // Стейты для модалок
  const [CaseLoadedImage, setCaseLoadedImage] = UseLoadedImage();

  const [CaseLoadingModalIsOpen, setCaseLoadingModalIsOpen] =
    useState<boolean>(false);

  const [CaseLoadingModalAppear, setCaseLoadingModalAppear] =
    useState<boolean>(false);

  const [LastDetailsModalIsOpen, setLastDetailsModalIsOpen] =
    useState<boolean>(false);

  const [LastDetailsModalAppear, setLastDetailsModalAppear] =
    useState<boolean>(false);

  const [DraftIsSavedModalIsOpen, setDraftIsSavedModalIsOpen] =
    useState<boolean>(false);

  const [DraftIsSavedModalAppear, setDraftIsSavedModalAppear] =
    useState<boolean>(false);

  const [ProjectIsPublishedModalIsOpen, setProjectIsPublishedModalIsOpen] =
    useState<boolean>(false);

  const [ProjectIsPublishedModalAppear, setProjectIsPublishedModalAppear] =
    useState<boolean>(false);

  const [ProjectWillNotSaveModalIsOpen, setProjectWillNotSaveModalIsOpen] =
    useState<boolean>(false);

  const [ProjectWillNotSaveModalAppear, setProjectWillNotSaveModalAppear] =
    useState<boolean>(false);

  const [ExistedCases, setExistedCases] = useState<
    СhangeablePortfolioCaseInterface[]
  >(portfolioExistedCases);

  // Открытие модалки "Проект не будет сохранён"
  const openProjectWillNotSaveModal = useCallback(() => {
    closeModal(setLastDetailsModalAppear, setLastDetailsModalIsOpen);

    const ProjectWillNotSaveModalTimeout = setTimeout(() => {
      setProjectWillNotSaveModalIsOpen(true);
      clearTimeout(ProjectWillNotSaveModalTimeout);
    }, transitionDuration);
  }, []);

  return (
    <UserEditPortfolioContext.Provider
      value={{
        setCaseLoadingModalIsOpen: setCaseLoadingModalIsOpen,
        setCaseLoadingModalAppear: setCaseLoadingModalAppear,
        CaseLoadedImage: CaseLoadedImage,
        setCaseLoadedImage: setCaseLoadedImage,
        setLastDetailsModalIsOpen: setLastDetailsModalIsOpen,
        setLastDetailsModalAppear: setLastDetailsModalAppear,
        setDraftIsSavedModalIsOpen: setDraftIsSavedModalIsOpen,
        setDraftIsSavedModalAppear: setDraftIsSavedModalAppear,
        setProjectIsPublishedModalIsOpen: setProjectIsPublishedModalIsOpen,
        setProjectIsPublishedModalAppear: setProjectIsPublishedModalAppear,
        setProjectWillNotSaveModalAppear: setProjectWillNotSaveModalAppear,
        setProjectWillNotSaveModalIsOpen: setProjectWillNotSaveModalIsOpen,
      }}
    >
      <div
        ref={refs[UserEditTabsEnum.PORTFOLIO]}
        className={styles.userEditPortfolio}
      >
        {CaseLoadingModalIsOpen && (
          <Modal
            setModalIsOpen={setCaseLoadingModalIsOpen}
            CustomSetModalAppear={setCaseLoadingModalAppear}
            CustomModalAppear={CaseLoadingModalAppear}
          >
            <ModalTemplate
              className={styles.userEditPortfolio__CaseLoadingModal}
              CustomSetModalAppear={setCaseLoadingModalAppear}
              setModalOpen={setCaseLoadingModalIsOpen}
            >
              <CaseLoadingModal />
            </ModalTemplate>
          </Modal>
        )}

        {LastDetailsModalIsOpen && (
          <Modal
            setModalIsOpen={setLastDetailsModalIsOpen}
            CustomSetModalAppear={setLastDetailsModalAppear}
            CustomModalAppear={LastDetailsModalAppear}
            onClose={openProjectWillNotSaveModal}
          >
            <ModalTemplate
              className={styles.userEditPortfolio__LastDetailsModal}
              CustomSetModalAppear={setLastDetailsModalAppear}
              setModalOpen={setLastDetailsModalIsOpen}
              onClose={openProjectWillNotSaveModal}
            >
              <LastDetailsModal />
            </ModalTemplate>
          </Modal>
        )}

        {ProjectWillNotSaveModalIsOpen && (
          <Modal
            setModalIsOpen={setProjectWillNotSaveModalIsOpen}
            CustomSetModalAppear={setProjectWillNotSaveModalAppear}
            CustomModalAppear={ProjectWillNotSaveModalAppear}
          >
            <ModalTemplate
              className={styles.userEditPortfolio__ProjectWillNotSaveModal}
              CustomSetModalAppear={setProjectWillNotSaveModalAppear}
              setModalOpen={setProjectWillNotSaveModalIsOpen}
            >
              <ProjectWillNotSaveModal />
            </ModalTemplate>
          </Modal>
        )}

        {DraftIsSavedModalIsOpen && (
          <Modal
            setModalIsOpen={setDraftIsSavedModalIsOpen}
            CustomSetModalAppear={setDraftIsSavedModalAppear}
            CustomModalAppear={DraftIsSavedModalAppear}
          >
            <ModalTemplate
              className={styles.userEditPortfolio__isSavedModalWrapper}
              CustomSetModalAppear={setDraftIsSavedModalAppear}
              setModalOpen={setDraftIsSavedModalIsOpen}
              withoutHeader
            >
              <Flex
                className={styles.userEditPortfolio__isSavedModal}
                align="center"
                gap="30"
                max
                justify="center"
              >
                <ModalIconSVG />

                <Flex direction="column" gap="15">
                  <span
                    className={styles.userEditPortfolio__isSavedModal__caption}
                  >
                    Черновик сохранен!
                  </span>

                  <p className={styles.userEditPortfolio__isSavedModal__text}>
                    Ваш черновик сохранен для дальнейшего использования в
                    <Link to="/"> вашем профиле.</Link>
                  </p>
                </Flex>
              </Flex>
            </ModalTemplate>
          </Modal>
        )}

        {ProjectIsPublishedModalIsOpen && (
          <Modal
            setModalIsOpen={setProjectIsPublishedModalIsOpen}
            CustomSetModalAppear={setProjectIsPublishedModalAppear}
            CustomModalAppear={ProjectIsPublishedModalAppear}
          >
            <ModalTemplate
              className={styles.userEditPortfolio__isSavedModalWrapper}
              CustomSetModalAppear={setProjectIsPublishedModalAppear}
              setModalOpen={setProjectIsPublishedModalIsOpen}
              withoutHeader
            >
              <Flex
                className={styles.userEditPortfolio__isSavedModal}
                align="center"
                gap="30"
                max
                justify="center"
              >
                <ModalIconSVG />

                <Flex direction="column" gap="15">
                  <span
                    className={styles.userEditPortfolio__isSavedModal__caption}
                  >
                    Проект опубликован!
                  </span>

                  <p className={styles.userEditPortfolio__isSavedModal__text}>
                    Ваш кейс сохранен для дальнейшего использования в
                    <Link to="/"> вашем профиле.</Link>
                  </p>
                </Flex>
              </Flex>
            </ModalTemplate>
          </Modal>
        )}

        <div className={styles.userEditPortfolio__header}>
          <h4 className="UserEditPage__caption">Портфолио</h4>

          <span
            onClick={() => setCaseLoadingModalIsOpen(true)}
            className={styles.userEditPortfolio__addCase}
          >
            + Добавить кейс
          </span>
        </div>

        <div className={styles.userEditPortfolio__cases}>
          {!portfolioExistedCases.length ? (
            <div className={styles.userEditPortfolio__cases__empty}>
              <span className={styles.userEditPortfolio__cases__empty__text}>
                Проектов ещё нет!
              </span>
            </div>
          ) : (
            portfolioExistedCases.map((portfolioCase) => (
              <СhangeablePortfolioCase
                key={portfolioCase.index}
                setExistedCases={setExistedCases}
                Case={portfolioCase}
                ExistedCases={ExistedCases}
              />
            ))
          )}
        </div>
      </div>
    </UserEditPortfolioContext.Provider>
  );
});
