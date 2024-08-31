import {
  ProjectInfoPackProps,
  ProjectInfoPackNames,
  ProjectInfoPackContent,
  ProjectExtraService,
} from "../model/ProjectInfo_pack_types";
import styles from "./ProjectInfo_pack.module.scss";
import { memo, useCallback, useState } from "react";
import { CheckoutOrder } from "../../CheckoutOrder/ui/CheckoutOrder";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { Modal } from "@/shared/ui-kit/Modal";
import DisactiveService from "@/shared/assets/icons/ProjectPage/ProjectInfo_pack/DisactiveService.svg?react";
import { ProjectDeadline } from "@/shared/ui-kit/ProjectDeadline";
import { ProjectEditions } from "@/shared/ui-kit/ProjectEditions/ui/ProjectEditions";
import { ProjectActiveServices } from "@/shared/ui-kit/ProjectActiveServices";

export const ProjectInfo_pack: React.FC<ProjectInfoPackProps> = memo(
  ({ packs }): React.JSX.Element => {
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

      setModalIsOpen(true);
    }, []);

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
            <ProjectDeadline deadline={ActivePackContent.deadline} />

            <ProjectEditions
              editionsAmount={ActivePackContent.editionsAmount}
            />
          </div>

          <ProjectActiveServices
            ProjectActiveServices={ActivePackContent.ProjectActiveServices}
          />

          {ActivePackContent.disProjectActiveServices && (
            <div className={styles.projectInfo_pack__disProjectActiveServices}>
              {ActivePackContent.disProjectActiveServices.map(
                (disactiveService: string) => (
                  <div key={disactiveService} className="ProjectPage__service">
                    <DisactiveService />

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
