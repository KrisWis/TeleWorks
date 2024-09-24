import styles from "./UserEditGeneral.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import {
  LoadImageBlock,
  UseLoadedImage,
  UseLoadedImageErrors,
} from "@/shared/ui-kit/LoadImageBlock";
import { Input } from "@/shared/ui-kit/Input";
import { Select, selectStyles } from "@/shared/ui-kit/Select";
import SelectDropdownIndicatorDarkBlueSVG from "@/shared/assets/icons/Global/SelectDropdownIndicatorDarkBlueSVG.svg?react";
import {
  Select_Option,
  SelectTextStyles,
  valueContainerPaddingEnum,
} from "@/shared/ui-kit/Select/model/Select_types";
import {
  ProfessionSelect__selectedOptions,
  SelectProfessionsEnum,
} from "../model/UserEditGeneral_data";
import { UserEditPageContext } from "@/pages/UserEditPage";
import { UserEditTabsEnum } from "@/widgets/UserEditPage_widgets/UserEditTabs";
import { UseLocalStorageTypes } from "@/shared/utils/hooks/UseLocalStorage";
import { UseDebounce } from "@/shared/utils/hooks/UseDebounce/UseDebounce";
import { UseUserEditGeneralLocalStorage } from "../model/UseUserEditGeneralLocalStorage/UseUserEditGeneralLocalStorage";
import { LoadImageBlockSizes } from "@/shared/ui-kit/LoadImageBlockWithoutLoading";
import { TagsInput } from "@/shared/ui-kit/TagsInput";

const ProfessionSelectDropdownIndicator = (): JSX.Element => {
  return (
    <SelectDropdownIndicatorDarkBlueSVG className={selectStyles.Select__svg} />
  );
};

const ProfessionSelectTextStyles: SelectTextStyles = {
  fontFamily: "var(--second-family)",
  fontWeight: 400,
  fontSize: "14px",
  letterSpacing: "-0.01em",
  lineHeight: "150%",
  color: "#b2b2b2",
};

export const UserEditGeneral: React.FC = memo((): React.JSX.Element => {
  // Ввод данных в инпуты и добавление/взятие данных из Local Storage
  const LocalStorageGeneralDebounce = UseDebounce(() => {
    UseUserEditGeneralLocalStorage(UseLocalStorageTypes.UPDATE, {
      name: NameInputValue,
      surname: SurnameInputValue,
      profession: {
        value: ProfessionSelect?.value,
        label: ProfessionSelect?.label,
      },
      tags: SelectedTags,
    });
  }, 1000);

  const UserEditGeneralLSItem = UseUserEditGeneralLocalStorage(
    UseLocalStorageTypes.GET
  );
  const [NameInputValue, setNameInputValue] = useState<string>(
    UserEditGeneralLSItem ? UserEditGeneralLSItem.name : ""
  );

  const [ProfessionSelect, setProfessionSelect] = useState<
    Select_Option<SelectProfessionsEnum>
  >(
    UserEditGeneralLSItem
      ? UserEditGeneralLSItem.profession
      : ProfessionSelect__selectedOptions[0]
  );

  const ProfessionSelectOnChange = (
    newValue: Select_Option<SelectProfessionsEnum>
  ) => {
    setProfessionSelect(newValue);
  };

  const NameInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(e.target.value);
  };

  const [SurnameInputValue, setSurnameInputValue] = useState<string>(
    UserEditGeneralLSItem ? UserEditGeneralLSItem.surname : ""
  );

  const SurNameInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurnameInputValue(e.target.value);
  };

  // Ввод данных в теги
  const [SelectedTags, setSelectedTags] = useState<string[]>(
    UserEditGeneralLSItem ? UserEditGeneralLSItem.tags : []
  );

  // Стейты для загрузки изображений
  const [HeaderLoadedImage, setHeaderLoadedImage] = UseLoadedImage();

  const [HeaderLoadedImageErrors, setHeaderLoadedImageErrors] =
    UseLoadedImageErrors();

  const [AvatarLoadedImage, setAvatarLoadedImage] = UseLoadedImage();

  const [AvatarLoadedImageErrors, setAvatarLoadedImageErrors] =
    UseLoadedImageErrors();

  // Добавление рефа для скроллинга
  const { refs } = useContext(UserEditPageContext);

  // Добавление в Local Storage
  useEffect(() => {
    LocalStorageGeneralDebounce();
  }, [
    LocalStorageGeneralDebounce,
    NameInputValue,
    SurnameInputValue,
    ProfessionSelect,
    SelectedTags,
  ]);

  return (
    <div
      ref={refs[UserEditTabsEnum.GENERAL]}
      className={styles.userEditGeneral}
    >
      <h4 className="UserEditPage__caption">Основная информация:</h4>

      <LoadImageBlock
        className={styles.userEditGeneral__headerImage}
        size={LoadImageBlockSizes.BIG}
        title="Загрузить шапку профиля"
        LoadedImage={HeaderLoadedImage}
        setLoadedImage={setHeaderLoadedImage}
        LoadedImageErrors={HeaderLoadedImageErrors}
        setLoadedImageErrors={setHeaderLoadedImageErrors}
      />

      <div className={styles.userEditGeneral__info}>
        <LoadImageBlock
          className={styles.userEditGeneral__avatar}
          size={LoadImageBlockSizes.SMALL}
          title="Загрузите аватарку"
          LoadedImage={AvatarLoadedImage}
          setLoadedImage={setAvatarLoadedImage}
          LoadedImageErrors={AvatarLoadedImageErrors}
          setLoadedImageErrors={setAvatarLoadedImageErrors}
        />

        <div className={styles.userEditGeneral__inputs}>
          <div className={styles.userEditGeneral__inputs__header}>
            <div className={styles.userEditGeneral__inputWrapper}>
              <span className={styles.userEditGeneral__inputWrapper__title}>
                Имя
              </span>

              <Input
                value={NameInputValue}
                onChange={NameInputOnChange}
                type="text"
                placeholder="Иван"
                className={styles.userEditGeneral__inputWrapper__input}
              />
            </div>

            <div className={styles.userEditGeneral__inputWrapper}>
              <span className={styles.userEditGeneral__inputWrapper__title}>
                Фамилия
              </span>

              <Input
                value={SurnameInputValue}
                onChange={SurNameInputOnChange}
                type="text"
                placeholder="Иванов"
                className={styles.userEditGeneral__inputWrapper__input}
              />
            </div>
          </div>

          <div className={styles.userEditGeneral__inputWrapper}>
            <span className={styles.userEditGeneral__inputWrapper__title}>
              Профессия
            </span>

            <Select
              className={styles.userEditGeneral__select}
              selectedOptions={ProfessionSelect__selectedOptions}
              CustomDropdownIndicator={ProfessionSelectDropdownIndicator}
              TextStyles={ProfessionSelectTextStyles}
              valueContainerPadding={valueContainerPaddingEnum.SMALL}
              setState={ProfessionSelectOnChange}
              DefaultSelectedOption={ProfessionSelect}
            />
          </div>

          <div className={styles.userEditGeneral__inputWrapper}>
            <span className={styles.userEditGeneral__inputWrapper__title}>
              Навыки
            </span>

            <TagsInput
              setSelectedTags={setSelectedTags}
              SelectedTags={SelectedTags}
            />

            <span className={`UserEditPage__desc`}>
              Начните вводить название программ в которых вы работаете.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
