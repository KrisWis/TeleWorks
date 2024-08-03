import { Select, selectStyles } from "@/shared/ui-kit/Select";
import styles from "./CreateCardForm.module.scss";
import { memo, useEffect, useState } from "react";
import SelectDropdownIndicatorBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorBlueSVG.svg?react";
import {
  Select_Option,
  SelectTextStyles,
} from "@/shared/ui-kit/Select/model/Select_types";
import { CreateCardFormType__selectedOptions } from "../model/CreateCardForm_data";
import { Input } from "@/shared/ui-kit/Input";
import { CheckBoxBlock } from "@/shared/ui-kit/CheckBoxBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";
import { CreateCardFormProps } from "../model/CreateCardForm_types";

const DropdownIndicator = (): JSX.Element => {
  return (
    <SelectDropdownIndicatorBlueSVG className={selectStyles.Select__svg} />
  );
};

const TextStyles: SelectTextStyles = {
  fontFamily: "var(--font-family)",
  fontWeight: 500,
  fontSize: "20px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "#000",
  opacity: 0.4,
};

export const CreateCardForm: React.FC<CreateCardFormProps> = memo(
  ({ setActiveSlide }): React.JSX.Element => {
    const [INNInput, setINNInput] = useState<string>("");

    const [NameInput, setNameInput] = useState<string>("");

    const [OrganizationNameInput, setOrganizationNameInput] =
      useState<string>("");

    const [SignatoryPosition, setSignatoryPosition] = useState<string>("");

    const [SignatoryName, setSignatoryName] = useState<string>("");

    const [SignatoryAction, setSignatoryAction] = useState<string>("");

    const [PatronymicCheckBoxIsActive, setPatronymicCheckBoxIsActive] =
      useState<boolean>(false);

    const [SelectTypeValue, setSelectTypeValue] = useState<Select_Option>(
      CreateCardFormType__selectedOptions[0]
    );

    const IsLegalEntity = SelectTypeValue.value == "Юр.лицо";

    useEffect(() => {
      setActiveSlide(
        CreateCardFormType__selectedOptions.findIndex(
          (item) => item.value == SelectTypeValue.value
        )
      );
    }, [SelectTypeValue, setActiveSlide]);

    return (
      <div className={styles.createCardForm}>
        <h2 className={styles.createCardForm__subcaption}>
          Заполните для пополнения баланса
        </h2>

        <div className={styles.createCardForm__wrapper}>
          <div className={styles.createCardForm__item}>
            <h5 className="CreateCardPage__subcaption">Тип</h5>

            <Select
              className={styles.createCardForm__select}
              selectedOptions={CreateCardFormType__selectedOptions}
              TextStyles={TextStyles}
              CustomDropdownIndicator={DropdownIndicator}
              setState={setSelectTypeValue}
            />
          </div>

          <div className={styles.createCardForm__item}>
            <h5 className="CreateCardPage__subcaption">ИНН</h5>

            <Input
              value={INNInput}
              onChange={(e) => setINNInput(e.target.value)}
              type="text"
              placeholder="43348348384"
            />

            <span className={styles.createCardForm__span}>
              Узнать ИНН физического лица можно на сайте ФНС России
            </span>
          </div>

          <div
            className={`${styles.createCardForm__item} ${styles.createCardForm__item__canBeClosed} ${IsLegalEntity ? styles.createCardForm__item__closed : ""}`}
          >
            <h5 className="CreateCardPage__subcaption">Ваши ФИО</h5>

            <Input
              value={NameInput}
              onChange={(e) => setNameInput(e.target.value)}
              type="text"
              placeholder="Иван Иванов Иванович"
            />

            <div className={styles.createCardForm__patronymic}>
              <CheckBoxBlock
                isActive={PatronymicCheckBoxIsActive}
                onClick={() =>
                  setPatronymicCheckBoxIsActive(!PatronymicCheckBoxIsActive)
                }
              />

              <span className={styles.createCardForm__patronymic__text}>
                Нет отчества
              </span>
            </div>
          </div>

          <div
            className={`${styles.createCardForm__item} ${styles.createCardForm__item__canBeClosed} ${!IsLegalEntity ? styles.createCardForm__item__closed : ""}`}
          >
            <h5 className="CreateCardPage__subcaption">
              Наименование организации
            </h5>

            <Input
              value={OrganizationNameInput}
              onChange={(e) => setOrganizationNameInput(e.target.value)}
              type="text"
              placeholder="ООО “TeleWorks”"
            />

            <span className={styles.createCardForm__span}>
              Укажите точное название вашей организации т.к. эти данные будут
              отражены в платежных документах.
            </span>
          </div>
        </div>

        <div
          className={`${styles.createCardForm__wrapper} ${styles.createCardForm__wrapper__canBeClosed} ${!IsLegalEntity ? styles.createCardForm__wrapper__closed : ""}`}
        >
          <h2 className={styles.createCardForm__subcaption}>
            Данные подписанта
          </h2>

          <div className={styles.createCardForm__item}>
            <h5 className="CreateCardPage__subcaption">Должность подписанта</h5>

            <Input
              value={SignatoryPosition}
              onChange={(e) => setSignatoryPosition(e.target.value)}
              type="text"
              placeholder="43348348384"
            />
          </div>

          <div className={styles.createCardForm__item}>
            <h5 className="CreateCardPage__subcaption">ФИО подписанта</h5>

            <Input
              value={SignatoryName}
              onChange={(e) => setSignatoryName(e.target.value)}
              type="text"
              placeholder="Иван Иванов Иванович"
            />
          </div>

          <div className={styles.createCardForm__item}>
            <h5 className="CreateCardPage__subcaption">
              Подписант действует на основании
            </h5>

            <Input
              value={SignatoryAction}
              onChange={(e) => setSignatoryAction(e.target.value)}
              type="text"
              placeholder="Иван Иванов Иванович"
            />

            <span className={styles.createCardForm__span}>
              Например, на основании устава, доверенности
            </span>
          </div>
        </div>

        <div className={styles.createCardForm__tips}>
          <div className={styles.createCardForm__tip}>
            <h6 className="CreateCardPage__subcaption">Для агентств</h6>

            <p className={styles.createCardForm__tip__desc}>
              Если вы не являетесь конечным рекламодателем, зарегистрируйте его
              в разделе{" "}
              <a href="#" className="Page__RedLink">
                Агентский доступ.
              </a>
            </p>
          </div>

          <div className={styles.createCardForm__tip}>
            <h6 className="CreateCardPage__subcaption">Проверьте данные</h6>

            <p className={styles.createCardForm__tip__desc}>
              Проверьте правильность заполнения данных и сохраните их. После
              сохранения изменить данные организации будет нельзя.
            </p>
          </div>
        </div>

        <p className={styles.createCardForm__bottomText}>
          Нажимая кнопку Сохранить, вы подтверждаете: достоверность данных,
          ознакомление и принятие условий{" "}
          <a href="#" className="Page__RedLink">
            Оферты
          </a>
          , согласие на обработку{" "}
          <a href="#" className="Page__RedLink">
            Персональных данных.
          </a>
        </p>

        <Button
          className={styles.createCardForm__continue}
          type={ButtonTypes.RED}
          text="Сохранить"
        />
      </div>
    );
  }
);
