import { Select, selectStyles } from "@/shared/ui-kit/Select";
import styles from "./CreateCardForm.module.scss";
import { memo, useState } from "react";
import SelectDropdownIndicatorBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorBlueSVG.svg?react";
import { SelectTextStyles } from "@/shared/ui-kit/Select/model/Select_types";
import { CreateCardFormType__selectedOptions } from "../model/CreateCardForm_data";
import { Input } from "@/shared/ui-kit/Input";
import { CheckBoxBlock } from "@/shared/ui-kit/CheckBoxBlock";
import { Button, ButtonTypes } from "@/shared/ui-kit/Button";

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

export const CreateCardForm: React.FC = memo((): React.JSX.Element => {
  const [INNInput, setINNInput] = useState<string>("");

  const [NameInput, setNameInput] = useState<string>("");

  const [PatronymicCheckBoxIsActive, setPatronymicCheckBoxIsActive] =
    useState<boolean>(false);

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
          />
        </div>

        <div className={styles.createCardForm__item}>
          <h5 className="CreateCardPage__subcaption">ИНН</h5>

          <Input
            value={INNInput}
            onChange={(e) => setINNInput(e.target.value)}
            type="number"
            placeholder="43348348384"
          />

          <span className={styles.createCardForm__span}>
            Узнать ИНН физического лица можно на сайте ФНС России
          </span>
        </div>

        <div className={styles.createCardForm__item}>
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
      </div>

      <div className={styles.createCardForm__tips}>
        <div className={styles.createCardForm__tip}>
          <h6 className="CreateCardPage__subcaption">Для агентств</h6>

          <p className={styles.createCardForm__tip__desc}>
            Если вы не являетесь конечным рекламодателем, зарегистрируйте его в
            разделе{" "}
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
});
