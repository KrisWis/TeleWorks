import styles from "./CreateOrderTechnicalInformationContainer.module.scss";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import AttachSVG from "@/shared/assets/icons/Global/AttachSVG.svg?react";
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
import { UseCreateOrderTIFormLocalStorage } from "../model/useCreateOrderTIFormLocalStorage/useCreateOrderTIFormLocalStorage";
import "./CreateOrderTechnicalInformationContainerLoadingProgress.scss";
import {
  AttachFileContainer,
  AttachFileContainerItems,
} from "@/features/Global_features/AttachFileContainer";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import { IndexedDBStores } from "@/shared/const/app";
import { IndexedDBName } from "@/shared/const/app";
import { AppRoutes } from "@/shared/const/app";
import { IndexedDBLoader } from "@/shared/lib/IndexedDBLoader";
import { LoadedFile } from "@/shared/types/global";

export const CreateOrderTechnicalInformationContainer: React.FC = memo(
  (): React.JSX.Element => {
    // Валидация текстового поля в форме
    const FormTextAreaRef = useRef<HTMLTextAreaElement>(null);

    const FormTextAreaValueLI = UseCreateOrderTIFormLocalStorage(
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

      saveLSDebounce(user_text);

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

    // Сохранение данных в LS
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const saveLSDebounce = useCallback(
      UseDebounce((lsItem: string) => {
        UseCreateOrderTIFormLocalStorage(UseLocalStorageTypes.UPDATE, lsItem);
      }, 1000),
      []
    );

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

    // Загрузка и отображение, загруженных пользователем, файлов:
    const FormInputRef = useRef<HTMLInputElement>(null);

    const [FormInputFiles, setFormInputFiles] = useState<LoadedFile[]>([]);

    // Индикатор загрузки при загрузке файлов
    const [inputFileProgress, setInputFileProgress] = useState<number>(0);

    // Сохранение файлов в IndexedDB
    const indexedDB = useRef<IDBDatabase>();

    const indexedDBStoreName: string = useMemo(
      () =>
        IndexedDBStores.find((store) => store.route == AppRoutes.CREATE_ORDER)!
          .name,
      []
    );

    return (
      <IndexedDBLoader
        setFiles={setFormInputFiles}
        indexedDB={indexedDB}
        indexedDBStoreName={indexedDBStoreName}
      >
        <div
          className={`${styles.createOrderTechnicalInformationContainer} createOrderTechnicalInformationContainer`}
        >
          <div
            className={`Page__BoxShadowWrapper ${styles.createOrderTechnicalInformationContainer__wrapper}`}
          >
            <div
              className={
                styles.createOrderTechnicalInformationContainer__header
              }
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
                    <AttachFileContainer
                      inputRef={FormInputRef}
                      InputFiles={FormInputFiles}
                      setInputFiles={setFormInputFiles}
                      setInputFileProgress={setInputFileProgress}
                      data-testid="CreateOrderTechnicalInformationContainer.AttachFilesInput"
                      indexedDB={indexedDB.current}
                      indexedDBStoreName={indexedDBStoreName}
                    />

                    <div
                      className={
                        styles.createOrderTechnicalInformationContainer__form__attachFiles
                      }
                    >
                      <AttachSVG />

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
                    {
                      CreateOrderTechnicalInformationFormTextAreaMaxSymbolsAmount
                    }{" "}
                    символов (минимум{" "}
                    {
                      CreateOrderTechnicalInformationFormTextAreaMinSymbolsAmount
                    }
                    )
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

                <AttachFileContainerItems
                  setInputFileProgress={setInputFileProgress}
                  InputFileProgress={inputFileProgress}
                  setInputFiles={setFormInputFiles}
                  files={FormInputFiles}
                  indexedDBName={IndexedDBName}
                  indexedDBStore={indexedDBStoreName}
                  indexedDB={indexedDB.current}
                />
              </div>
            </div>
          </div>

          <div
            className={styles.createOrderTechnicalInformationContainer__agree}
          >
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
              className={
                styles.createOrderTechnicalInformationContainer__button
              }
              type={ButtonTypes.BLACK_WITHOUT_OUTLINE}
              text="Заполнить позже"
            />

            <Button
              className={
                styles.createOrderTechnicalInformationContainer__button
              }
              type={ButtonTypes.RED}
              text="Подтвердить"
              onClick={AgreeButtonOnClick}
            />
          </div>
        </div>
      </IndexedDBLoader>
    );
  }
);
