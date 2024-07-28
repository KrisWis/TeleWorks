import { Button, ButtonTypes, Modal, UseLocalStorageTypes } from "@/shared";
import {
  ProjectInfoPackProps,
  ProjectInfoPackNames,
  ProjectInfoPackContent,
  ProjectExtraService,
} from "../model/ProjectInfo_pack_types";
import styles from "./ProjectInfo_pack.module.scss";
import { memo, useCallback, useEffect, useState } from "react";
import { CheckoutOrder } from "../../CheckoutOrder/ui/CheckoutOrder";
import { Deadline } from "./Deadline/ui/Deadline";
import { Editions } from "./Editions/ui/Editions";
import { ActiveServices } from "./ActiveServices/ui/ActiveServices";
import {
  UseLocalStorageForCheckoutOrderModal,
  UseLocalStorageForCheckoutOrderModalReturn,
} from "../../CheckoutOrder/model/CheckoutOrderSlice/hooks/UseLocalStorageForCheckoutOrderModal/UseLocalStorageForCheckoutOrderModal";
import { useAppDispatch } from "@/app/AppStore";
import { checkoutOrderSliceActions } from "../../CheckoutOrder/model/CheckoutOrderSlice/CheckoutOrderSlice";

export const ProjectInfo_pack: React.FC<ProjectInfoPackProps> = memo(
  ({ packs }): React.JSX.Element => {
    const dispatch = useAppDispatch();

    const [ActivePack, setActivePack] = useState<ProjectInfoPackNames | string>(
      ProjectInfoPackNames.BASE
    );

    const ActivePackContent: ProjectInfoPackContent =
      packs[ActivePack as ProjectInfoPackNames];

    const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [ExtraServices, setExtraServices] = useState<ProjectExtraService[]>(
      []
    );

    const openModal = useCallback((): void => {
      setExtraServices([]);

      dispatch(checkoutOrderSliceActions.changeFinalPrice(0));

      setModalIsOpen(true);
    }, [dispatch]);

    useEffect(() => {
      const ModalLSItem = UseLocalStorageForCheckoutOrderModal(
        UseLocalStorageTypes.GET
      ) as UseLocalStorageForCheckoutOrderModalReturn;

      if (ModalLSItem.value) {
        openModal();
        setActivePack(ModalLSItem.activePack);
      }
    }, [openModal]);

    useEffect(() => {
      UseLocalStorageForCheckoutOrderModal(UseLocalStorageTypes.UPDATE, {
        activePack: ActivePack,
        value: ModalIsOpen,
      });
    }, [ModalIsOpen, ActivePack]);

    return (
      <div className={styles.projectInfo_pack}>
        <div className={styles.projectInfo_pack__tabs}>
          {Object.keys(packs).map((packName) => (
            <span
              key={packName}
              onClick={() => setActivePack(packName)}
              className={`${styles.projectInfo_pack__tab} ${ActivePack == packName ? styles.projectInfo_pack__tab__active : ""}`}
            >
              {packName}
            </span>
          ))}
        </div>

        <div className={styles.projectInfo_pack__wrapper}>
          <div className={styles.projectInfo_pack__header}>
            <span className={styles.projectInfo_pack__packName}>
              {ActivePack} пакет
            </span>

            <span className={styles.projectInfo_pack__price}>
              {ActivePackContent.price} ₽
            </span>
          </div>

          <p className={styles.projectInfo_pack__desc}>
            1 концепция + файлы PNG и JPG + исходники в формате PSD
          </p>

          <div className={styles.projectInfo_pack__info}>
            <Deadline deadline={ActivePackContent.deadline} />

            <Editions editionsAmount={ActivePackContent.editionsAmount} />
          </div>

          <ActiveServices activeServices={ActivePackContent.activeServices} />

          {ActivePackContent.disactiveServices && (
            <div className={styles.projectInfo_pack__disactiveServices}>
              {ActivePackContent.disactiveServices.map(
                (disactiveService: string) => (
                  <div key={disactiveService} className="ProjectPage__service">
                    <svg
                      width="26"
                      height="18"
                      viewBox="0 0 26 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M22.8228 0.529734L9.34109 13.6329L3.1772 7.64215C2.4503 6.93581 1.27196 6.93581 0.545062 7.64215C-0.181687 8.34863 -0.181687 9.49387 0.545062 10.2004L8.02502 17.4702C8.38847 17.8233 8.86478 18 9.34109 18C9.8174 18 10.2937 17.8233 10.6572 17.4702L25.4549 3.08808C26.1817 2.3816 26.1817 1.23636 25.4549 0.529878C24.728 -0.176602 23.5495 -0.176602 22.8228 0.529734Z"
                        fill="black"
                      />
                    </svg>

                    <span className="ProjectPage__service_text">
                      {disactiveService}
                    </span>
                  </div>
                )
              )}
            </div>
          )}

          <Button
            className={styles.projectInfo_pack__continue}
            text="Продолжить"
            type={ButtonTypes.RED}
            onClick={openModal}
          />

          <Button
            className={styles.projectInfo_pack__chat}
            text="Связаться с продавцом"
            type={ButtonTypes.BLACK}
          />

          {ModalIsOpen && (
            <Modal setModalIsOpen={setModalIsOpen}>
              <CheckoutOrder
                pack={{
                  packName: ActivePack as ProjectInfoPackNames,
                  ...ActivePackContent,
                }}
                ExtraServices={ExtraServices}
                setExtraServices={setExtraServices}
              />
            </Modal>
          )}
        </div>
      </div>
    );
  }
);
