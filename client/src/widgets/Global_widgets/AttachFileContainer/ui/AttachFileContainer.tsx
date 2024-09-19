import styles from "./AttachFileContainer.module.scss";
import { memo } from "react";
import {
  AttachFileContainerProps,
  LoadedFile,
} from "../model/AttachFileContainer_types";

export const AttachFileContainer: React.FC<AttachFileContainerProps> = memo(
  ({
    inputRef,
    setInputFiles,
    InputFiles,
    setInputFileProgress,
  }): React.JSX.Element => {
    // Загрузка и отображение, загруженных пользователем, изображений:
    const InputOnLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
      const UserInputFiles = e.target.files;

      const loadedFile: LoadedFile = {
        FileData: "",
        FileName: "",
        FileSize: 0,
        FileType: "",
      };

      if (UserInputFiles && UserInputFiles.length) {
        if (
          !InputFiles.find((file) => file.FileName == UserInputFiles[0].name)
        ) {
          setInputFiles([
            ...InputFiles,
            {
              FileData: "",
              FileName: "",
              FileSize: 0,
              FileType: "",
            },
          ]);

          const fileReader = new FileReader();
          loadedFile.FileName = UserInputFiles[0].name;
          loadedFile.FileSize = UserInputFiles[0].size;
          loadedFile.FileType = UserInputFiles[0].type;

          fileReader.onprogress = (e: ProgressEvent<FileReader>) => {
            if (e.lengthComputable) {
              const percentLoaded = Math.round((e.loaded / e.total) * 100);
              setInputFileProgress(percentLoaded);
            }
          };

          fileReader.onload = function () {
            loadedFile.FileData = fileReader.result as string;

            setInputFiles([...InputFiles, loadedFile]);

            inputRef.current!.files = null;
          };
          fileReader.readAsDataURL(UserInputFiles[0]);
        }
      }
    };

    return (
      <input
        className={styles.AttachFileContainer}
        type="file"
        ref={inputRef}
        onChange={InputOnLoad}
      />
    );
  }
);
