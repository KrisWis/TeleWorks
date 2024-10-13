import { memo } from "react";
import { AttachFileContainerItemsProps } from "../model/AttachFileContainerItems_types";
import { AttachFileContainerFile } from "../../AttachFileContainerFile";
import { Flex } from "@/shared/ui-kit/Stack";
import { PageLoadingComponent } from "@/shared/ui-kit/PageLoadingComponent/PageLoadingComponent";
import { ProgressBar } from "primereact/progressbar";
import styles from "./AttachFileContainerItems.module.scss";

export const AttachFileContainerItems: React.FC<AttachFileContainerItemsProps> =
  memo(
    ({
      setInputFiles,
      setInputFileProgress,
      files,
      InputFileProgress,
      fileView = "big",
      accept,
      indexedDBName,
      indexedDBStore,
      onChange,
    }): React.JSX.Element => {
      return (
        <Flex max>
          {files && (
            <Flex
              max
              direction="column"
              className={
                fileView == "medium"
                  ? styles.AttachFileContainerItems__medium
                  : ""
              }
            >
              {files.map((file) => (
                <Flex max key={file.FileName}>
                  {file.FileName != "" ? (
                    <AttachFileContainerFile
                      loadedFile={file}
                      InputFiles={files}
                      setInputFiles={setInputFiles}
                      setInputFileProgress={setInputFileProgress}
                      fileView={fileView}
                      accept={accept}
                      indexedDBName={indexedDBName}
                      indexedDBStore={indexedDBStore}
                      onChange={onChange}
                    />
                  ) : (
                    <Flex max gap="5" direction="column">
                      <PageLoadingComponent
                        style={{ margin: "auto", marginBottom: "1%" }}
                        size="small"
                      />

                      <ProgressBar
                        style={{ width: `${InputFileProgress}%` }}
                        className={
                          styles.AttachFileContainerItems__loadingProgressBar
                        }
                        value={InputFileProgress}
                      ></ProgressBar>
                    </Flex>
                  )}
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      );
    }
  );
