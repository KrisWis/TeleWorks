import { CreateOrderTechnicalInformationLoadedFileProps } from "../../../model/CreateOrderTechnicalInformationContainer_types";
import styles from "./CreateOrderTechnicalInformationLoadedFile.module.scss";
import { memo, useRef } from "react";
import ChangeFileSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/ChangeFileSVG.svg?react";
import DeleteFileSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/DeleteFileSVG.svg?react";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const CreateOrderTechnicalInformationLoadedFile: React.FC<CreateOrderTechnicalInformationLoadedFileProps> =
  memo(
    ({
      loadedFile,
      FormInputFiles,
      setFormInputFiles,
      setFormInputFileProgress,
    }): React.JSX.Element => {
      // Функционал изменения файла
      const ChangeInputRef = useRef<HTMLInputElement>(null);

      const FileOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const UserInputFile = e.target.files;

        if (UserInputFile && UserInputFile.length) {
          if (
            !FormInputFiles.find(
              (file) => file.FileName == UserInputFile[0].name
            )
          ) {
            const fileReader = new FileReader();

            // Индикатор загрузки при изменении файла
            fileReader.onprogress = (e: ProgressEvent<FileReader>) => {
              if (e.lengthComputable) {
                const percentLoaded = Math.round((e.loaded / e.total) * 100);
                setFormInputFileProgress(percentLoaded);
              }
            };

            const FormInputFilesCopy = FormInputFiles.slice();

            const FormInputFilesCopyForLoading = FormInputFiles.slice();

            const PastFileIndex = FormInputFilesCopy.findIndex(
              (file) => loadedFile.FileName === file.FileName
            );

            FormInputFilesCopyForLoading[PastFileIndex] = {
              FileData: "",
              FileName: "",
              FileSize: 0,
              FileType: "",
            };

            setFormInputFiles(FormInputFilesCopyForLoading);

            FormInputFilesCopy[PastFileIndex].FileName = UserInputFile[0].name;
            FormInputFilesCopy[PastFileIndex].FileSize = UserInputFile[0].size;
            FormInputFilesCopy[PastFileIndex].FileType = UserInputFile[0].type;

            fileReader.onload = function () {
              FormInputFilesCopy[PastFileIndex].FileData =
                fileReader.result as string;

              setFormInputFiles(FormInputFilesCopy);
            };
            fileReader.readAsDataURL(UserInputFile[0]);
          }
        }
      };

      // Функционал удаления файла
      const FileOnDelete = (): void => {
        const FormInputFilesCopy = FormInputFiles.slice();

        const PastFileIndex = FormInputFilesCopy.findIndex(
          (file) => loadedFile.FileName === file.FileName
        );

        FormInputFilesCopy.splice(PastFileIndex, 1);

        setFormInputFiles(FormInputFilesCopy);
      };

      const loadedFileIsImage: boolean =
        loadedFile.FileType.split("/")[0] == "image";

      const loadedFileIsVideo: boolean =
        loadedFile.FileType.split("/")[0] == "video";

      return (
        <div className={styles.CreateOrderTechnicalInformationLoadedFile}>
          <div
            className={styles.CreateOrderTechnicalInformationLoadedFile__info}
          >
            {loadedFileIsImage ? (
              <img
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__img
                }
                src={loadedFile.FileData}
                alt={loadedFile.FileName}
              />
            ) : loadedFileIsVideo ? (
              <video
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__video
                }
                src={loadedFile.FileData}
                controls
              ></video>
            ) : (
              <img
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__iconFile
                }
                src={`${URL_PART}/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/file.png`}
                alt={loadedFile.FileName}
              />
            )}

            <div
              className={
                styles.CreateOrderTechnicalInformationLoadedFile__infoWrapper
              }
            >
              <span
                className={`CreateOrderPage__caption ${styles.CreateOrderTechnicalInformationLoadedFile__caption}`}
              >
                {loadedFile.FileName}
              </span>

              <span
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__size
                }
              >
                {(loadedFile.FileSize / 1048576).toFixed(1)} Мб
              </span>
            </div>
          </div>

          <div
            className={
              styles.CreateOrderTechnicalInformationLoadedFile__buttons
            }
          >
            <div
              className={
                styles.CreateOrderTechnicalInformationLoadedFile__changeWrapper
              }
            >
              <input
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__changeWrapper__input
                }
                type="file"
                name="createOrderTechnicalInformationContainer_changeFiles_input"
                ref={ChangeInputRef}
                onChange={FileOnChange}
              />

              <ChangeFileSVG
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__change
                }
              />
            </div>

            <div
              className={
                styles.CreateOrderTechnicalInformationLoadedFile__deleteWrapper
              }
              onClick={FileOnDelete}
            >
              <DeleteFileSVG
                className={
                  styles.CreateOrderTechnicalInformationLoadedFile__delete
                }
              />
            </div>
          </div>
        </div>
      );
    }
  );
