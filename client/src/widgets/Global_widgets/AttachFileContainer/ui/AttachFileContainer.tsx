import styles from "./AttachFileContainer.module.scss";
import { memo, useCallback } from "react";
import {
  AttachFileContainerProps,
  LoadedFile,
} from "../model/AttachFileContainer_types";
import { PortNow } from "@/app";

export const AttachFileContainer: React.FC<AttachFileContainerProps> = memo(
  ({
    inputRef,
    setInputFiles,
    InputFiles,
    setInputFileProgress,
    accept,
    "data-testid": dataTestId = "AttachFileContainer",
    zIndex,
    onChange,
  }): React.JSX.Element => {
    // Загрузка и отображение, загруженных пользователем, изображений:
    const InputOnLoad = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const UserInputFiles = e.target.files;

        if (UserInputFiles && UserInputFiles.length) {
          const loadedFiles: LoadedFile[] = [];

          for (const UserInputFile of UserInputFiles) {
            const loadedFile: LoadedFile = {
              FileData: "",
              FileName: "",
              FileSize: 0,
              FileType: "",
            };

            if (
              !InputFiles.find((file) => file.FileName == UserInputFile.name)
            ) {
              if (PortNow) {
                setInputFiles([
                  ...InputFiles,
                  {
                    FileData: "",
                    FileName: "",
                    FileSize: 0,
                    FileType: "",
                  },
                ]);
              }

              const fileReader = new FileReader();
              loadedFile.FileName = UserInputFile.name;
              loadedFile.FileSize = UserInputFile.size;
              loadedFile.FileType = UserInputFile.type;

              fileReader.onprogress = (e: ProgressEvent<FileReader>) => {
                if (e.lengthComputable) {
                  const percentLoaded = Math.round((e.loaded / e.total) * 100);
                  setInputFileProgress(percentLoaded);
                }
              };

              fileReader.onload = function () {
                loadedFile.FileData = fileReader.result as string;

                loadedFiles.push(loadedFile);

                setInputFiles([...InputFiles, ...loadedFiles]);

                inputRef.current!.files = null;
              };
              fileReader.readAsDataURL(UserInputFile);
            }
          }
        }
      },
      [InputFiles, inputRef, setInputFileProgress, setInputFiles]
    );

    return (
      <input
        style={{ zIndex: zIndex }}
        className={styles.AttachFileContainer}
        type="file"
        ref={inputRef}
        onChange={(e) => {
          InputOnLoad(e);
          onChange && onChange(e);
        }}
        accept={accept}
        data-testid={dataTestId}
        multiple
      />
    );
  }
);
