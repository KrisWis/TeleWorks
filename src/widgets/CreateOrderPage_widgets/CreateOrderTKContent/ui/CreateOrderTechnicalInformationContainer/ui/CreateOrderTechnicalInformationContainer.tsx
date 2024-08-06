import styles from "./CreateOrderTechnicalInformationContainer.module.scss";
import { memo, useRef, useState } from "react";
import PaperClipSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationContent/CreateOrderTechnicalInformationContainer/PaperclipSVG.svg?react";
import { LoadedFile } from "../model/CreateOrderTechnicalInformationContainer_types";
import { CreateOrderTechnicalInformationLoadedFile } from "./CreateOrderTechnicalInformationLoadedFile";
import { SemipolarLoading } from "react-loadingg";

export const CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount = 1200;

export const CreateOrderTechnicalInformationFormTextAreaMinSymbolsAmount = 100;

export const CreateOrderTechnicalInformationContainer: React.FC = memo(
  (): React.JSX.Element => {
    // Валидация текстового поля в форме
    const FormTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const [FormTextAreaValue, setFormTextAreaValue] = useState<string>("");

    const [FormTextAreaIsWarn, setFormTextAreaIsWarn] =
      useState<boolean>(false);

    const OnChangeFormTextArea = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
      const user_text = e.target.value;

      if (
        user_text.length <=
        CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount
      ) {
        setFormTextAreaValue(user_text);
        setFormTextAreaIsWarn(false);
      } else {
        setFormTextAreaIsWarn(true);
      }

      if (FormTextAreaRef.current) {
        FormTextAreaRef.current.style.height = "1px";
      }

      if (
        FormTextAreaRef.current &&
        user_text.length > 450 &&
        user_text.length <= 1201
      ) {
        FormTextAreaRef.current.style.height =
          1 + FormTextAreaRef.current.scrollHeight + "px";
      }
    };

    // Загрузка и отображение, загруженных пользователем, изображений:
    const FormInputRef = useRef<HTMLInputElement>(null);

    const [FormInputFiles, setFormInputFiles] = useState<LoadedFile[]>([]);

    const FormInputOnLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
      const UserInputFiles = e.target.files;

      const loadedFile: LoadedFile = {
        FileData: "",
        FileName: "",
        FileSize: 0,
        FileType: "",
      };

      if (UserInputFiles && UserInputFiles.length) {
        if (
          !FormInputFiles.find(
            (file) => file.FileName == UserInputFiles[0].name
          )
        ) {
          setFormInputFiles([
            ...FormInputFiles,
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

          fileReader.onload = function () {
            loadedFile.FileData = fileReader.result as string;

            setFormInputFiles([...FormInputFiles, loadedFile]);
          };
          fileReader.readAsDataURL(UserInputFiles[0]);
        }
      }
    };

    return (
      <div className={styles.createOrderTechnicalInformationContainer}>
        <div
          className={`Page__BoxShadowWrapper ${styles.createOrderTechnicalInformationContainer__wrapper}`}
        >
          <div
            className={styles.createOrderTechnicalInformationContainer__header}
          >
            <h6
              className={`${styles.createOrderTechnicalInformationContainer__caption} CreateOrderPage__caption`}
            >
              Материалы для работы
            </h6>
          </div>

          <div
            className={styles.createOrderTechnicalInformationContainer__form}
          >
            <span className="CreateOrderPage__caption">
              Исполнителю для создание проекта, понадобится:
            </span>

            <ul
              className={
                styles.createOrderTechnicalInformationContainer__form__steps
              }
            >
              <li
                className={
                  styles.createOrderTechnicalInformationContainer__form__step
                }
              >
                <span className="CreateOrderPage__subcaption">
                  1. Исходные фото
                </span>

                <p
                  className={
                    styles.createOrderTechnicalInformationContainer__form__step__desc
                  }
                >
                  Пожалуйста, проверьте качество фото
                </p>
              </li>

              <li
                className={
                  styles.createOrderTechnicalInformationContainer__form__step
                }
              >
                <span className="CreateOrderPage__subcaption">
                  2. Техническое задание
                </span>
              </li>
            </ul>

            <div
              className={
                styles.createOrderTechnicalInformationContainer__form__textareaWrapper
              }
            >
              <textarea
                ref={FormTextAreaRef}
                className={`${styles.createOrderTechnicalInformationContainer__form__textarea}
                ${FormTextAreaIsWarn ? styles.createOrderTechnicalInformationContainer__form__textarea__warn : ""}`}
                name="createOrderTechnicalInformationContainer__form__textarea"
                value={FormTextAreaValue}
                onChange={OnChangeFormTextArea}
              ></textarea>

              <div
                className={
                  styles.createOrderTechnicalInformationContainer__form__textareaFooter
                }
              >
                <div
                  className={
                    styles.createOrderTechnicalInformationContainer__form__attachFilesWrapper
                  }
                >
                  <input
                    className={
                      styles.createOrderTechnicalInformationContainer__form__attachFiles__input
                    }
                    type="file"
                    name="createOrderTechnicalInformationContainer_loadFiles_input"
                    ref={FormInputRef}
                    onChange={FormInputOnLoad}
                  />

                  <div
                    className={
                      styles.createOrderTechnicalInformationContainer__form__attachFiles
                    }
                  >
                    <PaperClipSVG />

                    <span
                      className={
                        styles.createOrderTechnicalInformationContainer__form__attachFiles__text
                      }
                    >
                      Прикрепить файл
                    </span>
                  </div>
                </div>

                <span
                  className={
                    styles.createOrderTechnicalInformationContainer__form__symbolsAmount
                  }
                >
                  {FormTextAreaValue.length} из{" "}
                  {CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount}{" "}
                  символов (минимум{" "}
                  {CreateOrderTechnicalInformationFormTextAreaMinSymbolsAmount})
                </span>
              </div>
            </div>

            <div
              className={`${styles.createOrderTechnicalInformationContainer__files}
              ${!FormInputFiles.length ? styles.createOrderTechnicalInformationContainer__files__closed : ""}`}
            >
              <h6
                className={`${styles.createOrderTechnicalInformationContainer__caption} 
                  ${styles.createOrderTechnicalInformationContainer__files__caption} CreateOrderPage__caption`}
              >
                Загруженные файлы
              </h6>

              <div
                className={`${styles.createOrderTechnicalInformationContainer__files__items}`}
              >
                {FormInputFiles.map((file) => (
                  <div key={file.FileName}>
                    {file.FileName != "" ? (
                      <CreateOrderTechnicalInformationLoadedFile
                        loadedFile={file}
                        FormInputFiles={FormInputFiles}
                        setFormInputFiles={setFormInputFiles}
                      />
                    ) : (
                      <SemipolarLoading
                        style={{ margin: "auto", marginBottom: 20 }}
                        color="var(--main-color)"
                        size="small"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
