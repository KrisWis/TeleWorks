import { Button, ButtonTypes, Modal } from "@/shared";
import {
  ProjectInfoPackProps,
  ProjectInfoPackNames,
  ProjectInfoPackContent,
} from "../model/ProjectInfo_pack_types";
import styles from "./ProjectInfo_pack.module.scss";
import { memo, useState } from "react";

export const ProjectInfo_pack: React.FC<ProjectInfoPackProps> = memo(
  ({ packs }): React.JSX.Element => {
    const [ActivePack, setActivePack] = useState<ProjectInfoPackNames | string>(
      ProjectInfoPackNames.BASE
    );

    const ActivePackContent: ProjectInfoPackContent =
      packs[ActivePack as ProjectInfoPackNames];

    const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const openModal = (): void => {
      setModalIsOpen(true);
    };

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
            <div className={styles.projectInfo_pack__deadlineWrapper}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8.75V15H18.75M26.25 15C26.25 21.2133 21.2133 26.25 15 26.25C8.7868 26.25 3.75 21.2133 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2133 3.75 26.25 8.7868 26.25 15Z"
                  stroke="#FF5555"
                  strokeWidth="2.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.projectInfo_pack__info_text}>
                Срок выполнения:{" "}
                <span className={styles.projectInfo_pack__deadline}>
                  {ActivePackContent.deadline}
                </span>
              </span>
            </div>

            <div className={styles.projectInfo_pack__reviews}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.07639 16.2505C5.02532 15.841 4.99902 15.4239 4.99902 15.0005C4.99902 9.47764 9.47617 5.00049 14.999 5.00049C18.1248 5.00049 20.9155 6.43458 22.7493 8.68069M22.7493 8.68069V5.00049M22.7493 8.68069V8.7504L18.9993 8.75049M24.9216 13.7505C24.9728 14.16 24.999 14.5771 24.999 15.0005C24.999 20.5234 20.5219 25.0005 14.999 25.0005C12.0123 25.0005 9.33139 23.6911 7.49902 21.615M7.49902 21.615V21.2505H11.249M7.49902 21.615V25.0005"
                  stroke="#FF5555"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.projectInfo_pack__info_text}>
                {ActivePackContent.revisionsAmount} редакции
              </span>
            </div>
          </div>

          <div className={styles.projectInfo_pack__activeServices}>
            {ActivePackContent.activeServices.map((activeService: string) => (
              <div
                key={activeService}
                className={styles.projectInfo_pack__service}
              >
                <svg
                  width="26"
                  height="18"
                  viewBox="0 0 26 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.8228 0.529734L9.34109 13.6329L3.1772 7.64215C2.4503 6.93581 1.27196 6.93581 0.545062 7.64215C-0.181687 8.34863 -0.181687 9.49387 0.545062 10.2004L8.02502 17.4702C8.38847 17.8233 8.86478 18 9.34109 18C9.8174 18 10.2937 17.8233 10.6572 17.4702L25.4549 3.08808C26.1817 2.3816 26.1817 1.23636 25.4549 0.529878C24.728 -0.176602 23.5495 -0.176602 22.8228 0.529734Z"
                    fill="#FF5555"
                  />
                </svg>

                <span className={styles.projectInfo_pack__service_text}>
                  {activeService}
                </span>
              </div>
            ))}
          </div>

          {ActivePackContent.disactiveServices && (
            <div className={styles.projectInfo_pack__disactiveServices}>
              {ActivePackContent.disactiveServices.map(
                (disactiveService: string) => (
                  <div
                    key={disactiveService}
                    className={styles.projectInfo_pack__service}
                  >
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

                    <span className={styles.projectInfo_pack__service_text}>
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

          {ModalIsOpen && <Modal setModalIsOpen={setModalIsOpen}>asas</Modal>}
        </div>
      </div>
    );
  }
);
