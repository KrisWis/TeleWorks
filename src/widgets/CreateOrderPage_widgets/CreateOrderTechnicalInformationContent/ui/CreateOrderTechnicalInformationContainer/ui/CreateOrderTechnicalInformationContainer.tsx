import styles from "./CreateOrderTechnicalInformationContainer.module.scss";
import { memo, useCallback, useRef, useState } from "react";
import PaperClipSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationContent/CreateOrderTechnicalInformationContainer/PaperclipSVG.svg?react";
import { LoadedFile } from "../model/CreateOrderTechnicalInformationContainer_types";
import { CreateOrderTechnicalInformationLoadedFile } from "./CreateOrderTechnicalInformationLoadedFile";
import { SemipolarLoading } from "react-loadingg";
import { CheckBoxBlock } from "@/shared/ui-kit/CheckBoxBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import {
  CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount,
  CreateOrderTechnicalInformationFormTextAreaMinSymbolsAmount,
  FormTextAreaIsValid,
} from "../model/FormTextAreaIsValid/FormTextAreaIsValid";
import { DataIsCorrectCheck } from "../model/DataIsCorrectCheck/DataIsCorrectCheck";
import { redirectToAbsolutePath } from "@/shared/utils/redirectToAbsolutePath";
import { UseTryAction } from "@/shared/utils/hooks/UseTryAction";
import { useCreateOrderTIFormLocalStorage } from "../model/useCreateOrderTIFormLocalStorage/useCreateOrderTIFormLocalStorage";

export const CreateOrderTechnicalInformationContainer: React.FC = memo(
  (): React.JSX.Element => {
    // Валидация текстового поля в форме
    const FormTextAreaRef = useRef<HTMLTextAreaElement>(null);

    const FormTextAreaValueLI = useCreateOrderTIFormLocalStorage(
      UseLocalStorageTypes.GET
    );

    const [FormTextAreaValue, setFormTextAreaValue] = useState<string>(
      FormTextAreaValueLI || ""
    );

    const [FormTextAreaIsWarn, setFormTextAreaIsWarn] =
      useState<boolean>(false);

    const OnChangeFormTextArea = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
      const user_text = e.target.value;

      useCreateOrderTIFormLocalStorage(UseLocalStorageTypes.UPDATE, user_text);

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

            FormInputRef.current!.files = null;
          };
          fileReader.readAsDataURL(UserInputFiles[0]);
        }
      }
    };

    // Функционал нажатия на чекбокс о соглашении
    const [AgreeCheckboxIsActive, setAgreeCheckboxIsActive] =
      useState<boolean>(false);

    // Нажатие на кнопку "Подтвердить"
    const [TryAgreeWithUncorrectData, setTryAgreeWithUncorrectData] =
      UseTryAction();

    const AgreeButtonOnClick = useCallback(() => {
      if (DataIsCorrectCheck(FormTextAreaValue, AgreeCheckboxIsActive)) {
        redirectToAbsolutePath("/");
      } else {
        setTryAgreeWithUncorrectData(true);
      }
    }, [
      AgreeCheckboxIsActive,
      FormTextAreaValue,
      setTryAgreeWithUncorrectData,
    ]);

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
                ${FormTextAreaIsWarn || (TryAgreeWithUncorrectData && !FormTextAreaIsValid(FormTextAreaValue)) ? styles.createOrderTechnicalInformationContainer__form__textarea__warn : ""}`}
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

              {FormInputFiles && (
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
                          style={{ margin: "auto", marginBottom: "1%" }}
                          color="var(--main-color)"
                          size="small"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.createOrderTechnicalInformationContainer__agree}>
          <CheckBoxBlock
            isActive={AgreeCheckboxIsActive}
            onClick={() => setAgreeCheckboxIsActive(!AgreeCheckboxIsActive)}
            isWarn={TryAgreeWithUncorrectData && !AgreeCheckboxIsActive}
          />

          <p
            className={
              styles.createOrderTechnicalInformationContainer__agree__text
            }
          >
            Предоставленная мной информация является точной и полной. Любые
            изменения требуют согласования с продавцом и могут потребовать
            дополнительной оплаты.
          </p>
        </div>

        <div
          className={styles.createOrderTechnicalInformationContainer__buttons}
        >
          <Button
            className={styles.createOrderTechnicalInformationContainer__button}
            type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
            text="Заполнить позже"
          />

          <Button
            className={styles.createOrderTechnicalInformationContainer__button}
            type={ButtonTypes.RED}
            text="Подтвердить"
            onClick={AgreeButtonOnClick}
          />
        </div>
      </div>
    );
  }
);
