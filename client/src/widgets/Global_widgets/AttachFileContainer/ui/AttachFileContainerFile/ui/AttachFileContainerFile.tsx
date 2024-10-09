import { AttachFileContainerFileProps } from "../model/AttachFileContainerFile_types";
import styles from "./AttachFileContainerFile.module.scss";
import { memo, useCallback, useRef } from "react";
import ChangeFileSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/ChangeFileSVG.svg?react";
import DeleteFileSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationLoadedFile/DeleteFileSVG.svg?react";
import { PortNow, URL_PART } from "@/app";

export const AttachFileContainerFile: React.FC<AttachFileContainerFileProps> =
  memo(
    ({
      loadedFile,
      InputFiles,
      setInputFiles,
      setInputFileProgress,
      fileView = "big",
    }): React.JSX.Element => {
      // Функционал изменения файла
      const ChangeInputRef = useRef<HTMLInputElement>(null);

      const FileOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
          const UserInputFile = e.target.files;

          if (UserInputFile && UserInputFile.length) {
            if (
              !InputFiles.find((file) => file.FileName == UserInputFile[0].name)
            ) {
              const fileReader = new FileReader();

              // Индикатор загрузки при изменении файла
              fileReader.onprogress = (e: ProgressEvent<FileReader>) => {
                if (e.lengthComputable) {
                  const percentLoaded = Math.round((e.loaded / e.total) * 100);
                  setInputFileProgress(percentLoaded);
                }
              };

              const InputFilesCopy = InputFiles.slice();

              const InputFilesCopyForLoading = InputFiles.slice();

              const PastFileIndex = InputFilesCopy.findIndex(
                (file) => loadedFile.FileName === file.FileName
              );

              InputFilesCopyForLoading[PastFileIndex] = {
                FileData: "",
                FileName: "",
                FileSize: 0,
                FileType: "",
              };

              if (PortNow) {
                setInputFiles(InputFilesCopyForLoading);
              }

              InputFilesCopy[PastFileIndex].FileName = UserInputFile[0].name;
              InputFilesCopy[PastFileIndex].FileSize = UserInputFile[0].size;
              InputFilesCopy[PastFileIndex].FileType = UserInputFile[0].type;

              fileReader.onload = function () {
                InputFilesCopy[PastFileIndex].FileData =
                  fileReader.result as string;

                setInputFiles(InputFilesCopy);
              };
              fileReader.readAsDataURL(UserInputFile[0]);
            }
          }
        },
        [InputFiles, loadedFile.FileName, setInputFileProgress, setInputFiles]
      );

      // Функционал удаления файла
      const FileOnDelete = (): void => {
        const InputFilesCopy = InputFiles.slice();

        const PastFileIndex = InputFilesCopy.findIndex(
          (file) => loadedFile.FileName === file.FileName
        );

        InputFilesCopy.splice(PastFileIndex, 1);

        setInputFiles(InputFilesCopy);
      };

      const loadedFileIsImage: boolean =
        loadedFile.FileType.split("/")[0] == "image";

      const loadedFileIsVideo: boolean =
        loadedFile.FileType.split("/")[0] == "video";

      return (
        <div
          data-testid={`AttachFileContainerFile.${loadedFile.FileName}`}
          className={`${styles.AttachFileContainerFile} ${fileView == "medium" ? styles.AttachFileContainerFile__medium : ""}`}
        >
          <div className={styles.AttachFileContainerFile__info}>
            {loadedFileIsImage ? (
              <img
                className={styles.AttachFileContainerFile__img}
                src={loadedFile.FileData}
                alt={loadedFile.FileName}
              />
            ) : loadedFileIsVideo ? (
              <video
                className={styles.AttachFileContainerFile__video}
                src={loadedFile.FileData}
                controls
                preload="none"
              ></video>
            ) : (
              <img
                className={styles.AttachFileContainerFile__iconFile}
                src={`${URL_PART}/global/images/file.png`}
                alt={loadedFile.FileName}
              />
            )}

            <div className={styles.AttachFileContainerFile__infoWrapper}>
              <span className={styles.AttachFileContainerFile__caption}>
                {loadedFile.FileName}
              </span>

              <span className={styles.AttachFileContainerFile__size}>
                {(loadedFile.FileSize / 1048576).toFixed(1)} Мб
              </span>
            </div>
          </div>

          <div className={styles.AttachFileContainerFile__buttons}>
            <div className={styles.AttachFileContainerFile__changeWrapper}>
              <input
                className={styles.AttachFileContainerFile__changeWrapper__input}
                type="file"
                name="createOrderTechnicalInformationContainer_changeFiles_input"
                ref={ChangeInputRef}
                data-testid={`AttachFileContainerFile.${loadedFile.FileName}.Change`}
                onChange={FileOnChange}
              />

              <ChangeFileSVG
                className={styles.AttachFileContainerFile__change}
              />
            </div>

            <div
              className={styles.AttachFileContainerFile__deleteWrapper}
              onClick={FileOnDelete}
            >
              <DeleteFileSVG
                data-testid={`AttachFileContainerFile.${loadedFile.FileName}.Delete`}
                className={styles.AttachFileContainerFile__delete}
              />
            </div>
          </div>
        </div>
      );
    }
  );
