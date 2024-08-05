import styles from "./CreateOrderTechnicalInformationContainer.module.scss";
import { memo, useRef, useState } from "react";
import PaperClipSVG from "@/shared/assets/icons/CreateOrderPage/CreateOrderTechnicalInformationContent/CreateOrderTechnicalInformationContainer/PaperclipSVG.svg?react";

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
          </div>
        </div>
      </div>
    );
  }
);
