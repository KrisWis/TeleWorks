import {
  СhangeablePortfolioCase,
  СhangeablePortfolioCaseInterface,
} from "@/entities/UserEditPage_entities/СhangeablePortfolioCase";
import styles from "./UserEditPortfolio.module.scss";
import { memo, useContext, useState } from "react";
import { UserEditPageContext } from "@/pages/UserEditPage";
import { UserEditTabsEnum } from "@/widgets/UserEditPage_widgets/UserEditTabs";
import { Modal } from "@/shared/ui-kit/Modal";
import { ModalTemplate } from "@/shared/ui-kit/ModalTemplate";
import { CaseLoadingModal } from "../../Modals/CaseLoadingModal";
import { portfolioExistedCases } from "../model/UserEditPortfolio_data";
import { LastDetailsModal } from "../../Modals/LastDetailsModal";
import { UseLoadedImage } from "@/shared/ui-kit/LoadImageBlock";

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

  const [ExistedCases, setExistedCases] = useState<
    СhangeablePortfolioCaseInterface[]
  >(portfolioExistedCases);

  return (
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
            <CaseLoadingModal
              setLastDetailsModalIsOpen={setLastDetailsModalIsOpen}
              setCaseLoadingModalIsOpen={setCaseLoadingModalIsOpen}
              setCaseLoadingModalAppear={setCaseLoadingModalAppear}
              CaseLoadedImage={CaseLoadedImage}
              setCaseLoadedImage={setCaseLoadedImage}
            />
          </ModalTemplate>
        </Modal>
      )}

      {LastDetailsModalIsOpen && (
        <Modal
          setModalIsOpen={setLastDetailsModalIsOpen}
          CustomSetModalAppear={setLastDetailsModalAppear}
          CustomModalAppear={LastDetailsModalAppear}
        >
          <ModalTemplate
            className={styles.userEditPortfolio__LastDetailsModal}
            CustomSetModalAppear={setLastDetailsModalAppear}
            setModalOpen={setLastDetailsModalIsOpen}
          >
            <LastDetailsModal
              setLastDetailsModalAppear={setLastDetailsModalAppear}
              setLastDetailsModalIsOpen={setLastDetailsModalIsOpen}
              setCaseLoadingModalIsOpen={setCaseLoadingModalIsOpen}
              CaseLoadedImage={CaseLoadedImage}
            />
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
  );
});
